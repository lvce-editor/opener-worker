import { SharedProcess } from '@lvce-editor/rpc-registry'

export const showSaveDialog = (title: string, properties: readonly string[]): Promise<any> => {
  return SharedProcess.invoke('ElectronDialog.showSaveDialog', title, properties)
}
