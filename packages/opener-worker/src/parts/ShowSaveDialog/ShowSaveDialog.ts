import { SharedProcess } from '@lvce-editor/rpc-registry'

export const showSaveDialog = (title: string, properties: any): Promise<any> => {
  return SharedProcess.invoke('ElectronDialog.showSaveDialog', title, properties)
}
