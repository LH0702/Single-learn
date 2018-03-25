interface TreeNode{
    parent : TreeNode,
    left :TreeNode,
    right : TreeNode,
    value : any
}

enum Color{
    RED,
    BLACK
}

interface RBTreeNode extends TreeNode{
    color :Color
}

