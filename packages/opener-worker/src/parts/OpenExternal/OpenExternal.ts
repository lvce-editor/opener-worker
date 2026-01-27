import { get, writeUrl } from '../OpenerState/OpenerState.ts'
import * as SharedProcess from '../SharedProcess/SharedProcess.ts'

export const showItemInFolder = async (fullPath: string): Promise<void> => {
  if (get()) {
    writeUrl(fullPath)
    return
  }
  return SharedProcess.invoke('OpenExternal.showItemInFolder', fullPath)
}

export const openExternal = async (url: string): Promise<void> => {
  if (get()) {
    writeUrl(url)
    return
  }
  return SharedProcess.invoke('OpenExternal.openExternal', url)
}
