class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Tree{
    constructor(){
        this.root=null
        this.total=0
    }
    insert(value){
        let new_node=new Node(value)
        if(this.root==null){
            this.root=new_node
            this.total+=1
        }
        else{   
            // call the recursion fun
            this.recursion(this.root,new_node)
        }
    }
    recursion(root,new_node){
        if(new_node.value<root.value){
            if (root.left==null) {
                root.left=new_node
                this.total+=1
            }
            else{
                this.recursion(root.left,new_node)
            }
        }
        else if (new_node.value>root.value) {
            if(root.right==null){
                root.right=new_node
                this.total+=1
            }else{
                this.recursion(root.right,new_node)
            }
        }
    }

    preorder(node){
        if (node!=null) {
            console.log(node.value)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node){
        if (node!=null) {
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value)
        }
    }

    inorder(node){
        if (node!=null) {
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
    }
}


let t=new Tree()
t.insert(9)
t.insert(10)
t.insert(11)
t.insert(20)
// console.log(t.total);
t.inorder(t.root)
/*
    9
        10
       11 20
*/
