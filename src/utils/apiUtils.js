export async function retry(fn, n) {
    for (let i = 0; i < n; i++) {
        try {
            return await fn();
        } catch { }
    }

    throw new Error(`Failed retrying ${n} times`);
}