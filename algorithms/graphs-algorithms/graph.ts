import { Queue } from "../data-structure/queue";
import { PriorityQueue } from "../data-structure/priority-queue";

export class Graph {
    private vertexs: Vertex[] = [];

    addVertex(vertex: Vertex):Graph {
        if (vertex != null) {
            this.vertexs.push(vertex);
        }

        return this;
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

        for (let adjacent of vertex.getAdjacents()) {
            if (adjacent.vertex.color == Color.WHITE) {
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

    /**
     * prim algorithms minimum spanning tree
     * @param root 源点
     */
    prim(root: Vertex):string[]{
        for (let vertex of this.vertexs) {
            vertex.key = Number.MAX_SAFE_INTEGER;
            vertex.clearPreVertex();
        }

        root.key = 0;
        let priorityQueue = new PriorityQueue(
            (edge1: Vertex, edge2: Vertex) => {
                return edge1.key > edge2.key;
            })

        priorityQueue.insert(this.vertexs);

        let output = [];
        while(priorityQueue.isNotEmpty()){
            let vertex = <Vertex>priorityQueue.extractMin();
            output.push(vertex.name);
            for(let adj of vertex.getAdjacents()){
                if(priorityQueue.find(adj.vertex) && adj.weight < adj.vertex.key){
                    adj.vertex.key = adj.weight;
                    priorityQueue.increase(adj.vertex);
                    adj.vertex.addPreVertex(vertex);
                }
            }
        }

        return output;
    }

    /**
     * kruskal algorithms minimum spanning tree
     * @param root 源点
     */
    kruskal(root: Vertex) {

    }
}

export class Vertex {

    private adjacents: AdjacentVertex[] = [];

    private _color: Color;

    private _deep: number;

    private preVertex: Vertex ;

    // 标识任意源点到该点的距离
    private _key: number;
    
    private _name: string;

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    static generateVertex(name:string): Vertex {
        return new Vertex(name);
    }

    constructor(name:string){
        this._name = name;
    }

    addAdjacent(vertex: Vertex, weight?: number):Vertex {
        let adjacentVertex = new AdjacentVertex(vertex, weight);
        this.adjacents.push(adjacentVertex);
        return this;
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
        this.preVertex = null;
    }

    public addPreVertex(vertex: Vertex) {
        this.preVertex = vertex;
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

    public get key(): number {
        return this._key;
    }
    public set key(value: number) {
        this._key = value;
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