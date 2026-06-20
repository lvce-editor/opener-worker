const state = {
  enabled: false,
  text: '',
}

export const set = (value: boolean): void => {
  state.enabled = value
}

export const get = (): boolean => {
  return state.enabled
}

export const writeUrl = (value: string): void => {
  state.text = value
}

export const readUrl = (): string => {
  return state.text
}
