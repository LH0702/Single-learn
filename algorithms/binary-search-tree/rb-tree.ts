export class RBTree{
    private readonly NIL :RBTreeNode ={
        parent :null,
        left : null,
        right :null,
        value : null,
        color:Color.BLACK
    };

    private root : RBTreeNode = this.NIL;

    public treeInsert(value:number){
        let insertNode :RBTreeNode = this.generateTreeNode(value);

        let tmp = this.root;
        let pre = this.NIL ;
        while(tmp != this.NIL){
            pre = tmp;
            if(tmp.value >= insertNode.value){
                tmp = tmp.left;
            }else{
                tmp = tmp.right;
            }
        }

        //empty tree
        if(pre == this.NIL){
            this.root = insertNode;
        }else if(pre.value >= insertNode.value){
            pre.left = insertNode;
        }else{
            pre.right = insertNode;
        }
        insertNode.parent = pre;

        this.rbTreeInsertFixup(insertNode)
    }

    private generateTreeNode(value:number):RBTreeNode{
        return {
            parent :null,
            left : this.NIL,
            right :this.NIL,
            value : value,
            color:Color.RED
        }
    }

    private rbTreeInsertFixup(insertNode:RBTreeNode){
        let parent = insertNode.parent;
        while(parent.color == Color.RED){
            if(parent.parent.left == parent){   // need to know p.p is NIL
                if(parent.parent.right.color == Color.RED){
                    parent.color = Color.BLACK;
                    parent.parent.right.color = Color.BLACK;
                    parent.parent.color = Color.RED;
                    parent = parent.parent;
                }else{
                    if(parent.right == insertNode){
                        this.leftRotate(parent);
                        parent = insertNode;
                    }else{
                        parent.parent.color = Color.RED;
                        parent.color = Color.BLACK;
                        this.rightRotate(parent.parent)
                    }
                }
            }else{
                if(parent.parent.left.color == Color.RED){
                    parent.color = Color.BLACK;
                    parent.parent.left.color = Color.BLACK;
                    parent.parent.color = Color.RED;
                    parent = parent.parent;
                }else{
                    if(parent.left == insertNode){
                        this.rightRotate(parent);
                        parent = insertNode;
                    }else{
                        parent.parent.color = Color.RED;
                        parent.color = Color.BLACK;
                        this.leftRotate(parent.parent)
                    }
                }
            }
        }
        this.root.color = Color.BLACK;
    }

    private leftRotate(node:RBTreeNode){
        if(node.right != this.NIL){
            return;
        }
           
        let rightChild = node.right;
      
        if(node.parent == this.NIL){    // links rotate parent to rightChild
            this.root = rightChild;
        }else if(node.parent.left == node){
            node.parent.left = rightChild;
        }else{
            node.parent.right = rightChild;
        }
        rightChild.parent = node.parent;

        node.right = rightChild.left;    // turn rightChild's left into rotate node right 
        if(rightChild.left != this.NIL){
            rightChild.left.parent = node;
        }
        
        node.parent = rightChild;  // put rightChild as rotate node parent
        rightChild.left = node;
    }

    private rightRotate(node:RBTreeNode){
        if(node.left != this.NIL){
            return;
        }
           
        let leftChild = node.left;
      
        if(node.parent == this.NIL){    // links rotate parent to leftChild
            this.root = leftChild;
        }else if(node.parent.left == node){
            node.parent.left = leftChild;
        }else{
            node.parent.right = leftChild;
        }
        leftChild.parent = node.parent;

        node.left = leftChild.right;    // turnleftChild's right into rotate node left 
        if(leftChild.right != this.NIL){
            leftChild.right.parent = node;
        }
        
        node.parent = leftChild;  // put leftChild as rotate node parent
        leftChild.right = node;
    }
}