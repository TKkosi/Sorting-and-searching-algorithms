// function analyseSentence(sentence) {
//     let vowelCount = 0;
//     let wordCount = 0;
//     let sentenceLength = 0;
//     let i = 0;

//     while (sentence[i] != ".") {
//         if (sentence[i] == " ") {
//             wordCount++
//         }
//     }
//     switch (sentence[i]) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//         case 'A':
//         case 'E':
//         case 'I':
//         case 'O':
//         case 'U':
//             vowelCount++
//             break;
//         default:
//             break;
//     }
//     i++;
// }
// return { charCount, wordCount, vowelCount };

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
let arr = [5, 2, 8, 3, 1, 6, 4];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));