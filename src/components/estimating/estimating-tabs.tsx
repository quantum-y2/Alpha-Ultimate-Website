'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ConstructionEstimator } from './construction-estimator';
import { ManpowerEstimator } from './manpower-estimator';
import { CleaningEstimator } from './cleaning-estimator';

export function EstimatingTabs() {
  return (
    <Tabs defaultValue="construction" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="construction">Construction</TabsTrigger>
        <TabsTrigger value="manpower">Manpower</TabsTrigger>
        <TabsTrigger value="cleaning">Cleaning</TabsTrigger>
      </TabsList>
      <TabsContent value="construction">
        <ConstructionEstimator />
      </TabsContent>
      <TabsContent value="manpower">
        <ManpowerEstimator />
      </TabsContent>
      <TabsContent value="cleaning">
        <CleaningEstimator />
      </TabsContent>
    </Tabs>
  );
}
