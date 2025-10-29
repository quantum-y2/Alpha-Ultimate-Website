'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Users, PlusCircle, Trash2 } from 'lucide-react';

type LineItem = {
  id: number;
  description: string;
  quantity: number;
  rate: number;
  unit: string;
};

export function ManpowerEstimator() {
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: 'General Laborer', quantity: 0, rate: 0, unit: 'month' },
    { id: 2, description: 'Carpenter', quantity: 0, rate: 0, unit: 'month' },
  ]);

  const handleItemChange = (id: number, field: keyof Omit<LineItem, 'id'>, value: string | number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };
  
  const addNewItem = () => {
    setItems(prev => [...prev, { id: Date.now(), description: '', quantity: 0, rate: 0, unit: 'month' }]);
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const total = useMemo(() => {
    return items.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
  }, [items]);

  return (
    <Card className="neon-border-accent">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-headline text-accent">
          <Users />
          Manpower Outsourcing Estimator
        </CardTitle>
        <CardDescription>Enter your project details to get a custom estimate. Add or remove roles as needed.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-10 gap-2 items-end p-2 border rounded-md">
            <div className="md:col-span-5">
              <label className="text-xs text-muted-foreground">Role Description</label>
              <Input
                type="text"
                placeholder="e.g., Steel Fixer"
                value={item.description}
                onChange={e => handleItemChange(item.id, 'description', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
               <label className="text-xs text-muted-foreground">Quantity</label>
              <Input
                type="number"
                placeholder="0"
                value={item.quantity || ''}
                onChange={e => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
              />
            </div>
            <div className="md:col-span-2">
               <label className="text-xs text-muted-foreground">Monthly Rate (SAR)</label>
              <Input
                type="number"
                placeholder="0"
                value={item.rate || ''}
                onChange={e => handleItemChange(item.id, 'rate', parseFloat(e.target.value) || 0)}
              />
            </div>
            <div className="md:col-span-1">
              <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
         <Button variant="outline" onClick={addNewItem}><PlusCircle className="mr-2" /> Add Role</Button>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-4">
        <h3 className="font-headline text-2xl font-bold">Monthly Cost Summary</h3>
        <div className="w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Calculation</TableHead>
                <TableHead className="text-right">Total (SAR/month)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.filter(i => i.quantity * i.rate > 0).length > 0 ? (
                items.map(item => item.quantity * item.rate > 0 && (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.description}</TableCell>
                    <TableCell className="text-muted-foreground font-mono text-xs">
                      {item.quantity.toLocaleString()} workers &times; {item.rate.toLocaleString()} SAR/month
                    </TableCell>
                    <TableCell className="text-right font-semibold">{(item.quantity * item.rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground">
                    Enter quantities and rates above to see the cost breakdown.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="w-full flex justify-end items-center gap-4 pt-4">
            <span className="text-muted-foreground">Total Estimated Monthly Cost:</span>
            <span className="font-headline text-3xl font-bold text-accent">
                {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR
            </span>
        </div>
         <p className="text-xs text-muted-foreground pt-4">
          Disclaimer: This estimate covers monthly salaries. It does not include accommodation, transportation, iqama fees, or other administrative costs, which will be quoted separately.
        </p>
      </CardFooter>
    </Card>
  );
}
