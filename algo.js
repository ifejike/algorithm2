function insertionSort(arr) {
    // Start from the second element (index 1) as the first element is already "sorted"
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // it is arr at each index.
        let j = i - 1; 

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        // the j index can be 2, 3, 4, OR 5
        // the key is holding the current iterator value.
        while (j >= 0 && arr[j] > key) {
            // checking indexese and assinging.
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // if j = 9 so it will be arr[10]
        // so the key will be updated index-wise.
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Unsorted array:", array);

let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
