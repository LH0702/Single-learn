export class Queue{
    private  queue:any[] = [];

    enQueue(data:any){
        this.queue.push(data);
    }

    deQueue():any{
        if(this.queue.length != 0){
            this.queue.shift();
        }
    }

    isEmpty():boolean{
        return this.queue.length == 0
    }

    isNotEmpty(){
        return !this.isEmpty();
    }
}