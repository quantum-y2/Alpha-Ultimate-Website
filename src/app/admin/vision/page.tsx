// This is a new file for managing the Vision Page content.
'use client';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save } from 'lucide-react';

const initialContent = `At Alpha Ultimate Ltd., our vision extends beyond conventional limits. We are pioneering an AI-driven ecosystem, codenamed 'Yusra', designed to revolutionize how we manage resources, anticipate project needs, and drive operational efficiency.

Yusra will be the digital backbone of our operations, analyzing real-time data from manpower requests, project progress, and talent acquisition funnels. By identifying patterns and making predictive recommendations, Yusra will empower our leadership to make proactive, data-informed decisions, ensuring the right people are in the right place at the right time.

This isn't just about automation; it's about intelligence. It's about transforming raw data into actionable insights, minimizing downtime, optimizing resource allocation, and ultimately, delivering superior value to our clients. Our journey with Yusra is just beginning, and it represents our unwavering commitment to innovation and excellence.`;

export default function AdminVisionPage() {
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsSaving(true);
    // In a real app, this would call a server action to save the content.
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Saved vision content:', content);
    toast({
      title: 'Content Saved',
      description: 'The Vision page has been updated successfully.',
    });
    setIsSaving(false);
  };

  return (
    <div className="flex-1 space-y-4">
      <PageHeader
        title="Edit Vision Page"
        description="Update the content for the 'Our Vision' page."
        className="text-left items-start mb-4"
      />
      <Card>
        <CardHeader>
          <CardTitle>Page Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={15}
            className="text-base"
          />
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? <Loader2 className="mr-2 animate-spin" /> : <Save className="mr-2" />}
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
