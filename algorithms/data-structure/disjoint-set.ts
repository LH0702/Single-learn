export class DisjointSet{

    private forest : DisjointTree[] =[];
    makeSet(data:any){
        let set = new DisjointTree(data);
        data.disjointTree = set;
        this.forest.push(set);
    }

    findSet(data:any):DisjointTree{
        let tree = data.disjointTree;
        if(tree.parent != data){
            tree.parent = this.findSet(tree.parent)
        }
        return  tree.parent;
    }

    union(x:any,y:any){
        this.link(this.findSet(x),this.findSet(y));
    }

    link(x:DisjointTree,y:DisjointTree){
        if(x.rank > y.rank){
            y.parent = x;
            x.rank += y.rank;
            this.destroyTree(y);
        }else{
            x.parent = y;
            y.rank += x.rank;
            this.destroyTree(x);
        }
    }

    destroyTree(tree:DisjointTree){
        this.forest = this.forest.filter(e => e != tree);
    }
}

class DisjointTree{
    parent:DisjointTree;
    data:any;
    rank :number = 0
    constructor(data:any,parent ?:DisjointTree){
        this.data = data;
        if(parent){
            this.parent = parent;
        }else{
            this.parent = this;
        }
    }

    setParent(treeNode:DisjointTree){
        this.parent = treeNode;
    }

    getRank():number{
        return this.rank;
    }

    setRank(rank : number){
        this.rank = rank;
    }

}