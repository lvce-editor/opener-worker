import { PlatformType } from '@lvce-editor/constants'
import { RendererWorker, SharedProcess } from '@lvce-editor/rpc-registry'
import type { ShowSaveDialogResult } from './ShowSaveDialogResult.ts'
import { getWorkspaceUri } from '../GetWorkspaceUri/GetWorkspaceUri.ts'

let saveDialogMockReturnValue: any = null

export const registerSaveDialogMock = (value: any): void => {
  saveDialogMockReturnValue = value
}

export const clearSaveDialogMock = (): void => {
  saveDialogMockReturnValue = null
}

export const showSaveDialog = async (title: string, properties: readonly string[], platform: number): Promise<ShowSaveDialogResult> => {
  if (saveDialogMockReturnValue !== null) {
    return saveDialogMockReturnValue
  }
  if (platform === PlatformType.Electron) {
    return SharedProcess.invoke('ElectronDialog.showSaveDialog', title, properties)
  }
  const fileName = await RendererWorker.invoke('Prompt.prompt', title)
  if (!fileName) {
    return {
      canceled: true,
    }
  }
  const workspaceUri = await getWorkspaceUri()
  const filePath = `${workspaceUri}/${fileName}`
  return {
    canceled: false,
    filePath,
  }
}
