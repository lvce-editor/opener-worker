import { expect, jest, test } from '@jest/globals'
import { PlatformType } from '@lvce-editor/constants'
import { SharedProcess } from '@lvce-editor/rpc-registry'

const { promise: connection, resolve: connect } = Promise.withResolvers<any>()
const create = jest.fn(async () => connection)
jest.unstable_mockModule('@lvce-editor/rpc', () => ({
  PlainMessagePortRpcParent: { create: jest.fn() },
  TransferMessagePortRpcParent: { create },
}))
const { initializeMainProcess } = await import('../src/parts/InitializeMainProcess/InitializeMainProcess.ts')
const { showSaveDialog } = await import('../src/parts/ShowSaveDialog/ShowSaveDialog.ts')

test('first electron save waits for the shared connection and reuses its initialization', async () => {
  const initialized = initializeMainProcess()
  using rpc = SharedProcess.registerMockRpc({
    'ElectronDialog.showSaveDialog': async () => ({ canceled: false, filePath: '/tmp/saved.txt' }),
  })
  const result = showSaveDialog('Save File', [], PlatformType.Electron)
  await Promise.resolve()
  expect(rpc.invocations).toEqual([])
  connect(rpc)
  await initialized
  await expect(result).resolves.toEqual({ canceled: false, filePath: '/tmp/saved.txt' })
  await initializeMainProcess()
  expect(create).toHaveBeenCalledTimes(1)
  expect(rpc.invocations).toEqual([['ElectronDialog.showSaveDialog', 'Save File', []]])
})
