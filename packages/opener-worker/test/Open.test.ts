import { afterEach, expect, test } from '@jest/globals'
import { PlatformType } from '@lvce-editor/constants'
import * as Open from '../src/parts/Open/Open.ts'
import * as OpenerState from '../src/parts/OpenerState/OpenerState.ts'

afterEach(() => {
  OpenerState.set(false)
  OpenerState.writeUrl('')
})

test('openUrl - stores url when opener state is enabled', async () => {
  OpenerState.set(true)

  await Open.openUrl('https://example.com', PlatformType.Web)

  expect(OpenerState.readUrl()).toBe('https://example.com')
})
