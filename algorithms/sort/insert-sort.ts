import {AbstractSort} from './abstract-sort'
export class InsertSort extends AbstractSort{

    public sort(input:number[]):number[]{
        let output :number[] = [];
        output.push(-1);
        output.push(100000);

        for(let element of input){
            for(let i = 0; i < output.length; i++){
                if(element < output[i]){
                    output.splice(i,0,element);
                    break;
                }
            }
        }
        output.pop();
        output.shift();
        return output;
    }
}