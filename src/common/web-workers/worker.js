export let worker
if (window.Worker) {
    worker = new Worker(new URL('./filter-worker.js', import.meta.url))
} else {
    alert("Your browser doesn't support web workers.")
}
