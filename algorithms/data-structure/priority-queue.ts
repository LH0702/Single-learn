/**
 * minimum
 */
export class PriorityQueue{
    private queue : number[] = [];
    
    insert(input: number| number[]):PriorityQueue{
        if(input instanceof Number){
           this.queue.push(<number>input) 
           this.changePriority(this.queue.length - 1);
        }else if (input instanceof Array){
            for(let e of input){
                this.queue.push(e);
                this.changePriority(this.queue.length - 1);
            }
        }else{
            throw new Error("Input type is invalid");
        }
        return this
    }

    minimum():number{
        if(this.queue.length === 0){
            return null;
        }

        return this.queue[0];
    }

    extractMin():number{
        return;
    }

    changePriority(index:number,key ?:number ){

    }

    clear(){
        this.queue = [];
    }

    private minHeapify(index:number){

    }
}
