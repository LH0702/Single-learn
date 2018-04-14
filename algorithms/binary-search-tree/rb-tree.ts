import {RBTreeNode,Color} from './tree-node'
export class RBTree{
    public readonly NIL :RBTreeNode ={
        parent :null,
        left : null,
        right :null,
        value : null,
        color:Color.BLACK
    };

    private root : RBTreeNode = this.NIL;

    public treeSearch(value: number): RBTreeNode {
        let tmpNode = this.root
        while (tmpNode != null && tmpNode.value != value) {
            if (tmpNode.value > value) {
                tmpNode = tmpNode.left;
            } else {
                tmpNode = tmpNode.right;
            }
        }

        return tmpNode;
    }

    public treeMinimum(node ?:RBTreeNode): RBTreeNode {
        let tmpNode = node || this.root;
        while (tmpNode.left != this.NIL) {
            tmpNode = tmpNode.left;
        }
        return tmpNode;
    }

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
            parent :this.NIL,
            left : this.NIL,
            right :this.NIL,
            value : value,
            color:Color.RED
        }
    }

    private rbTreeInsertFixup(insertNode:RBTreeNode){
        let insert = insertNode;
        while(insert.parent.color == Color.RED){
            let parent = insert.parent;
            if(parent.parent.left == parent){   // need to know p.p is NIL
                if(parent.parent.right.color == Color.RED){
                    parent.color = Color.BLACK;
                    parent.parent.right.color = Color.BLACK;
                    parent.parent.color = Color.RED;
                    insert = insert.parent.parent;
                }else{
                    if(parent.right == insert){
                        insert = parent;
                        this.leftRotate(parent);
                    }

                    parent.parent.color = Color.RED;
                    parent.color = Color.BLACK;
                    this.rightRotate(parent.parent)
                }
            }else{
                if(parent.parent.left.color == Color.RED){
                    parent.color = Color.BLACK;
                    parent.parent.left.color = Color.BLACK;
                    parent.parent.color = Color.RED;
                    insert = insert.parent.parent;
                }else{
                    if(parent.left == insert){
                        insert = parent;
                        this.rightRotate(parent);
                    }
                    parent.parent.color = Color.RED;
                    parent.color = Color.BLACK;
                    this.leftRotate(parent.parent)
                }
            }
        }
        this.root.color = Color.BLACK;
    }

    public treeDelete(node:number | RBTreeNode):void{
        let deleteNode;
        if(typeof node ==  'number'){
            deleteNode = this.treeSearch(node);
        }else{
            deleteNode = node;
        }

        if(deleteNode == null){
            return;
        }

        let fillNode ;
        let originalColor = deleteNode.color;
        if (deleteNode.left == this.NIL) {
            fillNode = deleteNode.right;
            this.transplant(deleteNode, deleteNode.right);
        } else if (deleteNode.right == this.NIL) {
            fillNode = deleteNode.left;
            this.transplant(deleteNode, deleteNode.left);
        } else {
            let tmp = this.treeMinimum(deleteNode.right);
            fillNode = tmp.right;
            originalColor = tmp.color;
            if (tmp.parent != deleteNode) {
                this.transplant(tmp, tmp.right);
                tmp.right = deleteNode.right;
                tmp.right.parent = tmp;
            }

            this.transplant(deleteNode, tmp);
            tmp.left = deleteNode.left;
            deleteNode.left.parent = tmp;
            tmp.color = deleteNode.color;
        } 

        if(originalColor == Color.BLACK){
            this.rbTreeDeleteFixup(fillNode)
        }

    }
    
    private rbTreeDeleteFixup(node:RBTreeNode){
        while(node.color == Color.BLACK && node != this.root){
            if(node.parent.left == node){
                let brother = node.parent.right;
                if(brother.color == Color.RED){
                    brother.color = Color.BLACK;
                    node.parent.color = Color.RED;
                    this.leftRotate(node.parent);
                }
                
                if(brother.left.color == Color.BLACK && brother.right.color == Color.BLACK){
                    brother.color = Color.RED;
                    node = node.parent;
                }else{
                    if(brother.right.color == Color.BLACK){
                        brother.color = Color.RED;
                        brother.left.color = Color.BLACK;
                        this.rightRotate(brother);
                        brother = node.parent.right;
                    }
                    brother.color =  node.parent.color;
                    node.parent.color = Color.BLACK;
                    brother.right.color = Color.BLACK;
                    this.leftRotate(node.parent);
                   
                    break;
                } 
            }else{
                let brother = node.parent.left;
                if(brother.color == Color.RED){
                    brother.color = Color.BLACK;
                    node.parent.color = Color.RED;
                    this.rightRotate(node.parent);
                }

                if(brother.left.color == Color.BLACK && brother.right.color == Color.BLACK){
                    brother.color = Color.RED;
                    node = node.parent;
                }else {
                    if(brother.left.color == Color.BLACK){
                        brother.color = Color.RED; 
                        brother.right.color = Color.BLACK;
                        this.leftRotate(brother);
                        brother = node.parent.right;
                    }
                    
                    brother.color =  node.parent.color;
                    node.parent.color = Color.BLACK;
                    brother.left.color = Color.BLACK;
                    this.rightRotate(node.parent);
                    break;
                }
                
            }                                                                                                                                          
        }

        node.color = Color.BLACK;
    }

    public getInOrderDisplay():number[]{
        let output:number[] = [];
        this.inOrderTreeWork(this.root,output)
        return output;
    }

    private inOrderTreeWork(node :RBTreeNode,output: any[]) {
        if (output == null) {
            throw new Error('output list is null');
        }

        if (node != this.NIL) {
            this.inOrderTreeWork(node.left, output);
            output.push(node.value);
            this.inOrderTreeWork(node.right, output);
        }
    }

    private leftRotate(node:RBTreeNode){
        if(node.right == this.NIL){
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
        if(node.left == this.NIL){
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

    /**
     * 用v 树替换 u树，成为u树父节点的子节点
     * @param u 
     * @param v 
     */                 
    private transplant(u: RBTreeNode, v: RBTreeNode){
        if (u == null || u.parent == null) {
           this.root = v;
           return;
        }

        if (u.parent.left == u) {
            u.parent.left = v;
        } else {
            u.parent.right = v
        }
        if(v != null){
            v.parent = u.parent;
        }
        
    }
}