import { expect, test, beforeEach } from '@jest/globals'
import * as OpenExternal from '../src/parts/OpenExternal/OpenExternal.ts'
import * as OpenerState from '../src/parts/OpenerState/OpenerState.ts'

beforeEach(() => {
  OpenerState.set(false)
  OpenerState.writeUrl('')
})

test('showItemInFolder - when OpenerState is enabled, should write URL instead of invoking SharedProcess', async () => {
  OpenerState.set(true)
  const fullPath = '/home/user/documents'
  await OpenExternal.showItemInFolder(fullPath)
  expect(OpenerState.readUrl()).toBe(fullPath)
})

test('showItemInFolder - when OpenerState is disabled, should not write URL', async () => {
  const fullPath = '/home/user/documents'
  await OpenExternal.showItemInFolder(fullPath)
  expect(OpenerState.readUrl()).toBe('')
})

test('openExternal - when OpenerState is enabled, should write URL instead of invoking SharedProcess', async () => {
  OpenerState.set(true)
  const url = 'https://example.com'
  await OpenExternal.openExternal(url)
  expect(OpenerState.readUrl()).toBe(url)
})

test('openExternal - when OpenerState is disabled, should not write URL', async () => {
  const url = 'https://example.com'
  await OpenExternal.openExternal(url)
  expect(OpenerState.readUrl()).toBe('')
})

test('showItemInFolder - should handle file paths', async () => {
  OpenerState.set(true)
  const filePath = '/home/user/downloads/file.pdf'
  await OpenExternal.showItemInFolder(filePath)
  expect(OpenerState.readUrl()).toBe(filePath)
})

test('openExternal - should handle various URL formats', async () => {
  OpenerState.set(true)
  const testUrls = [
    'https://github.com',
    'http://localhost:3000',
    'file:///path/to/file',
    'mailto:test@example.com',
  ]
  
  for (const url of testUrls) {
    OpenerState.writeUrl('')
    await OpenExternal.openExternal(url)
    expect(OpenerState.readUrl()).toBe(url)
  }
})
