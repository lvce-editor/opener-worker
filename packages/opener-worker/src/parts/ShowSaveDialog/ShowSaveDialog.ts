import { SharedProcess } from '@lvce-editor/rpc-registry'

export const showSaveDialog = (title: string, properties: readonly string[]): Promise<any> => {
  // TODO when running in web, maybe only make a prompt and ask for a filename
  // and the use the workspace path as directory
  return SharedProcess.invoke('ElectronDialog.showSaveDialog', title, properties)
}
