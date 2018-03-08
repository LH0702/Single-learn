class RandomizedSelect{
    public  select(inArray:number[],rank :number):number{
        //是否需要抛异常
        if(! inArray || inArray.length == 0){
            return null;
        }

        if(rank <= 0 || rank > inArray.length){
            return null;
        }

        return this.randomSelect(inArray,0,inArray.length-1,rank);
    }

    private randomSelect(inArray:number[],first:number,last:number,rank:number):number{
        if(first == last){
            return inArray[first];
        }
        
        let randomRank = this.randomPartition(inArray,first,last);
        if(rank == randomRank+1){
            return inArray[randomRank];
        }else if(rank > randomRank+1){
           return this.randomSelect(inArray,randomRank +1 ,last,rank);
        }else{
           return this.randomSelect(inArray,first,randomRank-1,rank);
        }
    }
    
    private randomPartition(inArray:number[],first:number,last:number):number{
        let randomNumber = this.random(first,last);
        this.exchange(inArray,first,randomNumber);
        return this.partition(inArray,first,last);

    }

    private exchange(inArray:number[],p:number,r:number){
        let tmp = inArray[p];
        inArray[p] = inArray[r];
        inArray[r] = tmp;
    }

    private partition(inArray:number[],p:number,r:number){
        let cmp = inArray[p];
        let point = p;
        for(let i = p + 1; i <= r; i++){
            if(inArray[i] <= cmp){
                point++;
                this.exchange(inArray,point,i);
            }
        }
        this.exchange(inArray,p,point);
        return point;
    
    }

    private random(head:number,last:number):number{
       return Math.ceil(Math.random()*(last-head) + head);
    }
}

export let randomSelect = new RandomizedSelect();