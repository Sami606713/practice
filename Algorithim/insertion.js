function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let min=arr[i]
       let j=i-1
       while (j>=0 && arr[j]>min) {
        arr[j+1]=arr[j]
        j--
       }
       arr[j+1]=min   
    }
    return arr
}
let arr=[23,4,2,7,14]
console.log(insertion(arr));