import { PlatformType } from '@lvce-editor/constants'
import { initializeMainProcess } from '../InitializeMainProcess/InitializeMainProcess.ts'

export const initialize = async (platform: number): Promise<void> => {
  if (platform === PlatformType.Electron) {
    await initializeMainProcess()
  }
}
