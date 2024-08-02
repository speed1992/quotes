function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function retry(fn, n, baseDelay = 100) {
    let promise = Promise.reject()
    for (let i = 0; i < n; i++) {
        promise = promise.catch(async () => {
            await wait(baseDelay * Math.pow(2, i))
            return fn()
        })
    }
    promise = promise.catch(() => {
        throw new Error(`Failed retrying ${n} times`)
    })
    return promise
}

export const retryTenTimes = (fn) => retry(fn, 10)

export function retryWithAlternativeEndpoint(fn, n) {
    let promise = Promise.reject()
    for (let i = 0; i < n; i++) {
        promise = promise.catch(() => fn())
    }
    promise.catch(() => {
        throw new Error(`Failed retrying ${n} times`)
    })
    return promise
}
