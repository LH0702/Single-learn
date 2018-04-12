export interface TreeNode {
    parent: TreeNode,
    left: TreeNode,
    right: TreeNode,
    value: any
}

export enum Color {
    RED,
    BLACK
}

export interface RBTreeNode extends TreeNode {
    color: Color,
    left: RBTreeNode,
    right: RBTreeNode,
    parent: RBTreeNode,
}

