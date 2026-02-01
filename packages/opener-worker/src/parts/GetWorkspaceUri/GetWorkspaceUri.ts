import { RendererWorker } from '@lvce-editor/rpc-registry'

export const getWorkspaceUri = async (): Promise<string> => {
  return RendererWorker.invoke('Workspace.getUri')
}
