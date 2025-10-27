'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Users, HardHat } from 'lucide-react';

const manpowerRates = {
  // Rates in SAR per person per month
  laborer: { label: 'General Laborer', rate: 2500 },
  carpenter: { label: 'Carpenter', rate: 3800 },
  mason: { label: 'Mason / Plasterer', rate: 3500 },
  steelFixer: { label: 'Steel Fixer', rate: 4000 },
  electrician: { label: 'Electrician', rate: 4500 },
  plumber: { label: 'Plumber', rate: 4200 },
  hvacTech: { label: 'HVAC Technician', rate: 5000 },
  supervisor: { label: 'Site Supervisor', rate: 7000 },
};

type ManpowerItem = keyof typeof manpowerRates;

export function ManpowerEstimator() {
  const [quantities, setQuantities] = useState<Record<ManpowerItem, number>>(
    Object.keys(manpowerRates).reduce((acc, key) => ({ ...acc, [key]: 0 }), {} as Record<ManpowerItem, number>)
  );

  const handleQuantityChange = (item: ManpowerItem, value: string) => {
    const numberValue = parseInt(value, 10);
    setQuantities(prev => ({
      ...prev,
      [item]: isNaN(numberValue) ? 0 : numberValue,
    }));
  };

  const { total, lineItems } = useMemo(() => {
    let currentTotal = 0;
    const currentLineItems = (Object.keys(manpowerRates) as ManpowerItem[])
      .map(key => {
        const quantity = quantities[key] || 0;
        const itemTotal = quantity * manpowerRates[key].rate;
        if (itemTotal > 0) {
          currentTotal += itemTotal;
          return {
            description: manpowerRates[key].label,
            quantity: quantity.toLocaleString(),
            rate: manpowerRates[key].rate.toLocaleString(),
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
          <Users />
          Manpower Outsourcing Estimator
        </CardTitle>
        <CardDescription>Enter the number of workers for each role to estimate the monthly cost.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.keys(manpowerRates) as ManpowerItem[]).map(key => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium">{manpowerRates[key].label}</label>
              <div className="relative">
                 <HardHat className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
        <h3 className="font-headline text-2xl font-bold">Monthly Cost Summary</h3>
        <div className="w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Rate (SAR/month)</TableHead>
                <TableHead className="text-right">Total (SAR/month)</TableHead>
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
            <span className="text-muted-foreground">Total Estimated Monthly Cost:</span>
            <span className="font-headline text-3xl font-bold text-accent">
                {total.toLocaleString()} SAR
            </span>
        </div>
         <p className="text-xs text-muted-foreground pt-4">
          Disclaimer: This estimate covers monthly salaries. It does not include accommodation, transportation, iqama fees, or other administrative costs, which will be quoted separately.
        </p>
      </CardFooter>
    </Card>
  );
}
