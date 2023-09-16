let array = [];

function getRandomCharacter() {
    const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}

function generateRandomString() {
    const length = Math.floor(Math.random() * 5) + 1;
    let randomString = "";
    for (let i = 0; i < length; i++) {
        randomString += getRandomCharacter();
    }
    return randomString;
}

function generateArray() {
    array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(generateRandomString());
    }
    document.getElementById("result").innerHTML =
        '<div class="title">Mảng đã được tạo:</div> [' +
        array.join(", ") +
        "]";
}

function displaySortedArray(sortedArray, algorithm, executionTime) {
    const sortedResult = '<div class="title">Mảng được sắp xếp bằng ' + algorithm + ': (' + executionTime + ' ms) </div> [' + sortedArray.join(', ') + '] ';
    const resultDiv = document.getElementById('result');
    const newResultDiv = document.createElement('div');
    newResultDiv.innerHTML = sortedResult;
    resultDiv.insertBefore(newResultDiv, resultDiv.firstChild);
}
function clearResult() {
    document.getElementById("result").innerHTML = "";
}

function sortArray(algorithm) {
    const arrCopy = [...array];
    const start = performance.now();
    let sortedArray = [];
    switch (algorithm) {
        case "bubbleSort":
            sortedArray = bubbleSort(arrCopy);
            break;
        case "insertionSort":
            sortedArray = insertionSort(arrCopy);
            break;
        case "selectionSort":
            sortedArray = selectionSort(arrCopy);
            break;
        case "mergeSort":
            sortedArray = mergeSort(arrCopy);
            break;
        case "quickSort":
            sortedArray = quickSort(arrCopy);
            break;
        default:
            break;
    }
    const end = performance.now();
    const executionTime = (end - start).toFixed(2);
    displaySortedArray(sortedArray, algorithm, executionTime);
}

// bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// bubble sort
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// bubble sort
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// bubble sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

// bubble sort
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// bubble sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

