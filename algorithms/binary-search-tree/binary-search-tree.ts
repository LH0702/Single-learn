export class BST {

    private root:TreeNode ;

    constructor(){
        
    }

    public getInOrderDisplay():number[]{
        let output:number[] = [];
        this.inOrderTreeWork(this.root,output)
        return output;
    }

    private inOrderTreeWork(node :TreeNode,output: any[]) {
        if (output == null) {
            throw new Error('output list is null');
        }

        if (node) {
            this.inOrderTreeWork(node.left, output);
            output.push(node.value);
            this.inOrderTreeWork(node.right, output);
        }
    }

    public treeSearch(value: number): TreeNode {
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

    public treeMinimum(node ?:TreeNode): TreeNode {
        let tmpNode = node || this.root;
        while (tmpNode.left != null) {
            tmpNode = tmpNode.left;
        }
        return tmpNode;
    }

    public treeSuccessor(value:number): TreeNode {
        let node = this.treeSearch(value);
        if (node.right != null) {
            return node.right;
        }

        let tmp = node.parent;
        while (tmp != null && tmp.right == node) {
            node = tmp;
            tmp = tmp.parent;
        }

        return tmp;

    }

    public treeInsert(value:number){
        let insertNode:TreeNode = {
            parent:null,
            left:null,
            right:null,
            value:value
        }

        let tmp = this.root;
        let pre = null;
        while (tmp != null) {
            pre = tmp;
            if (tmp.value >= insertNode.value) {
                tmp = tmp.left;
            } else {
                tmp = tmp.right;
            }
        }
        
        insertNode.parent = pre;
        if(pre == null){
            this.root = insertNode;
        }else if (pre.value >= insertNode.value) {
            pre.left = insertNode;
        } else {
            pre.right = insertNode;
        }
    }


    /**
     * BST 删除主要分为三种情况
     * 待删除节点没有子节点
     * 待删除节点有一个子节点
     * 待删除节点有两个子节点
     * @param root 
     * @param deleteNode 
     */
    public treeDelete(value:number) {
        let deleteNode = this.treeSearch(value);
        if(deleteNode == null){
            return;
        }

        if (deleteNode.left == null) {
            this.transplant(deleteNode, deleteNode.right);
        } else if (deleteNode.right == null) {
            this.transplant(deleteNode, deleteNode.left);
        } else {
            let tmp = this.treeMinimum(deleteNode.right);
            if (deleteNode.right != tmp) {
                this.transplant(tmp, tmp.right);
                tmp.right = deleteNode.right;
                tmp.right.parent = tmp;
            }

            this.transplant(deleteNode, tmp);
            tmp.left = deleteNode.left;
            deleteNode.left.parent = tmp;
        }
    }


    /**
     * 用v 树替换 u树，成为u树父节点的子节点
     * @param u 
     * @param v 
     */
    private transplant(u: TreeNode, v: TreeNode){
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
