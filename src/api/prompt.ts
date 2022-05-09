import instance from './instance';

const sendPrompt = async () => instance.post('/text-curie-001/completions', {
  prompt: 'Write a poem about a dog wearing skis',
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});

export default sendPrompt;
