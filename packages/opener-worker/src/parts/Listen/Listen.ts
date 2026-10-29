import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as CommandMap from '../CommandMap/CommandMap.ts'
import { initializeMainProcess } from '../InitializeMainProcess/InitializeMainProcess.ts'

export const listen = async (): Promise<void> => {
  await RendererWorker.initializeRendererWorkerForWorker(CommandMap.commandMap)
  await initializeMainProcess()
}
