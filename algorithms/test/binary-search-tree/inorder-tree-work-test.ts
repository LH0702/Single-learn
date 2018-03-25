import { expect, AssertionError } from 'chai';
import { inOrderTreeWork } from '../../binary-search-tree/inorder-tree-work';

describe('二叉树遍历', () => {

    describe('中序遍历',()=>{
        it('001_输入节点为null', () => {
            let output:any[] = [];
            inOrderTreeWork(null,output);
            expect([]).to.be.deep.equal(output);
            
        });

        
        it('002_定义的输出数组为null', () => {
            let output:any[] = null;
            try{
                inOrderTreeWork(null,output);
            }catch(e){
                expect(e.message).to.be.equal('output list is null');
            }
            
        });

        it('003_只有一个父节点', () => {
            let output:any[] = [];
            let node :TreeNode = {
                parent:this.node,
                left:null,
                right:null,
                value:5
            }
            inOrderTreeWork(node,output);
            expect([5]).to.be.deep.equal(output);
        });

        it('004_一个父节点和左节点', () => {
            let output:any[] = [];
            let node :TreeNode = {
                parent:null,
                left:{
                    parent:this.node,
                    left:null,
                    right:null,
                    value:4
                },
                right:null,
                value:5
            }
            inOrderTreeWork(node,output);
            expect([4,5]).to.be.deep.equal(output);
        });

        it('005_一个父节点和右节点', () => {
            
        });

        it('006_一个父节点和一个左节点，右节点', () => {
            
        });

        it('007_一个父节点和多个左节点，右节点', () => {
            
        });

        it('008_一个父节点和多个左节点，无右节点', () => {
            
        });

        it('00_9一个父节点和多个右节点，无左节点', () => {
            
        });
    });

    describe('先序遍历',()=>{
        it('001_输入节点为null', () => {
            
        });

        it('002_定义的输出数组为null', () => {
            
        });

        it('003_只有一个父节点', () => {
            
        });

        it('004_一个父节点和左节点', () => {
            
        });

        it('005_一个父节点和右节点', () => {
            
        });

        it('006_一个父节点和一个左节点，右节点', () => {
            
        });

        it('007_一个父节点和多个左节点，右节点', () => {
            
        });

        it('008_一个父节点和多个左节点，无右节点', () => {
            
        });

        it('00_9一个父节点和多个右节点，无左节点', () => {
            
        });
       
    });

    describe('后序遍历',()=>{
        it('001_输入节点为null', () => {
            
        });

        it('002_定义的输出数组为null', () => {
            
        });

        it('003_只有一个父节点', () => {
            
        });

        it('004_一个父节点和左节点', () => {
            
        });

        it('005_一个父节点和右节点', () => {
            
        });

        it('006_一个父节点和一个左节点，右节点', () => {
            
        });

        it('007_一个父节点和多个左节点，右节点', () => {
            
        });

        it('008_一个父节点和多个左节点，无右节点', () => {
            
        });

        it('00_9一个父节点和多个右节点，无左节点', () => {
            
        });
    });
  
})