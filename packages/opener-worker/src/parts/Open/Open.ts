import { PlatformType } from '@lvce-editor/constants'
import { VError } from '@lvce-editor/verror'
import * as ElectronWindow from '../ElectronWindow/ElectronWindow.ts'
import * as OpenExternal from '../OpenExternal/OpenExternal.js'
import * as Platform from '../Platform/Platform.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

const openUrlWeb = async (url: string): Promise<void> => {
  try {
    await RendererProcess.invoke(/* Open.openUrl */ 'Open.openUrl', /* url */ url)
  } catch (error) {
    throw new VError(error, `Failed to open url ${url}`)
  }
}

const openUrlElectron = async (url: string): Promise<void> => {
  await ElectronWindow.openNew(url)
}

// TODO add required platform argument
export const openUrl = async (url: string): Promise<void> => {
  switch (Platform.getPlatform()) {
    case PlatformType.Electron:
      return openUrlElectron(url)
    default:
      return openUrlWeb(url)
  }
}

export const { openExternal } = OpenExternal
