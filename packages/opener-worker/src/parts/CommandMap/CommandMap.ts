import { handleMessagePort } from '../HandleMessagePort/HandleMessagePort.ts'
import { openExternal, openUrl } from '../Open/Open.ts'
import { enable, readOpenedMemory } from '../OpenerMemory/OpenerMemory.ts'
import { showSaveDialog, registerSaveDialogMock, clearSaveDialogMock } from '../ShowSaveDialog/ShowSaveDialog.ts'

export const commandMap = {
  'HandleMessagePort.handleMessagePort': handleMessagePort,
  'Open.enableMemoryOpener': enable,
  'Open.openExternal': openExternal,
  'Open.openUrl': openUrl,
  'Open.readOpenedUrl': readOpenedMemory,
  'Open.showSaveDialog': showSaveDialog,
  'ShowSaveDialog.registerSaveDialogMock': registerSaveDialogMock,
  'ShowSaveDialog.clearSaveDialogMock': clearSaveDialogMock,
}
