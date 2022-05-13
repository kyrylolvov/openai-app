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
  temperature: number | string,
  maxTokens: number | string,
  frequencyPenalty: number | string,
  presencePenalty: number | string,
}
