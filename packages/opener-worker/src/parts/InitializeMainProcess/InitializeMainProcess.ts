import { TransferMessagePortRpcParent } from '@lvce-editor/rpc'
import { RendererWorker, SharedProcess } from '@lvce-editor/rpc-registry'
import * as CommandMap from '../CommandMap/CommandMap.ts'

const send = async (port: MessagePort): Promise<void> => {
  await RendererWorker.sendMessagePortToSharedProcess(port)
}

export const initializeMainProcess = async (): Promise<void> => {
  const rpc = await TransferMessagePortRpcParent.create({
    commandMap: CommandMap.commandMap,
    send,
  })
  SharedProcess.set(rpc)
}
