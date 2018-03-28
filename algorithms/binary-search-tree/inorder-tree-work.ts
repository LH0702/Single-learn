import { Z_DEFAULT_STRATEGY } from "zlib";

export function inOrderTreeWork(node :TreeNode,output:any[]){
    if(output == null){
        throw new Error('output list is null');
    }

    if(node){
        inOrderTreeWork(node.left,output);
        output.push(node.value);
        inOrderTreeWork(node.right,output);
    }
}

export function treeSearch(node :TreeNode,value:number):TreeNode{
    let tmpNode = node
    while(tmpNode != null && tmpNode.value != value){
        if(tmpNode.value > value){
            tmpNode = tmpNode.left;
        }else{
            tmpNode = tmpNode.right;
        }
    }

    return tmpNode;
}

export function treeMinimum(node :TreeNode):TreeNode{
    let tmpNode = node;
    while(tmpNode.left != null){
        tmpNode = tmpNode.left;
    }
    return tmpNode;
}

export function treeMaximum(node :TreeNode):TreeNode{
    let tmpNode = node;
    while(tmpNode.right != null){
        tmpNode = tmpNode.right;
    }
    return tmpNode;
}

export function treeSuccessor(node:TreeNode):TreeNode{
    if(node.right != null){
        return node.right;
    }
    
    let tmp = node.parent;
    while(tmp != null && tmp.right == node){
        node = tmp;
        tmp = tmp.parent;
    }

    return tmp;

}

export function treeInsert(root:TreeNode, insertNode:TreeNode):TreeNode{
    if(root == null){
        return insertNode;
    }

    let tmp = root;
    while(tmp != null){
        if(tmp.value >= insertNode.value){
            tmp = tmp.left;
        }else{
            tmp = tmp.right;
        }
    }

    insertNode.parent = tmp.parent;
    if(tmp.parent.value >= insertNode.value){
        tmp.parent.left = insertNode;
    }else{
        tmp.parent.right = insertNode;
    }

    return root;
}

/**
 * BST 删除主要分为三种情况
 * 待删除节点没有子节点
 * 待删除节点有一个子节点
 * 待删除节点有两个子节点
 * @param root 
 * @param deleteNode 
 */
export function treeDelete(root:TreeNode, deleteNode:TreeNode){
    if(deleteNode.left == null){
        transplant(deleteNode,deleteNode.right);
    }else if(deleteNode.right == null){
        transplant(deleteNode,deleteNode.left);   
    }else{
        let tmp = treeMinimum(deleteNode.right);
        transplant(tmp,tmp.right);
        tmp.right =  deleteNode.right ;
        tmp.right.parent = tmp; 
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
}

function transplant(u:TreeNode,v:TreeNode):TreeNode{
    if(u == null || u.parent == null ){
        return v;
    }

    if(u.parent.left == u){
        u.parent.left = v;
    }else{
        u.parent.right = v
    }
    v.parent = u.parent;
}