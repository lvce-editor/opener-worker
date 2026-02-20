import { handleMessagePort } from '../HandleMessagePort/HandleMessagePort.ts'
import { initialize } from '../Initialize/Initialize.ts'
import { openExternal, openUrl } from '../Open/Open.ts'
import { enable, readOpenedMemory } from '../OpenerMemory/OpenerMemory.ts'
import { showSaveDialog, registerSaveDialogMock, clearSaveDialogMock } from '../ShowSaveDialog/ShowSaveDialog.ts'

export const commandMap = {
  'HandleMessagePort.handleMessagePort': handleMessagePort,
  'Open.enableMemoryOpener': enable,
  'Open.initialize': initialize,
  'Open.openExternal': openExternal,
  'Open.openUrl': openUrl,
  'Open.readOpenedUrl': readOpenedMemory,
  'Open.showSaveDialog': showSaveDialog,
  'ShowSaveDialog.clearSaveDialogMock': clearSaveDialogMock,
  'ShowSaveDialog.registerSaveDialogMock': registerSaveDialogMock,
}
