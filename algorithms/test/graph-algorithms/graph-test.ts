import { Graph, Vertex } from "../../graphs-algorithms/graph";
import { expect } from "chai";

describe('prim 算法测试', () => {

    /**
     *          8      9
     *      b ------c-------d
     *     /|      / \      |\
     *  4 / |    2/   \     | \9
     *   /  |    /     \    |  \
     * a  11|   i     4 \   |14  e
     *   \  |  / \       \  |  /
     *  8 \ |7/   \6      \ | /10
     *     \|/     \       \|/
     *      h- - -- g - - - f
     *         1        2
     */
    it('基本测试', () => {
        let graph = new Graph();

        let a = Vertex.generateVertex('a');
        let b = Vertex.generateVertex('b');
        let c = Vertex.generateVertex('c');
        let d = Vertex.generateVertex('d');
        let e = Vertex.generateVertex('e');
        let f = Vertex.generateVertex('f');
        let g = Vertex.generateVertex('g');
        let h = Vertex.generateVertex('h');
        let i = Vertex.generateVertex('i');

        a.addAdjacent(b, 4).addAdjacent(h, 8);
        b.addAdjacent(a, 4).addAdjacent(h, 11).addAdjacent(c, 8);
        c.addAdjacent(b, 8).addAdjacent(i, 2).addAdjacent(f, 4).addAdjacent(d, 7);
        d.addAdjacent(c, 7).addAdjacent(f, 14).addAdjacent(e, 9);
        e.addAdjacent(d, 9).addAdjacent(f, 10);
        f.addAdjacent(d, 14).addAdjacent(e, 10).addAdjacent(c, 4).addAdjacent(g, 2);
        g.addAdjacent(i, 6).addAdjacent(f, 2).addAdjacent(h, 1);
        h.addAdjacent(g, 1).addAdjacent(i, 7).addAdjacent(b, 11).addAdjacent(a, 8);
        graph.addVertex(a).addVertex(b).addVertex(c).addVertex(d).addVertex(e).addVertex(f)
            .addVertex(g).addVertex(h).addVertex(i);

        expect(graph.prim(a)).to.be.deep.equal(['a','b','h','g','f','c','i','d','e']);
    })
})