import { SharedProcess } from '@lvce-editor/rpc-registry'

let saveDialogMockReturnValue: any = null

export const registerSaveDialogMock = (value: any): void => {
  saveDialogMockReturnValue = value
}

export const clearSaveDialogMock = (): void => {
  saveDialogMockReturnValue = null
}

export const showSaveDialog = async (title: string, properties: readonly string[]): Promise<any> => {
  if (saveDialogMockReturnValue !== null) {
    return saveDialogMockReturnValue
  }
  // TODO when running in web, maybe only make a prompt and ask for a filename
  // and the use the workspace path as directory
  return SharedProcess.invoke('ElectronDialog.showSaveDialog', title, properties)
}
