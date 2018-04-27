import { Color, Interval, IntervalTreeNode } from './tree-node'

export class IntervalTree {

    public readonly NIL: IntervalTreeNode = {
        parent: null,
        left: null,
        right: null,
        value: null,
        maxvalue: null,
        color: Color.BLACK
    };

    private root: IntervalTreeNode;

    intervalDelete() {

    }

    intervalSearch() {

    }

    intervalInsert() {

    }

    inorderDisplayByRecursive(): IntervalTreeNode[]{
        let output: IntervalTreeNode[] = [];
        getinorderTreeWork(this.root);
        return output;
        function getinorderTreeWork(node: IntervalTreeNode) {
            if (node === this.NIL) {
                return;
            }
            this.getinorderTreeWork(node.left);
            output.push(node);
            this.getinorderTreeWork(node.right);

        }
    }

    private generateIntervalTreeNode(inputVal: Interval): IntervalTreeNode {
        return {
            parent: null,
            left: null,
            right: null,
            value: inputVal,
            maxvalue: null,
            color: Color.RED
        }
    }

    private overlap(inputVal: Interval, node: IntervalTreeNode): boolean {
        if (node.value.high > inputVal.low || inputVal.high < node.value.low) {
            return false;
        }

        return true;
    }
}