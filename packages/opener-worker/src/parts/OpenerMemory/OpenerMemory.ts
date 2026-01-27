import * as OpenerState from '../OpenerState/OpenerState.ts'

export const readOpenedMemory = (): string => {
  return OpenerState.readUrl()
}

export const enable = (): void => {
  return OpenerState.set(true)
}
