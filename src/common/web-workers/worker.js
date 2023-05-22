export let myWorker
myWorker = new Worker(new URL('./filter-worker.js', import.meta.url))
