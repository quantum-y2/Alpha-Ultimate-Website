'use client';

import { useState } from 'react';
import { BrainCircuit, Loader2, Save, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { runYusraInsight, saveYusraInsight } from '@/lib/actions';
import { Separator } from '../ui/separator';

const initialInsight = "Insight: 3 projects are ending next month. Prepare to re-allocate 75 workers. High demand for carpenters in Riyadh suggests a targeted hiring campaign.";

export function YusraInsightWidget() {
  const [insight, setInsight] = useState(initialInsight);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await runYusraInsight();
    if (result.success && result.insight) {
      setInsight(result.insight);
      toast({
        title: 'AI Insight Generated',
        description: 'New insight has been populated.',
      });
    } else {
      toast({
        title: 'Generation Failed',
        description: result.error || 'Could not generate AI insight.',
        variant: 'destructive',
      });
    }
    setIsGenerating(false);
    setIsEditing(true); // enter edit mode after generating
  };
  
  const handleSave = async () => {
    setIsSaving(true);
    const result = await saveYusraInsight(insight);
     if (result.success) {
      toast({
        title: 'Insight Saved',
        description: 'Your insight has been updated.',
      });
      setIsEditing(false);
    } else {
      toast({
        title: 'Save Failed',
        description: 'Could not save the insight.',
        variant: 'destructive',
      });
    }
    setIsSaving(false);
  }

  return (
    <Card className="neon-border-accent h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <BrainCircuit className="w-6 h-6 text-accent" />
          <div>
            <CardTitle className="font-headline text-accent">Yusra's Insight</CardTitle>
            <CardDescription>AI-driven advice for strategic decisions.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex-grow">
          {isEditing ? (
            <Textarea
              value={insight}
              onChange={(e) => setInsight(e.target.value)}
              className="h-full text-base"
              rows={6}
            />
          ) : (
            <p className="text-muted-foreground whitespace-pre-wrap">{insight}</p>
          )}
        </div>
        <Separator className="my-4"/>
        <div className="flex items-center justify-end gap-2">
            {isEditing ? (
                 <Button onClick={handleSave} disabled={isSaving}>
                    {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    Save
                </Button>
            ) : (
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                </Button>
            )}
            <Button onClick={handleGenerate} disabled={isGenerating}>
                {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <BrainCircuit className="mr-2 h-4 w-4" />}
                Generate with AI
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
