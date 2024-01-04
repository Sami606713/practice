class Node{
    constructor(key,value){
        this.value=value
        this.key=key
        this.next=null
    }
}
// Linklist class
class Linklist{
    constructor(){
        this.head=null 
        this.total_node=0
    }
    // Prepand
    prepand(key,value){
    const new_node=new Node(key,value)
    // make a connection
    new_node.next=this.head 
    // reassign head 
    this.head=new_node
    // increment length
    this.total_node+=1
    }
    append(key,value){
        const new_node=new Node(key,value)
        if (this.head==null) {
            this.head=new_node
            this.total_node+=1
            // return -> optonal if you use else 
        }
        else{
            let curr_node=this.head
            while (curr_node.next!=null) {
                curr_node=curr_node.next
            }
            curr_node.next=new_node
            this.total_node+=1
        }

    }
    insert(key,value){
        const new_node=new Node(key,value)
        if (key==0) {
            this.prepand(value)
        
        }
        else {
            // let counter =1
            let curr_node=this.head
            while (curr_node.next!=null) {
                if (curr_node.key==key) {
                    // curr_node.next=new_node
                    new_node.next=curr_node.next
                    curr_node.next=new_node
                    this.total_node+=1
                }
                // counter+=1
                curr_node=curr_node.next
            }
        }
    }
    // Delete Head 
    delete_head(){
        if(this.head==null){
            console.log("The Linked List is already empty.\nNo action is performed.");
        }
        else{
            this.head=this.head.next
            this.total_node-=1
        }
    }

    // Pop Function
    pop(){
        if(this.head==null){
            console.log("Linklist is already empty");
        }
        else if(this.head.next==null){
            this.delete_head()
        }
        else{
            let curr_node=this.head
            while(curr_node.next.next!=null){
                curr_node=curr_node.next
            }
            curr_node.next=curr_node.next.next
            this.total_node-=1
        }
    }

    // Remove Function
    remove(key){
        if(key==0){
            this.delete_head()
        }
        else if(key==this.total_node-1){
            this.pop()
        }
        else if (key>=this.total_node){
            console.log("Index out of range")
        }
        else{
            let curr_node=this.head
            while(curr_node.next!=null){
                if(curr_node.key==key){
                    curr_node.next=curr_node.next.next
                    this.total_node-=1
                }
                counter+=1
                curr_node=curr_node.next
            }
        }
    }
    // Search index
    search_by_index(key){
        let curr_node=this.head
        let counter=0
        while (curr_node!=null) {
            if(curr_node.key==key){
                return counter
            }
            counter+=1
            curr_node=curr_node.next
        }
        return -1

        // if(curr_node==null){
        //     console.log("Index not found");
        // }
    }

    // Search by value
    search_by_value(value){
        // let counter=0
        let curr_node=this.head
        while (curr_node!=null) {
            if(curr_node.value==value)
            {
                console.log("index is: ",curr_node.key)
                return
            }
            // counter+=1
            curr_node=curr_node.next
        }
        if (curr_node==null) {
            console.log("Value not found")
        }
    }
    // Clear function
    clear(){
        this.head=null 
        this.total_node=0
    
    }
    traverse(){
        let curr_node=this.head
        let result=[]
        while (curr_node!=null) {
            result.push(curr_node.value)
            curr_node=curr_node.next
        }
        return result
    }
}
// Make a object
// let l= new Linklist()
// l.prepand(1,90)
// l.prepand(2,"sami")
// l.prepand(3,"python")
// l.prepand(4,"C+=")
// l.append(5,10000)
// console.log(l.traverse());
// console.log(l.search_by_index(51));
// console.log(l.search_by_value("python"));

// hashing
class dict{
    constructor(length){
        this.length=length
        this.size=0
        // make a bucket arr
        this.bucket=this.bucket_arr(length)
    }

    bucket_arr(length){
        // use linklist make a bucket array
        let l=[]
        for(let i=0;i<length;i++){
            l.push(new Linklist())
        }
        return l
    }
    // make a hash fun
    hash_fun(key) {
        let hash = 0;
        if (this.length === 0) {
          return hash;
        }
      
        for (let i = 0; i < this.length; i++) {
          let char = key.charCodeAt(i);
          hash = (hash << 5) - hash + char;
          hash &= hash; // Convert to 32-bit integer
        }
      
        return hash%this.length;
      }
    // now make a put function
    put(key,value){
        // first cal hash value
        let hash_val=this.hash_fun(key)
        // now get the node index
        let node_index=this.get_node_index(hash_val,key)
        // now check that the given index is empty or not
        // if empty put the value
        if(node_index==-1){
            this.bucket[hash_val].append(key,value)
            this.size+=1
        }
        // else traverse them
    }
     get_node_index(hash_val,key){
        let node_index=this.bucket[hash_val].search_by_index(key)
        return node_index
     }
}

let d=new dict()
d.put("name","sami")
