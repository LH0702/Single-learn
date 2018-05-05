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

export interface IntervalTreeNode extends RBTreeNode {
    parent: IntervalTreeNode,
    left: IntervalTreeNode,
    right: IntervalTreeNode,
    maxvalue:number,
    value:Interval
}

export interface Interval {
    low:number,
    high:number
}

