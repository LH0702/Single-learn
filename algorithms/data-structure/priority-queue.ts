/**
 * minimum
 */
export class PriorityQueue {
    private queue: number[] = [];

    insert(input: number | number[]): PriorityQueue {
        if (typeof input === 'number') {
            this.queue.push(Number.MAX_SAFE_INTEGER);
            this.increaseKey(this.queue.length - 1, <number>input);
        } else if (input instanceof Array) {
            for (let e of input) {
                this.queue.push(e);
                this.increaseKey(this.queue.length - 1, e);
            }
        } else {
            throw new Error("Input type is invalid");
        }
        return this
    }

    minimum(): number {
        if (this.queue.length === 0) {
            return null;
        }

        return this.queue[0];
    }

    extractMin(): number {

        if (this.queue.length === 0) {
            return null;
        }

        let min = this.queue[0];
        this.queue[0] = this.queue.pop();
        this.minHeapify(0);
        return min;
    }

    increaseKey(index: number, key: number) {
        if (key > this.queue[index]) {
            throw new Error('input key is larger than current');
        }

        this.queue[index] = key;
        let tmpIdx = index;
        while (tmpIdx > 0 && this.queue[this.getParent(tmpIdx)] > key) {
            this.swap(tmpIdx,this.getParent(tmpIdx));
            tmpIdx = this.getParent(tmpIdx);
        }

    }

    clear() {
        this.queue = [];
    }

    length() {
        return this.queue.length;
    }

    private minHeapify(idx: number) {
        let minIndex = idx;
        let length = this.queue.length;
        if (this.getLeft(idx) < length && this.queue[minIndex] > this.queue[this.getLeft(idx)]) {
            minIndex = this.getLeft(idx);
        }

        if (this.getRight(idx) < length && this.queue[minIndex] > this.queue[this.getRight(idx)]) {
            minIndex = this.getRight(idx);
        }

        if (minIndex !== idx) {
            this.swap(idx,minIndex);
            this.minHeapify(minIndex);
        }
    }

    private swap(idx1: number, idx2: number) {
        let tmp = this.queue[idx1];
        this.queue[idx1] = this.queue[idx2];
        this.queue[idx2] = tmp;
    }

    private getLeft(index: number): number {
        return (index + 1) * 2 - 1;
    }

    private getRight(index: number): number {
        return (index + 1) * 2;
    }

    private getParent(index: number): number {
        return Math.floor((index - 1) / 2);
    }
}
