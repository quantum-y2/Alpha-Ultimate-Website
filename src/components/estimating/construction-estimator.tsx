'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Building, PencilRuler } from 'lucide-react';

const constructionRates = {
  // Rates in SAR per square meter
  excavation: { label: 'Excavation & Earthwork', rate: 45 },
  concrete: { label: 'Concrete & Foundation', rate: 350 },
  structural: { label: 'Structural Steel', rate: 250 },
  blockwork: { label: 'Blockwork & Masonry', rate: 120 },
  electrical: { label: 'Electrical Works', rate: 180 },
  plumbing: { label: 'Plumbing & HVAC', rate: 200 },
  finishing: { label: 'Finishing (Plaster, Paint)', rate: 90 },
};

type ConstructionItem = keyof typeof constructionRates;

export function ConstructionEstimator() {
  const [quantities, setQuantities] = useState<Record<ConstructionItem, number>>(
    Object.keys(constructionRates).reduce((acc, key) => ({ ...acc, [key]: 0 }), {} as Record<ConstructionItem, number>)
  );

  const handleQuantityChange = (item: ConstructionItem, value: string) => {
    const numberValue = parseInt(value, 10);
    setQuantities(prev => ({
      ...prev,
      [item]: isNaN(numberValue) ? 0 : numberValue,
    }));
  };

  const { total, lineItems } = useMemo(() => {
    let currentTotal = 0;
    const currentLineItems = (Object.keys(constructionRates) as ConstructionItem[])
      .map(key => {
        const quantity = quantities[key] || 0;
        const itemTotal = quantity * constructionRates[key].rate;
        if (itemTotal > 0) {
          currentTotal += itemTotal;
          return {
            description: constructionRates[key].label,
            quantity: quantity.toLocaleString(),
            rate: constructionRates[key].rate.toLocaleString(),
            total: itemTotal.toLocaleString(),
          };
        }
        return null;
      })
      .filter(Boolean);

    return { total: currentTotal, lineItems: currentLineItems };
  }, [quantities]);

  return (
    <Card className="neon-border-accent">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-headline text-accent">
          <Building />
          Construction Cost Estimator
        </CardTitle>
        <CardDescription>Enter the area in square meters (m²) for each item to estimate the cost.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.keys(constructionRates) as ConstructionItem[]).map(key => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium">{constructionRates[key].label}</label>
              <div className="relative">
                <PencilRuler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  placeholder="0"
                  value={quantities[key] || ''}
                  onChange={e => handleQuantityChange(key, e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-4">
        <h3 className="font-headline text-2xl font-bold">Cost Summary</h3>
        <div className="w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Area (m²)</TableHead>
                <TableHead className="text-right">Rate (SAR/m²)</TableHead>
                <TableHead className="text-right">Total (SAR)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lineItems.length > 0 ? (
                lineItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item!.description}</TableCell>
                    <TableCell className="text-right">{item!.quantity}</TableCell>
                    <TableCell className="text-right">{item!.rate}</TableCell>
                    <TableCell className="text-right font-semibold">{item!.total}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">
                    Enter quantities above to see the cost breakdown.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="w-full flex justify-end items-center gap-4 pt-4">
            <span className="text-muted-foreground">Total Estimated Cost:</span>
            <span className="font-headline text-3xl font-bold text-accent">
                {total.toLocaleString()} SAR
            </span>
        </div>
        <p className="text-xs text-muted-foreground pt-4">
          Disclaimer: This is a preliminary estimate for budget planning only. Rates are based on current market averages in KSA and are subject to change. Final costs depend on project specifics, material quality, and site conditions.
        </p>
      </CardFooter>
    </Card>
  );
}
