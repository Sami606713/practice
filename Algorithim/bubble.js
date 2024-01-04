// Bubble_sort
function Bubble(arr) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
        
    }
    return arr
}
// Test them
let array=[2,4,6,8,10,1,3,5,7,9]
console.log(Bubble(array));