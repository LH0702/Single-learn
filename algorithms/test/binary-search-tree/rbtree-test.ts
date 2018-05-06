import { expect, AssertionError, should } from 'chai';
import { RBTree } from '../../data-structure/binary-search-tree/rb-tree';
import { Color, RBTreeNode } from '../../data-structure/binary-search-tree/tree-node';
function generateTreeNode(value: number, color: Color, parent: RBTreeNode, left: RBTreeNode, right: RBTreeNode): RBTreeNode {
    return {
        parent: parent,
        left: left,
        right: right,
        value: value,
        color: color
    }
}

describe('红黑树测试', () => {

    describe('简单插入测试', () => {
        it('001_输入节点为null', () => {
            let b = new RBTree();
            expect([]).to.be.deep.equal(b.getInOrderDisplay());
            let node = b['root'];
            expect(b.NIL).to.be.deep.equal(node);
        });

        it('002_只有一个父节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            expect([5]).to.be.deep.equal(b.getInOrderDisplay());
            let node = b.treeSearch(5);
            should().exist(node);
            expect(5).to.be.deep.equal(node.value);
            expect(Color.BLACK).to.be.deep.equal(node.color);
            expect(b.NIL).to.be.deep.equal(node.left);
            expect(b.NIL).to.be.deep.equal(node.right);
            expect(b.NIL).to.be.deep.equal(node.parent);
        });

        it('004_一个父节点和左节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(4);
            expect([4, 5]).to.be.deep.equal(b.getInOrderDisplay());
            let root = b.treeSearch(5);
            let child = b.treeSearch(4);
            should().exist(root);
            should().exist(child);
            expect(5).to.be.deep.equal(root.value);
            expect(Color.BLACK).to.be.deep.equal(root.color);
            expect(child).to.be.deep.equal(root.left);
            expect(b.NIL).to.be.deep.equal(root.right);
            expect(b.NIL).to.be.deep.equal(root.parent);

            expect(Color.RED).to.be.deep.equal(child.color);
            expect(root).to.be.deep.equal(child.parent);
            expect(b.NIL).to.be.deep.equal(child.right);
            expect(b.NIL).to.be.deep.equal(child.left);

        });

        it('005_一个父节点和右节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            expect([5, 6]).to.be.deep.equal(b.getInOrderDisplay());

            let root = b.treeSearch(5);
            let child = b.treeSearch(6);
            should().exist(root);
            should().exist(child);
            expect(5).to.be.deep.equal(root.value);
            expect(Color.BLACK).to.be.deep.equal(root.color);
            expect(child).to.be.deep.equal(root.right);
            expect(b.NIL).to.be.deep.equal(root.left);
            expect(b.NIL).to.be.deep.equal(root.parent);

            expect(Color.RED).to.be.deep.equal(child.color);
            expect(root).to.be.deep.equal(child.parent);
            expect(b.NIL).to.be.deep.equal(child.right);
            expect(b.NIL).to.be.deep.equal(child.left);
        });

        it('006_一个父节点和一个左节点，右节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(4);
            expect([4, 5, 6]).to.be.deep.equal(b.getInOrderDisplay());

            let root = b.treeSearch(5);
            let rchild = b.treeSearch(6);
            let lchild = b.treeSearch(4);
            should().exist(root);
            should().exist(rchild);
            should().exist(lchild);
            expect(5).to.be.deep.equal(root.value);
            expect(Color.BLACK).to.be.deep.equal(root.color);
            expect(rchild).to.be.deep.equal(root.right);
            expect(lchild).to.be.deep.equal(root.left);
            expect(b.NIL).to.be.deep.equal(root.parent);

            expect(Color.RED).to.be.deep.equal(rchild.color);
            expect(root).to.be.deep.equal(rchild.parent);
            expect(b.NIL).to.be.deep.equal(rchild.right);
            expect(b.NIL).to.be.deep.equal(rchild.left);

            expect(Color.RED).to.be.deep.equal(lchild.color);
            expect(root).to.be.deep.equal(lchild.parent);
            expect(b.NIL).to.be.deep.equal(lchild.right);
            expect(b.NIL).to.be.deep.equal(lchild.left);
        });

        it('007_一个父节点和多个子节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(4);
            b.treeInsert(7);
            b.treeInsert(3);
            b.treeInsert(2);
            b.treeInsert(1);
            b.treeInsert(4);
            expect([1, 2, 3, 4, 4, 5, 6, 7]).to.be.deep.equal(b.getInOrderDisplay());

            let root = b['root'];
            should().exist(root);
            expect(5).to.be.deep.equal(root.value);
            expect(Color.BLACK).to.be.deep.equal(root.color);

            expect(6).to.be.deep.equal(root.right.value);
            expect(Color.BLACK).to.be.deep.equal(root.right.color);
            expect(root).to.be.deep.equal(root.right.parent);

            expect(3).to.be.deep.equal(root.left.value);
            expect(Color.RED).to.be.deep.equal(root.left.color);
            expect(root).to.be.deep.equal(root.left.parent);

            let left = root.left;  // root left

            expect(4).to.be.deep.equal(left.right.value);
            expect(Color.BLACK).to.be.deep.equal(left.right.color);
            expect(left).to.be.deep.equal(left.right.parent);

            expect(2).to.be.deep.equal(left.left.value);
            expect(Color.BLACK).to.be.deep.equal(left.left.color);
            expect(left).to.be.deep.equal(left.left.parent);

            let right = root.right;  //root.right

            expect(7).to.be.deep.equal(right.right.value);
            expect(Color.RED).to.be.deep.equal(right.right.color);
            expect(right).to.be.deep.equal(right.right.parent);
            expect(b.NIL).to.be.deep.equal(right.left);

            left = root.left.left;  // root.left.left
            expect(b.NIL).to.be.deep.equal(left.right);
            expect(1).to.be.deep.equal(left.left.value);
            expect(Color.RED).to.be.deep.equal(left.left.color);
            expect(left).to.be.deep.equal(left.left.parent);

            left = root.left.left.left;  // root.left.left
            expect(b.NIL).to.be.deep.equal(left.right);
            expect(b.NIL).to.be.deep.equal(left.left);

            right = root.left.right
            expect(b.NIL).to.be.deep.equal(right.right);
            expect(4).to.be.deep.equal(right.left.value);
            expect(Color.RED).to.be.deep.equal(right.left.color);
            expect(right).to.be.deep.equal(right.left.parent);

            left = root.left.right.left;  // root.left.left
            expect(b.NIL).to.be.deep.equal(left.right);
            expect(b.NIL).to.be.deep.equal(left.left);
            expect(4).to.be.deep.equal(left.value);

            right = root.right.right;
            expect(b.NIL).to.be.deep.equal(right.right);
            expect(b.NIL).to.be.deep.equal(right.left);
            expect(7).to.be.deep.equal(right.value);
        });

        it('008_一个父节点和多个左节点，无右节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(4);
            b.treeInsert(3);
            b.treeInsert(2);
            b.treeInsert(1);
            expect([1, 2, 3, 4, 5]).to.be.deep.equal(b.getInOrderDisplay());

            let root = generateTreeNode(4, Color.BLACK, b.NIL, b.NIL, b.NIL)
            root.parent = b.NIL;

            let node1 = generateTreeNode(2, Color.BLACK, root, b.NIL, b.NIL)
            let node2 = generateTreeNode(5, Color.BLACK, root, b.NIL, b.NIL)
            root.left = node1;
            root.right = node2;

            let node3 = generateTreeNode(1, Color.RED, node1, b.NIL, b.NIL);
            let node4 = generateTreeNode(3, Color.RED, node1, b.NIL, b.NIL);
            node1.left = node3;
            node1.right = node4;

            expect(root).to.be.deep.equal(b['root']);
        });

        it('009一个父节点和多个右节点，无左节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeInsert(8);
            b.treeInsert(9);
            expect([5, 6, 7, 8, 9]).to.be.deep.equal(b.getInOrderDisplay());

            let root = generateTreeNode(6, Color.BLACK, b.NIL, b.NIL, b.NIL)
            root.parent = b.NIL;

            let node1 = generateTreeNode(5, Color.BLACK, root, b.NIL, b.NIL)
            let node2 = generateTreeNode(8, Color.BLACK, root, b.NIL, b.NIL)
            root.left = node1;
            root.right = node2;

            let node3 = generateTreeNode(7, Color.RED, node2, b.NIL, b.NIL);
            let node4 = generateTreeNode(9, Color.RED, node2, b.NIL, b.NIL);
            node2.left = node3;
            node2.right = node4;

            expect(root).to.be.deep.equal(b['root']);
        });


    });

    describe('删除测试', () => {

        it('删除只有一个节点的rbtree', () => {
            let b = new RBTree();
            b.treeInsert(15);
            b.treeDelete(15);
            expect(b.NIL).to.be.equal(b['root']);
           
        });

        it('删除不存在的节点', () => {
            let b = new RBTree();
            b.treeInsert(15);
            b.treeDelete(2);
            expect(generateTreeNode(15, Color.BLACK, b.NIL, b.NIL, b.NIL)).to.be.deep.equal(b['root']);
        });

        it('删除末尾的红色节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeDelete(5);
            let root = generateTreeNode(6, Color.BLACK, b.NIL, b.NIL, b.NIL)

            let node1 = generateTreeNode(7, Color.RED, root, b.NIL, b.NIL)
            root.right= node1;
            expect(root).to.be.deep.equal(b['root']);
        });

        it('删除末尾红色右节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeDelete(7);
            let root = generateTreeNode(6, Color.BLACK, b.NIL, b.NIL, b.NIL)

            let node1 = generateTreeNode(5, Color.RED, root, b.NIL, b.NIL)
            root.left= node1;
            expect(root).to.be.deep.equal(b['root']);
        })

        it('删除末尾黑色左节点,兄弟节点为黑色，兄弟节点的右子节点为红色', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeInsert(8);
            b.treeDelete(5);

            let root = generateTreeNode(7, Color.BLACK, b.NIL, b.NIL, b.NIL)

            let node1 = generateTreeNode(6, Color.BLACK, root, b.NIL, b.NIL)
            let node2 = generateTreeNode(8, Color.BLACK, root, b.NIL, b.NIL)
            root.left= node1;
            root.right= node2;
            expect(root).to.be.deep.equal(b['root']);
        })

        it('删除末尾黑色左节点,兄弟节点为黑色，兄弟节点的左子节点为红色', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeInsert(7);
            b.treeDelete(5);

            let root = generateTreeNode(7, Color.BLACK, b.NIL, b.NIL, b.NIL)

            let node1 = generateTreeNode(6, Color.BLACK, root, b.NIL, b.NIL)
            let node2 = generateTreeNode(7, Color.BLACK, root, b.NIL, b.NIL)
            root.left= node1;
            root.right= node2;
            expect(root).to.be.deep.equal(b['root']);
        })

        it('删除末尾黑色右节点,兄弟节点为黑色，兄弟节点的左子节点红色', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeInsert(4);
            b.treeDelete(7);

            let root = generateTreeNode(5, Color.BLACK, b.NIL, b.NIL, b.NIL)

            let node1 = generateTreeNode(4, Color.BLACK, root, b.NIL, b.NIL)
            let node2 = generateTreeNode(6, Color.BLACK, root, b.NIL, b.NIL)
            root.left= node1;
            root.right= node2;
            expect(root).to.be.deep.equal(b['root']);
        })

        it('删除末尾黑色右节点,兄弟节点为黑色，兄弟节点的右子节点红色', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeInsert(5);
            b.treeDelete(7);

            let root = generateTreeNode(5, Color.BLACK, b.NIL, b.NIL, b.NIL)

            let node1 = generateTreeNode(5, Color.BLACK, root, b.NIL, b.NIL)
            let node2 = generateTreeNode(6, Color.BLACK, root, b.NIL, b.NIL)
            root.left= node1;
            root.right= node2;
            expect(root).to.be.deep.equal(b['root']);
        })

        it('删除末尾黑色节点，并且兄弟节点也为黑色，兄弟节点的子节点全部为黑色', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeInsert(4);
            b.treeDelete(4);
            b.treeDelete(5);

            let root = generateTreeNode(6, Color.BLACK, b.NIL, b.NIL, b.NIL)
            let node2 = generateTreeNode(7, Color.RED, root, b.NIL, b.NIL)
            root.right= node2;
            expect(root).to.be.deep.equal(b['root']);
        })

        it('删除有左右内部节点的节点，且右侧树最小节点为红色',()=>{
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(4);
            b.treeInsert(6);
            b.treeDelete(5)

            let root = generateTreeNode(6, Color.BLACK, b.NIL, b.NIL, b.NIL)
            let node1 = generateTreeNode(6, Color.BLACK, root, b.NIL, b.NIL)
            root.right= node1;
            let node2 = generateTreeNode(4, Color.BLACK, root, b.NIL, b.NIL);
            root.left= node2;
            expect(root).to.be.deep.equal(b['root']); 
        })

        it('删除有左右内部节点的节点，且右侧树最小节点为黑色，且 右侧最小节点的父节点为删除的节点',()=>{
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(4);
            b.treeInsert(7);
            b.treeDelete(7);
            b.treeDelete(5);

            let root = generateTreeNode(6, Color.BLACK, b.NIL, b.NIL, b.NIL)
            let node2 = generateTreeNode(4, Color.RED, root, b.NIL, b.NIL)
            root.left= node2;
            expect(root).to.be.deep.equal(b['root']);
        })

        
        it('删除有左右内部节点的节点，且右侧树最小节点为黑色，且 右侧最小节点的父节点不为删除的节点',()=>{
            let b = new RBTree();
            b.treeInsert(15);
            b.treeInsert(10);
            b.treeInsert(20);
            b.treeInsert(18);
            b.treeInsert(25);
            b.treeInsert(28);
            b.treeDelete(15);

            let root = generateTreeNode(18, Color.BLACK, b.NIL, b.NIL, b.NIL)
            let node1 = generateTreeNode(10, Color.BLACK, root, b.NIL, b.NIL)
            root.left= node1;

            let node2 = generateTreeNode(25, Color.RED, root, b.NIL, b.NIL)
            root.right= node2;

            let node3 = generateTreeNode(20, Color.BLACK, node2, b.NIL, b.NIL)
            node2.left= node3;

            let node4 = generateTreeNode(28, Color.BLACK, node2, b.NIL, b.NIL)
            node2.right= node4;


            expect(root).to.be.deep.equal(b['root']);


        })

        it('删除根节点',()=>{
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(4);
            b.treeInsert(7);
            b.treeInsert(3);
            b.treeInsert(2);
            b.treeInsert(1);
            b.treeInsert(4);
            b.treeDelete(5);

            let root = generateTreeNode(6, Color.BLACK, b.NIL, b.NIL, b.NIL)
            let node1 = generateTreeNode(7, Color.BLACK, root, b.NIL, b.NIL)
            root.right= node1;

            let node2 = generateTreeNode(3, Color.RED, root, b.NIL, b.NIL);
            root.left= node2;
            let node3 = generateTreeNode(2, Color.BLACK, node2, b.NIL, b.NIL);
            node2.left = node3;

            let node4 = generateTreeNode(4, Color.BLACK, node2, b.NIL, b.NIL);
            node2.right = node4;

            let node5 = generateTreeNode(1, Color.RED, node3, b.NIL, b.NIL);
            node3.left = node5;

            let node6 = generateTreeNode(4, Color.RED, node4, b.NIL, b.NIL);
            node4.left = node6;

            expect(root).to.be.deep.equal(b['root']); 
        })

        it('删除右黑色节点，兄弟节点为红色的',()=>{
            let b = new RBTree();

            let root = generateTreeNode(15, Color.BLACK, b.NIL, b.NIL, b.NIL)
            let node1 = generateTreeNode(20, Color.BLACK, root, b.NIL, b.NIL)
            root.right= node1;

            let node2 = generateTreeNode(10, Color.RED, root, b.NIL, b.NIL);
            root.left= node2;
            let node3 = generateTreeNode(5, Color.BLACK, node2, b.NIL, b.NIL);
            node2.left = node3;

            let node4 = generateTreeNode(12, Color.BLACK, node2, b.NIL, b.NIL);
            node2.right = node4;

            b['root'] = root;
            b.treeDelete(20);

            
            let newRoot = generateTreeNode(10, Color.BLACK, b.NIL, b.NIL, b.NIL)
            let newNode1 = generateTreeNode(5, Color.BLACK, newRoot, b.NIL, b.NIL)
            newRoot.left= newNode1;

            let newNode2 = generateTreeNode(15, Color.BLACK, newRoot, b.NIL, b.NIL);
            newRoot.right= newNode2;

            let newNode3 = generateTreeNode(12, Color.RED, newNode2, b.NIL, b.NIL);
            newNode2.left = newNode3;

            expect(newRoot).to.be.deep.equal(b['root']); 
        })

        it('删除左黑色节点，兄弟节点为红色的',()=>{
            let b = new RBTree();
            b.treeInsert(15);
            b.treeInsert(10);
            b.treeInsert(30);
            b.treeInsert(18);
            b.treeInsert(35);
            b.treeInsert(17);
            b.treeDelete(10)

            let root = generateTreeNode(30, Color.BLACK, b.NIL, b.NIL, b.NIL)
            let node1 = generateTreeNode(35, Color.BLACK, root, b.NIL, b.NIL)
            root.right= node1;

            let node2 = generateTreeNode(17, Color.RED, root, b.NIL, b.NIL);
            root.left= node2;
            let node3 = generateTreeNode(15, Color.BLACK, node2, b.NIL, b.NIL);
            node2.left = node3;

            let node4 = generateTreeNode(18, Color.BLACK, node2, b.NIL, b.NIL);
            node2.right = node4;

            expect(root).to.be.deep.equal(b['root']); 
        })
    });


})
