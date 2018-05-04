import { Color, Interval, IntervalTreeNode } from './tree-node'

export class IntervalTree {

    public readonly NIL: IntervalTreeNode = {
        parent: null,
        left: null,
        right: null,
        value: null,
        maxvalue: null,
        color: Color.BLACK
    };

    private root: IntervalTreeNode;

    constructor(){
        this.root = this.NIL;
    }

    intervalDelete(interval : Interval) {
        // let deleteNode;
        // if(typeof node ==  'number'){
        //     deleteNode = this.treeSearch(node);
        // }else{
        //     deleteNode = node;
        // }

        // if(deleteNode == null){
        //     return;
        // }

        // let fillNode ;
        // let originalColor = deleteNode.color;
        // if (deleteNode.left == this.NIL) {
        //     fillNode = deleteNode.right;
        //     this.transplant(deleteNode, deleteNode.right);
        // } else if (deleteNode.right == this.NIL) {
        //     fillNode = deleteNode.left;
        //     this.transplant(deleteNode, deleteNode.left);
        // } else {
        //     let tmp = this.treeMinimum(deleteNode.right);
        //     fillNode = tmp.right;
        //     originalColor = tmp.color;
        //     if (tmp.parent != deleteNode) {
        //         this.transplant(tmp, tmp.right);
        //         tmp.right = deleteNode.right;
        //         tmp.right.parent = tmp;
        //     }else{
        //         fillNode.parent = tmp;
        //     }

        //     this.transplant(deleteNode, tmp);
        //     tmp.left = deleteNode.left;
        //     deleteNode.left.parent = tmp;
        //     tmp.color = deleteNode.color;
        // } 

        // if(originalColor == Color.BLACK){
        //     this.rbTreeDeleteFixup(fillNode)
        // }
        // // 保持空节点的完整性，颜色为black,其余属性全部为NULL
        // this.NIL.parent = null;
    }

    intervalSearch(interval : Interval) {
        //TODO error
        let tmp = this.root;
        while(tmp != this.NIL && ! this.overlap(interval,tmp)){
            if( tmp.maxvalue >= interval.low ){
                tmp = tmp.left;
            }else{
                tmp = tmp.right;
            }
        }

        return tmp;
    }

    intervalInsert(interval : Interval) {
        let insertNode :IntervalTreeNode = this.generateTreeNode(interval);

        let tmp = this.root;
        let pre = this.NIL ;
        while(tmp != this.NIL){
            pre = tmp;
            if(tmp.value.low >= insertNode.value.low){
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

        //fixup maxvalue. need to execute insertMaxValueFixup first
        //and then rbinsertRBFixup. Can not inverse!
        this.insertMaxValueFixup(insertNode);
        this.rbinsertRBFixup(insertNode);
    }

    private insertMaxValueFixup(insertNode:IntervalTreeNode){
        let tmp = insertNode;
        while(tmp != this.root){
            tmp.parent.maxvalue = this.getMaxValue(tmp.parent);
            tmp = tmp.parent;
        }
    }


    private rbinsertRBFixup(insertNode:IntervalTreeNode){
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

    inorderDisplayByRecursive(): IntervalTreeNode[]{
        let output: IntervalTreeNode[] = [];
        getinorderTreeWork(this.root);
        return output;
        function getinorderTreeWork(node: IntervalTreeNode) {
            if (node === this.NIL) {
                return;
            }
            this.getinorderTreeWork(node.left);
            output.push(node);
            this.getinorderTreeWork(node.right);

        }
    }

    private generateIntervalTreeNode(inputVal: Interval): IntervalTreeNode {
        return {
            parent: null,
            left: null,
            right: null,
            value: inputVal,
            maxvalue: null,
            color: Color.RED
        }
    }

    private leftRotate(node:IntervalTreeNode){
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

         //aditional operation 
         rightChild.maxvalue = node.maxvalue;
         node.maxvalue = this.getMaxValue(node);
    }

    private rightRotate(node:IntervalTreeNode){
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

        //aditional operation 
        leftChild.maxvalue = node.maxvalue;
        node.maxvalue = this.getMaxValue(node);
    }

    private getMaxValue(node:IntervalTreeNode):number{
       return  Math.max(node.value.high,node.left.maxvalue, node.right.maxvalue);
    }

    private overlap(inputVal: Interval, node: IntervalTreeNode): boolean {
        if (node.value.high > inputVal.low || inputVal.high < node.value.low) {
            return false;
        }

        return true;
    }

    private generateTreeNode(value:Interval):IntervalTreeNode{
        return {
            parent :this.NIL,
            left : this.NIL,
            right :this.NIL,
            value : value,
            maxvalue:value.high,
            color:Color.RED
        }
    }
}