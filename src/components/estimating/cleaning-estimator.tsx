'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Sparkles, Trash2 } from 'lucide-react';

const cleaningRates = {
  // Rates in SAR per square meter
  initialClean: { label: 'Initial Post-Construction Cleaning', rate: 8 },
  finalClean: { label: 'Final Handover Cleaning', rate: 12 },
  exteriorWash: { label: 'Exterior Power Washing', rate: 5 },
  windowClean: { label: 'Exterior Window Cleaning', rate: 6 },
  debrisRemoval: { label: 'Debris Removal (per truck load)', rate: 500, unit: 'load' },
};

type CleaningItem = keyof typeof cleaningRates;

export function CleaningEstimator() {
  const [quantities, setQuantities] = useState<Record<CleaningItem, number>>(
    Object.keys(cleaningRates).reduce((acc, key) => ({ ...acc, [key]: 0 }), {} as Record<CleaningItem, number>)
  );

  const handleQuantityChange = (item: CleaningItem, value: string) => {
    const numberValue = parseInt(value, 10);
    setQuantities(prev => ({
      ...prev,
      [item]: isNaN(numberValue) ? 0 : numberValue,
    }));
  };

  const { total, lineItems } = useMemo(() => {
    let currentTotal = 0;
    const currentLineItems = (Object.keys(cleaningRates) as CleaningItem[])
      .map(key => {
        const quantity = quantities[key] || 0;
        const itemTotal = quantity * cleaningRates[key].rate;
        if (itemTotal > 0) {
          currentTotal += itemTotal;
          return {
            description: cleaningRates[key].label,
            quantity: quantity.toLocaleString(),
            rate: cleaningRates[key].rate.toLocaleString(),
            unit: cleaningRates[key].unit === 'load' ? 'loads' : 'm²',
            rateUnit: cleaningRates[key].unit === 'load' ? 'load' : 'm²',
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
          <Sparkles />
          Cleaning Services Estimator
        </CardTitle>
        <CardDescription>Enter the area (m²) or quantity for each service to estimate the cost.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.keys(cleaningRates) as CleaningItem[]).map(key => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium">{cleaningRates[key].label}</label>
              <div className="relative">
                {cleaningRates[key].unit === 'load' ? 
                  <Trash2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> :
                  <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                }
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
                <TableHead>Service</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Rate (SAR)</TableHead>
                <TableHead className="text-right">Total (SAR)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lineItems.length > 0 ? (
                lineItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item!.description}</TableCell>
                    <TableCell className="text-right">{item!.quantity} {item!.unit}</TableCell>
                    <TableCell className="text-right">{item!.rate} / {item!.rateUnit}</TableCell>
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
          Disclaimer: This is a preliminary estimate. All cleaning projects require a site visit for an accurate and final quotation. Rates include standard cleaning materials.
        </p>
      </CardFooter>
    </Card>
  );
}
