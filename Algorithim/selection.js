// Selection sort
function Selection(arr) {
    for (let i = 0; i< arr.length; i++) {
      let min=i
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j]<arr[min]) {
            min=j
        }
      }
    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
    }
    return arr
}
// Test the function
let arr=[1,3,5,7,9,2,4,6,8,10,12,0]
console.log(Selection(arr));