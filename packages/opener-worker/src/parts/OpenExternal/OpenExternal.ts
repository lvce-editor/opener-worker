import * as SharedProcess from '../SharedProcess/SharedProcess.ts'

export const showItemInFolder = (fullPath: string): Promise<void> => {
  return SharedProcess.invoke('OpenExternal.showItemInFolder', fullPath)
}

export const openExternal = (url: string): Promise<void> => {
  return SharedProcess.invoke('OpenExternal.openExternal', url)
}
