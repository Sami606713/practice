// Merge_Sort
function merge_sort(arr) {
    //Base condition
    if(arr.length==1){
        return arr
    }
    // find the midpoint
    let midpoint=Math.floor(arr.length/2)
        
    // Split the array into lefrt and right array
    let left_arr=arr.slice(0,midpoint)
    let right_arr=arr.slice(midpoint)

    // use recurion to split the array until it length is one
    left_arr=merge_sort(left_arr)
    right_arr=merge_sort(right_arr)
    // Now call the  helper function to concat the array

    return helper(left_arr,right_arr)
}

let array=[99,12,90,4,6,2,6,2,9,4,2,5,2,4,2,64,56]
console.log(merge_sort(array));

function helper(a1,a2) {
    let merge=[]
    let i=0
    let j=0
    while (i<a1.length && j<a2.length) {
        if (a1[i]<a2[j]) {
            merge.push(a1[i])
            i+=1
        }else{
            merge.push(a2[j])
            j+=1
        }
    }
    while (i<a1[i]) {
        merge.push(a1[i])
        i+=1
    }
    while (j<a2[j]) {
        merge.push(a2[j])
        j+=1
    }
    return merge
}

let a1=[2,4,6,8,10]
let a2=[1,3,5,7,9]

// console.log(helper(a1,a2));