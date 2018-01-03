import {AbstractSort} from './abstract-sort'
export class BubbleSort extends AbstractSort{
    public sort(input:number[]):number[]{
        for(let i = 0; i < input.length ;i++){
            for(let j = i + 1; j <  input.length; j++){
                if(input[i] > input[j]){
                    this.swap(input,i,j);
                }
            }
        }
        return input;
    }
}