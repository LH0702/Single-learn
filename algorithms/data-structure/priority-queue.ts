/**
 * minimum
 */
export class PriorityQueue {
    private queue: any[] = [];

    comparator : Function ;
    constructor(comparator = (a:any,b:any) => { return a > b}){
        this.comparator = comparator;
    }


    insert(input: any | any[]): PriorityQueue {
        if(input instanceof Array) {
            for (let e of input) {
                this.queue.push(e);
                this.increaseKey(this.queue.length - 1, e);
            }
        } else {
            this.queue.push(input);
            this.increaseKey(this.queue.length - 1,input);
        }
        return this;


    }

    minimum(): number {
        if (this.queue.length === 0) {
            return null;
        }

        return this.queue[0];
    }

    extractMin(): any {

        if (this.queue.length === 0) {
            return null;
        }

        let min = this.queue[0];
        if (this.queue.length === 1) {
            this.queue.pop();
        } else {
            this.queue[0] = this.queue.pop();
            this.minHeapify(0);
        }

        return min;
    }

    private increaseKey(index: number, element: any) {
        if (this.comparator(element , this.queue[index])) {
            throw new Error('input key is larger than current');
        }

        this.queue[index] = element;
        let tmpIdx = index;
        while (tmpIdx > 0 && this.comparator(this.queue[this.getParent(tmpIdx)], element)) {
            this.swap(tmpIdx, this.getParent(tmpIdx));
            tmpIdx = this.getParent(tmpIdx);
        }

    }

    increase(data:any){
        for(let i = 0 ; i < this.queue.length; i++ ){
            if(this.queue[i] == data){
                this.increaseKey(i,data);
                return;
            }
        }
    }  

    clear() {
        this.queue = [];
    }

    length() {
        return this.queue.length;
    }

    isEmpty():boolean{
        return this.queue.length == 0;
    }

    isNotEmpty():boolean{
        return ! this.isEmpty();
    }

    find(data:any):boolean{
        for(let e of this.queue){
            if(e == data){
                return true;
            }
        }

        return false;
    }

    private minHeapify(idx: number) {
        let minIndex = idx;
        let length = this.queue.length;
        if (this.getLeft(idx) < length && this.comparator(this.queue[minIndex],this.queue[this.getLeft(idx)])) {
            minIndex = this.getLeft(idx);
        }

        if (this.getRight(idx) < length &&  this.comparator(this.queue[minIndex],this.queue[this.getRight(idx)])) {
            minIndex = this.getRight(idx);
        }

        if (minIndex !== idx) {
            this.swap(idx, minIndex);
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
