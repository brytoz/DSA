// function abc() {

//     const arr = [1,2,3,4,5]

//     let xy = 0 

//     arr.forEach((element) => (
//         xy += element
//     ))

//     return xy
// }

// console.log(abc())

function findMax() {
    const arr = [3,10, 5, 8, 20, 30, 4]
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i])
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  console.log(findMax());  

  
 