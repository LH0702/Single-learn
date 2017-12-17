import * as fs from 'fs';

class Util {

    private sourceList: number[] = [];
    private sortedList: number[] = [];

    constructor() {
        let orignSource: string = fs.readFileSync('./resources/sourcefile.txt', 'utf-8');

        for (let ele of orignSource.split(' ')) {
            this.sourceList.push(parseInt(ele))
        }

        let orignSortedList: string = fs.readFileSync('./resources/sorted.txt', 'utf-8');

        for (let ele of orignSortedList.split(' ')) {
            this.sortedList.push(parseInt(ele))
        }

    }

    public getSource(): number[] {
        return this.sourceList.concat();
    }

    public compare(target: number[]): boolean {

        if (this.sortedList.length !== target.length) {
            return false;
        }

        for (let i = 0; i < this.sortedList.length; i++) {
            if (this.sortedList[i] !== target[i]) {
                return false;
            }
        }
        return true;
    }

    public sortTest(sortName:string,callBack:Function) {
        console.log("*****************************************");
        console.log(`*** sort method = [${sortName}] ***`);
        let previousTime = new Date().getTime();

        let sorted: number[] = callBack(util.getSource())

        console.log("*** sort used time =" + (new Date().getTime() - previousTime)+ " ***");

        console.log("*** result = " +  this.compare(sorted) + " ***");
        console.log("*****************************************");
    }

}

export let util = new Util();

