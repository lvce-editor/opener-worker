import { expect, test, beforeEach } from '@jest/globals'
import * as OpenerState from '../src/parts/OpenerState/OpenerState.ts'

beforeEach(() => {
  OpenerState.set(false)
  OpenerState.writeUrl('')
})

test('get - should return false by default', () => {
  expect(OpenerState.get()).toBe(false)
})

test('set - should set enabled state to true', () => {
  OpenerState.set(true)
  expect(OpenerState.get()).toBe(true)
})

test('set - should set enabled state to false', () => {
  OpenerState.set(true)
  OpenerState.set(false)
  expect(OpenerState.get()).toBe(false)
})

test('readUrl - should return empty string by default', () => {
  expect(OpenerState.readUrl()).toBe('')
})

test('writeUrl - should store and retrieve URL', () => {
  const url = 'https://example.com'
  OpenerState.writeUrl(url)
  expect(OpenerState.readUrl()).toBe(url)
})

test('writeUrl - should overwrite previous URL', () => {
  OpenerState.writeUrl('https://example.com')
  OpenerState.writeUrl('https://new-example.com')
  expect(OpenerState.readUrl()).toBe('https://new-example.com')
})

test('writeUrl - should handle file paths', () => {
  const filePath = '/home/user/documents/file.txt'
  OpenerState.writeUrl(filePath)
  expect(OpenerState.readUrl()).toBe(filePath)
})

test('writeUrl - should handle empty string', () => {
  OpenerState.writeUrl('https://example.com')
  OpenerState.writeUrl('')
  expect(OpenerState.readUrl()).toBe('')
})

test('set and get - should maintain independent state', () => {
  OpenerState.set(true)
  OpenerState.writeUrl('https://example.com')

  expect(OpenerState.get()).toBe(true)
  expect(OpenerState.readUrl()).toBe('https://example.com')

  OpenerState.set(false)

  expect(OpenerState.get()).toBe(false)
  expect(OpenerState.readUrl()).toBe('https://example.com')
})
