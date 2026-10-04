import { TransferMessagePortRpcParent } from '@lvce-editor/rpc'
import { RendererWorker, SharedProcess } from '@lvce-editor/rpc-registry'
import * as CommandMap from '../CommandMap/CommandMap.ts'

const send = async (port: MessagePort): Promise<void> => {
  await RendererWorker.sendMessagePortToSharedProcess(port)
}

const state = {
  initialization: undefined as Promise<void> | undefined,
}

const createConnection = async (): Promise<void> => {
  try {
    const rpc = await TransferMessagePortRpcParent.create({
      commandMap: CommandMap.commandMap,
      send,
    })
    SharedProcess.set(rpc)
  } catch (error) {
    state.initialization = undefined
    throw error
  }
}

export const initializeMainProcess = (): Promise<void> => {
  state.initialization ??= createConnection()
  return state.initialization
}
