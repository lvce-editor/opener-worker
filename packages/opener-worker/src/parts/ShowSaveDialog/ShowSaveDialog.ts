import { SharedProcess } from '@lvce-editor/rpc-registry'

let saveDialogMockReturnValue: any = null

export const registerSaveDialogMock = (value: any): void => {
  saveDialogMockReturnValue = value
}

export const clearSaveDialogMock = (): void => {
  saveDialogMockReturnValue = null
}

export const showSaveDialog = (title: string, properties: readonly string[]): Promise<any> => {
  if (saveDialogMockReturnValue !== null) {
    return Promise.resolve(saveDialogMockReturnValue)
  }
  return SharedProcess.invoke('ElectronDialog.showSaveDialog', title, properties)
}
