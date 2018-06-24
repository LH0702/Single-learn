import { Queue } from "../data-structure/queue";

export class Graph {
    private vertexs: Vertex[] = [];

    addVertex(vertex: Vertex) {
        if (vertex != null) {
            this.vertexs.push(vertex);
        }
    }

    convertToMatrix() {

    }

    breadthFirstSearch(source: Vertex) {
        this.initVertexs();

        source.color = Color.GREY;
        let queue = new Queue();
        queue.enQueue(source);

        while (queue.isNotEmpty()) {
            let e = <Vertex>queue.deQueue();
            for (let adjacent of e.getAdjacents()) {
                if (adjacent.vertex.color == Color.WHITE) {
                    adjacent.vertex.color = Color.GREY;
                    adjacent.vertex.deep += 1;
                    adjacent.vertex.addPreVertex(e);
                    queue.enQueue(adjacent);
                }
            }
            e.color = Color.BLACK;
        }
    }

    deepFirstSearch(source: Vertex) {
        this.initVertexs()
        source.color = Color.GREY;

        for (let adjacent of source.getAdjacents()) {
            if (adjacent.vertex.color == Color.WHITE) {

            }
        }

        source.color = Color.BLACK;
    }

    dfsVisit(vertex: Vertex) {
        vertex.color = Color.GREY;
        vertex.deep += 1;

        for(let adjacent of vertex.getAdjacents()){
            if(adjacent.vertex.color == Color.WHITE){
                adjacent.vertex.addPreVertex(vertex);
                this.dfsVisit(adjacent.vertex);
            }
        }

        vertex.color = Color.BLACK;
    }

    private initVertexs() {
        for (let vertex of this.vertexs) {
            vertex.color = Color.WHITE;
            vertex.clearPreVertex();
            vertex.deep = 0;
        }
    }
}

export class Vertex {

    private adjacents: AdjacentVertex[] = [];

    private _color: Color;

    private _deep: number;

    private preVertex: Vertex[] = [];

    addAdjacent(vertex: Vertex, weight?: number) {
        let adjacentVertex = new AdjacentVertex(vertex, weight);
        this.adjacents.push(adjacentVertex);
    }

    getAdjacents(): AdjacentVertex[] {
        return this.adjacents;
    }

    eachAdjacent(callBack: Function) {
        for (let vertex of this.adjacents) {
            callBack(vertex);
        }
    }

    public clearPreVertex() {
        this.preVertex = [];
    }

    public addPreVertex(vertex: Vertex) {
        this.preVertex.push(vertex);
    }

    public get deep(): number {
        return this._deep;
    }

    public set deep(value: number) {
        this._deep = value;
    }



    public get color(): Color {
        return this._color;
    }

    public set color(value: Color) {
        this._color = value;
    }

}

export enum Color {
    WHITE,
    BLACK,
    GREY
}

class AdjacentVertex {
    private _weight: number;

    private _vertex: Vertex;

    constructor(vertex: Vertex, weight?: number) {
        this._vertex = vertex;
        this._weight = weight;
    }

    public get weight(): number {
        return this._weight;
    }

    public get vertex(): Vertex {
        return this._vertex;
    }
}