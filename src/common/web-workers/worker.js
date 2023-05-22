export let myWorker
if (window.Worker) {
    myWorker = new Worker(new URL('./filter-worker.js', import.meta.url))
} else {
    console.log("Your browser doesn't support web workers.")
}
