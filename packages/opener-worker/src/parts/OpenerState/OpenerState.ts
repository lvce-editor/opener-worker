let enabled = false
let text = ''

export const set = (value: boolean): void => {
  enabled = value
}

export const get = (): boolean => {
  return enabled
}

export const writeUrl = (value: string): void => {
  text = value
}

export const readUrl = (): string => {
  return text
}
