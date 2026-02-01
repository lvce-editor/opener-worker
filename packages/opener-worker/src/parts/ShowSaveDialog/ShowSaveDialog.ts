import * as SharedProcess from '../SharedProcess/SharedProcess.js'

export const showSaveDialog = (title: string, properties: any): Promise<any> => {
  return SharedProcess.invoke('ElectronDialog.showSaveDialog', title, properties)
}
