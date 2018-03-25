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