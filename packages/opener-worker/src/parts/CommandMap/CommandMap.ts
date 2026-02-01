import { handleMessagePort } from '../HandleMessagePort/HandleMessagePort.ts'
import { openExternal, openUrl } from '../Open/Open.ts'
import { enable, readOpenedMemory } from '../OpenerMemory/OpenerMemory.ts'

export const commandMap = {
  'HandleMessagePort.handleMessagePort': handleMessagePort,
  'Open.enableMemoryOpener': enable,
  'Open.openExternal': openExternal,
  'Open.openUrl': openUrl,
  'Open.readOpenedUrl': readOpenedMemory,
}
