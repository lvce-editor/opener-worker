import { PlatformType } from '@lvce-editor/constants'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { VError } from '@lvce-editor/verror'
import * as ElectronWindow from '../ElectronWindow/ElectronWindow.ts'
import { get, writeUrl } from '../OpenerState/OpenerState.ts'
import * as OpenExternal from '../OpenExternal/OpenExternal.ts'
import * as Platform from '../Platform/Platform.ts'

const openUrlWeb = async (url: string): Promise<void> => {
  try {
    // TODO make platform argument required
    await RendererWorker.invoke('Open.openUrl', url)
  } catch (error) {
    throw new VError(error, `Failed to open url ${url}`)
  }
}

const openUrlElectron = async (url: string): Promise<void> => {
  await ElectronWindow.openNew(url)
}

// TODO add required platform argument
export const openUrl = async (url: string): Promise<void> => {
  if (get()) {
    writeUrl(url)
    return
  }
  switch (Platform.platform) {
    case PlatformType.Electron:
      return openUrlElectron(url)
    default:
      return openUrlWeb(url)
  }
}

export const { openExternal } = OpenExternal
