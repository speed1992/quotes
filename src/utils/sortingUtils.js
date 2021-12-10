export function sortExceptK(arr, k, n) {

    // Move k-th element to end
    let temp = arr[k];
    arr[k] = arr[n - 1];
    arr[n - 1] = temp;

    // Sort all elements except last
    arr.sort(function (a, b) {
        return a - b
    });

    // Store last element (originally k-th)
    let last = arr[n - 1];

    // Move all elements from k-th to one
    // position ahead.
    for (let i = n - 1; i > k; i--)
        arr[i] = arr[i - 1];

    // Restore k-th element
    arr[k] = last;

    // Move k-th element to end
    temp = arr[k];
    arr[k] = arr[n - 1];
    arr[n - 1] = temp;

    return 0;
}