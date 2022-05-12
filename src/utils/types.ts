export interface PromptResponse {
  prompt: string,
  response: string
}

export interface OpenAICompletions {
  choices: [{
    text: string
  }]
}
