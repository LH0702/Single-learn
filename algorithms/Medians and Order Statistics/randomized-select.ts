class RandomizedSelect{
    public  select(inArray:number[],rank :number):number{
        //是否需要抛异常
        if(! inArray || inArray.length == 0){
            return null;
        }

        if(rank <= 0 || rank > inArray.length){
            return null;
        }

        let length = inArray.length;
    }

    private randomSelect(inArray:number[],firstIndex:number,lastIndex:number,rank:number):number{

    }
    
    private randomPartition(inArray:number[],input:number):number{

    }
}

export let randomSelect = new RandomizedSelect();