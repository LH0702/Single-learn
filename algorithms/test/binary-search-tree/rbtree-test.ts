import { expect, AssertionError,should } from 'chai';
import { RBTree } from '../../binary-search-tree/rb-tree';
import { Color,RBTreeNode } from '../../binary-search-tree/tree-node';
function generateTreeNode(value:number,color:Color,parent:RBTreeNode,left:RBTreeNode,right:RBTreeNode):RBTreeNode{
 return {
     parent :parent,
     left:left,
     right:right,
     value:value,
     color:color
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
            expect(b.NIL).to.be.deep.equal(left.right.value);
            expect(1).to.be.deep.equal(left.left.value);
            expect(Color.RED).to.be.deep.equal(left.left.color);
            expect(left).to.be.deep.equal(left.left.parent);

            left = root.left.left.left;  // root.left.left
            expect(b.NIL).to.be.deep.equal(left.right.value);
            expect(b.NIL).to.be.deep.equal(left.left.value);
         
            right = root.left.right
            expect(b.NIL).to.be.deep.equal(right.right.value);
            expect(4).to.be.deep.equal(right.left.value);
            expect(Color.RED).to.be.deep.equal(right.left.color);
            expect(left).to.be.deep.equal(right.left.parent);

            left = root.left.right.left;  // root.left.left
            expect(b.NIL).to.be.deep.equal(left.right.value);
            expect(b.NIL).to.be.deep.equal(left.left.value);
            expect(4).to.be.deep.equal(left.value);

            right = right.right.right;
            expect(b.NIL).to.be.deep.equal(right.right.value);
            expect(b.NIL).to.be.deep.equal(right.left.value);
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

            let root = generateTreeNode(4,Color.BLACK,b.NIL,b.NIL,b.NIL)
            root.parent = b.NIL;

            let node1 = generateTreeNode(2,Color.BLACK,root,b.NIL,b.NIL)
            let node2 = generateTreeNode(5,Color.BLACK,root,b.NIL,b.NIL)
            root.left = node1;
            root.right = node2;

            let node3 = generateTreeNode(1,Color.RED,node1,b.NIL,b.NIL);
            let node4 = generateTreeNode(3,Color.RED,node1,b.NIL,b.NIL);
            node1.left = node3;
            node1.right = node4;

            expect(root).to.be.deep.equal(b['root']);
        });

        it('00_9一个父节点和多个右节点，无左节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(7);
            b.treeInsert(8);
            b.treeInsert(9);
            expect([5, 6, 7, 8, 9]).to.be.deep.equal(b.getInOrderDisplay());
        });


    });

//     describe('简单删除测试', () => {

//         let b = new RBTree();
//         b.treeInsert(15);
//         b.treeInsert(6);
//         b.treeInsert(7);
//         b.treeInsert(9);
//         b.treeInsert(13);
//         b.treeInsert(3);
//         b.treeInsert(4);
//         b.treeInsert(2);
//         b.treeInsert(18);
//         b.treeInsert(17);
//         b.treeInsert(20);

//         it(' Test insert is right', () => {
//             expect([2, 3, 4, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
//         });

//         it('删除没有孩子的左节点', () => {
//             b.treeDelete(2);
//             expect([3, 4, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
//             b.treeInsert(2);
//         });

//         it('删除不存在节点', () => {
//             b.treeDelete(100);
//             expect([2, 3, 4, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
//         });

//         it('删除没有孩子的右节点', () => {
//             b.treeDelete(4);
//             expect([2, 3, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
//             b.treeInsert(4);
//         })

//         it('删除右左右孩子的节点', () => {
//             b.treeDelete(3);
//             expect([2, 4, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
//         })

//         it('删除右左右孩子的节点', () => {
//             b.treeDelete(6);
//             expect([2, 4, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
//         })

//         it('删除根节点', () => {
//             b.treeDelete(15);
//             expect([2, 4, 7, 9, 13, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
//         })
//     });


// })
})