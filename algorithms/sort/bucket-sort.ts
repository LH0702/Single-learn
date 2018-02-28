import { AbstractSort } from './abstract-sort';

export class BucketSort extends AbstractSort {
    public sort(inputList: number[]): number[] {
        let output: any[] = [];
        let bucketNum = 100;
        for (let i = 0; i <= bucketNum; i++) {
            output[i] = [];
        }

        for (let i = 0; i < inputList.length; i++) {
            output[Math.ceil(inputList[i] / 100) ].push(inputList[i]);
        }

        let targetList :number[] = [];
        for (let i = 0; i <= bucketNum; i++) {
            targetList = targetList.concat(this.insertSort(output[i]));
        }

       return targetList;
        
    }

    public insertSort(inputList: number[]) {

        let output: number[] = [];
        output.push(-1);
        output.push(100000);

        for (let element of inputList) {
            for (let i = 0; i < output.length; i++) {
                if (element < output[i]) {
                    output.splice(i, 0, element);
                    break;
                }
            }
        }
        output.pop();
        output.shift();
        return output;

    }
}

11
8
31
13
73
30
32
10
95
17
24
40
94
44
43
77
19
36
61
73
98
73
35
40
97
15
14
30
99
19
73
18
52
87
41
79
51
31
32
22
87
8
17
6
48
2
8
10
44
99
58
64
62
71
6
30
81
71
40
45
26
56
9
83
67
89
2
68
19
55
71
15
49
47
87
97
78
6
86
30
63
60
9
24
17
57
49
25
11
60
78
91
26
54
98
32
30
38
87
61
99
5
0