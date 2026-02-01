import { PlainMessagePortRpcParent } from '@lvce-editor/rpc'
import { set } from '@lvce-editor/rpc-registry'

export const handleMessagePort = async (port: MessagePort, rpcId?: number) => {
  const rpc = await PlainMessagePortRpcParent.create({
    commandMap: {},
    messagePort: port,
  })
  if (rpcId) {
    set(rpcId, rpc)
  }
}
