import { describe, expect, it } from 'vitest'
import { foo } from '../src/main'

describe('should', () => {
  it('exported', () => {
    expect(foo).toBe('foo')
  })
})
