import { SharedProcess } from '@lvce-editor/rpc-registry'

export const openNew = async (url: string): Promise<void> => {
  await SharedProcess.invoke('OpenExternal.openExternal', url)
}
