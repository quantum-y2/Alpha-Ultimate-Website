'use server';

/**
 * @fileOverview A Genkit flow for generating AI-driven insights based on manpower requests, submissions, and project data.
 *
 * - generateYusraInsight - A function that generates the AI insight.
 * - GenerateYusraInsightInput - The input type for the generateYusraInsight function.
 * - GenerateYusraInsightOutput - The return type for the generateYusraInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateYusraInsightInputSchema = z.object({
  manpowerRequests: z.string().describe('The latest manpower requests data.'),
  submissions: z.string().describe('The latest submissions data from contact and career forms.'),
  projectData: z.string().describe('The latest project data.'),
});
export type GenerateYusraInsightInput = z.infer<typeof GenerateYusraInsightInputSchema>;

const GenerateYusraInsightOutputSchema = z.object({
  insight: z.string().describe('The AI-generated insight based on the input data.'),
});
export type GenerateYusraInsightOutput = z.infer<typeof GenerateYusraInsightOutputSchema>;

export async function generateYusraInsight(input: GenerateYusraInsightInput): Promise<GenerateYusraInsightOutput> {
  return generateYusraInsightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateYusraInsightPrompt',
  input: {schema: GenerateYusraInsightInputSchema},
  output: {schema: GenerateYusraInsightOutputSchema},
  prompt: `You are an AI assistant named Yusra, designed to provide data-driven insights for Alpha Ultimate Ltd., a construction, HR outsourcing, and cleaning services company in KSA. Analyze the following data and generate a concise insight to help Mr. Hasan, the CEO, with resource allocation and strategic decisions. 

Manpower Requests: {{{manpowerRequests}}}
Submissions: {{{submissions}}}
Project Data: {{{projectData}}}

Insight: `,
});

const generateYusraInsightFlow = ai.defineFlow(
  {
    name: 'generateYusraInsightFlow',
    inputSchema: GenerateYusraInsightInputSchema,
    outputSchema: GenerateYusraInsightOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
