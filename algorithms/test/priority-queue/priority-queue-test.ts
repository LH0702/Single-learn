import { expect } from 'chai'

import { PriorityQueue } from "../../data-structure/priority-queue"
describe('优先队列测试', () => {

        it('add and get test', () => {
            let pq : PriorityQueue  = new PriorityQueue();
            pq.insert(3).insert(5).insert(9).insert([2,4,5,4,7,32,12,15,55]);
            expect(2).to.be.equal(pq.extractMin());
            expect(3).to.be.equal(pq.extractMin());
            expect(4).to.be.equal(pq.extractMin());
            expect(4).to.be.equal(pq.extractMin());
            expect(5).to.be.equal(pq.extractMin());
            expect(5).to.be.equal(pq.extractMin());
            expect(7).to.be.equal(pq.extractMin());
            expect(9).to.be.equal(pq.extractMin());
            expect(12).to.be.equal(pq.extractMin());
            expect(15).to.be.equal(pq.extractMin());
            expect(32).to.be.equal(pq.extractMin());
            expect(55).to.be.equal(pq.extractMin());
            expect(0).to.be.equal(pq.length());
        });

        it('clear 测试', () => {
            let pq : PriorityQueue  = new PriorityQueue();
            pq.insert(3).insert(5).insert(9).insert([2,4,5,4,7,32,12,15,55]);
            pq.clear();
            expect(null).to.be.equal(pq.extractMin());
            expect(0).to.be.equal(pq.length());
        });

})