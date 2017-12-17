import {AbstractSort} from './abstract-sort'
export class BubbleSort extends AbstractSort{
    public sort(input:number[]):number[]{
        for(let i = 0; i < input.length ;i++){
            for(let j = i + 1; j <  input.length; j++){
                if(input[i] > input[j]){
                    let tmp = input[j];
                    input[j] = input[i];
                    input[i] = tmp;
                }
            }
        }
        return input;
    }
}