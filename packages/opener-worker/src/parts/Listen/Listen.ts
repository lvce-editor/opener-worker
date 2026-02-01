import { initializeMainProcess } from '../InitializeMainProcess/InitializeMainProcess.ts'
import { initializeRendererWorker } from '../InitializeRendererWorker/InitializeRendererWorker.ts'

export const listen = async (): Promise<void> => {
  await initializeRendererWorker()
  await initializeMainProcess()
}
