import { PlatformType } from '@lvce-editor/constants'
import { RendererWorker, SharedProcess } from '@lvce-editor/rpc-registry'
import type { ShowSaveDialogResult } from './ShowSaveDialogResult.ts'
import { getWorkspaceUri } from '../GetWorkspaceUri/GetWorkspaceUri.ts'

const saveDialogMock = {
  returnValue: null as ShowSaveDialogResult | null,
}

export const registerSaveDialogMock = (value: ShowSaveDialogResult): void => {
  saveDialogMock.returnValue = value
}

export const clearSaveDialogMock = (): void => {
  saveDialogMock.returnValue = null
}

export const showSaveDialog = async (title: string, properties: readonly string[], platform: number): Promise<ShowSaveDialogResult> => {
  if (saveDialogMock.returnValue !== null) {
    return saveDialogMock.returnValue
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
