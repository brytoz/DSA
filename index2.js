// function abc() {

//     const arr = [1,2,3,4,5]

//     let xy = 0

//     arr.forEach((element) => (
//         xy += element
//     ))

//     return xy
// }

// console.log(abc())

// function findMax() {
//     const arr = [3,10, 5, 8, 20, 30, 4]
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         console.log(arr[i])
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }

//   console.log(findMax());

// function ab(){  }

// const nums = 32;
// const ab = nums.toString(2);
// const a = [...ab];

// console.log(a);

// function reverseString(str) {
//   let nums = "";
//   let x = str.length - 1;

//   for (x; x >= 0; x--) {
//     console.log(x);

//     nums += str[x]
//   }

//   return nums;
// }
// console.log(reverseString("12345")); // Output: "olleh"




function reverseString(str) {

    let a = ''
    let len  = str.length - 1

    for(len; len >= 0 ; len--) {

        a += str[len]
    }

    return a
}

// console.log(reverseString("12345")); // Output: "olleh"




// function palindrome(str){


//     let b = str.length;

//     for(let x = 0 ; x < b; x++){
//         console.log(x)
//         console.log(str[x], ' - ', str[b - 1 - x])
//         if (str[x] !== str[b - 1 - x]) {
//             return false;
//           }

//     }

//     return true;

// }

// console.log(palindrome("a")); // Output: "olleh"


function solution(A) {
    const positiveNumbers = new Set(A.filter(num => num > 0));

    for (let i = 1; i <= A.length + 1; i++) {
        if (!positiveNumbers.has(i)) {
            return i;  
        }
    }
}


console.log(solution([1, 3, 6, 4, 1, 2])); // Output: 5
console.log(solution([1, 2, 3]));          // Output: 4
console.log(solution([-1, -3]));           // Output: 1
