export interface PromptResponse {
  prompt: string,
  response: string
}

export interface OpenAICompletions {
  choices: [{
    text: string
  }]
}

export interface AdditionalSettings {
  engine: string,
  temperature: number,
  maxTokens: number,
  frequencyPenalty: number,
  presencePenalty: number,
}
