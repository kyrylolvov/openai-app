import instance from './instance';
import { OpenAICompletions } from '../utils/types';

const sendPrompt = async ({
  prompt,
  engine,
  temperature,
  maxTokens,
  frequencyPenalty,
  presencePenalty,
}: {
  prompt: string;
  engine: string;
  temperature: number;
  maxTokens: number,
  frequencyPenalty: number,
  presencePenalty: number,
}) => instance.post<OpenAICompletions>(`/${engine}/completions`, {
  prompt,
  temperature,
  max_tokens: maxTokens,
  top_p: 1.0,
  frequency_penalty: frequencyPenalty,
  presence_penalty: presencePenalty,
});

export default sendPrompt;
