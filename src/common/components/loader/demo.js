export const paras = () => {
    const testPromise = new Promise((resolve) => {
        setTimeout(resolve, 2000)
    })
    testPromise.then(() => console.log('Executing'))
}
