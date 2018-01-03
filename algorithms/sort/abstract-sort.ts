export abstract class  AbstractSort{
    public abstract sort(inputList:number[]) :number[];

    protected swap(inputList: number[],left:number,right:number){
        let tmp = inputList[left];
        inputList[left] = inputList[right];
        inputList[right] = tmp;
    
    }
}