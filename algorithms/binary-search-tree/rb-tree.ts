export class RBTree{
    private readonly EMPTY_TREE :RBTreeNode ={
        parent :null,
        left : null,
        right :null,
        value : null,
        color:Color.BLACK
    };

    private root : RBTreeNode;

    public treeInsert(value:number){
        let insertNode :RBTreeNode = this.generateTreeNode(value);

        let tmp = this.root;
        let pre = null ;
        while(tmp != null){
            pre = tmp;
            if(tmp.value >= insertNode.value){
                tmp = tmp.left;
            }else{
                tmp = tmp.right;
            }
        }

        //empty tree
        if(tmp == null){
            this.root = insertNode;
        }else if(tmp.parent.left){

        }else{

        }
    }

    private generateTreeNode(value:number):RBTreeNode{
        return {
            parent :null,
            left : this.EMPTY_TREE,
            right :this.EMPTY_TREE,
            value : value,
            color:Color.RED
        }
    }

    private rbTreeInsertFixup(){

    }
}