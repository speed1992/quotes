import { paras } from '../demo'

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout

export function flushPromises() {
    return new Promise((resolve) => {
        setTimeout(resolve, 0)
    })
}

describe('Demo', () => {
    test('testing paras', async () => {
        await flushPromises()
        paras()
    })
})
