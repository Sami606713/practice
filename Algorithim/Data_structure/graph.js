class graph{
    constructor(){
        this.total=0
        this.graph={}
    }
    add_node(value){
        if(!(value in graph)){
            this.graph[value]=[]
            this.total+=1
        }
    }
    add_edge(v1,v2){
        this.graph[v1].push(v2)
        this.graph[v2].push(v1)
    }
    display(){
        for(let key in this.graph){
            console.log(key,"->",this.graph[key].join(" "));
        }
    }
    
}
let g=new graph()
g.add_node(10)
g.add_node(20)
g.add_node(30)
g.add_node(40)
g.add_edge(10,40)
g.add_edge(20,40)
g.add_edge(10,30)
g.display()