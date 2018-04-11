import { expect, AssertionError,should } from 'chai';
import { RBTree } from '../../binary-search-tree/rb-tree';

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
        });

        it('005_一个父节点和右节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            expect([5, 6]).to.be.deep.equal(b.getInOrderDisplay());
        });

        it('006_一个父节点和一个左节点，右节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(6);
            b.treeInsert(4);
            expect([4, 5, 6]).to.be.deep.equal(b.getInOrderDisplay());
        });

        it('007_一个父节点和多个左节点，右节点', () => {
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
        });

        it('008_一个父节点和多个左节点，无右节点', () => {
            let b = new RBTree();
            b.treeInsert(5);
            b.treeInsert(4);
            b.treeInsert(3);
            b.treeInsert(2);
            b.treeInsert(1);
            expect([1, 2, 3, 4, 5]).to.be.deep.equal(b.getInOrderDisplay());
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

    describe('简单插入测试', () => {

        let b = new RBTree();
        b.treeInsert(15);
        b.treeInsert(6);
        b.treeInsert(7);
        b.treeInsert(9);
        b.treeInsert(13);
        b.treeInsert(3);
        b.treeInsert(4);
        b.treeInsert(2);
        b.treeInsert(18);
        b.treeInsert(17);
        b.treeInsert(20);

        it(' Test insert is right', () => {
            expect([2, 3, 4, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
        });

        it('删除没有孩子的左节点', () => {
            b.treeDelete(2);
            expect([3, 4, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
            b.treeInsert(2);
        });

        it('删除不存在节点', () => {
            b.treeDelete(100);
            expect([2, 3, 4, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
        });

        it('删除没有孩子的右节点', () => {
            b.treeDelete(4);
            expect([2, 3, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
            b.treeInsert(4);
        })

        it('删除右左右孩子的节点', () => {
            b.treeDelete(3);
            expect([2, 4, 6, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
        })

        it('删除右左右孩子的节点', () => {
            b.treeDelete(6);
            expect([2, 4, 7, 9, 13, 15, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
        })

        it('删除根节点', () => {
            b.treeDelete(15);
            expect([2, 4, 7, 9, 13, 17, 18, 20]).to.be.deep.equal(b.getInOrderDisplay());
        })
    });


})