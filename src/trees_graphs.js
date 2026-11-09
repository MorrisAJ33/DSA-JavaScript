class BiNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class MNode {
    constructor(data) {
        this.data = data
        this.children = []
    }
}

class BTree {
    constructor(type='Search') {
        this.root = null;
        this.type = type;
    }
    #growSearch(leaf){
        let node = this.root
        while (node != null){
            if (leaf.data < node.data) {
                if (node.left == null) {
                    node.left = leaf
                    return
                }
                node = node.left
            }
            else {
                if (node.right == null) {
                    node.right = leaf
                    return
                }
                node = node.right
            }
        }
    }
    #growMinHeap(leaf){
        let node = this.root
        }
    #growMaxHeap(leaf){
        let node = this.root
        }
    #growComplete(leaf){
        let node = this.root
        }

    grow(data){
        let leaf = new BiNode(data)
        if (this.root == null){
            this.root = leaf
            return
        }
        if (this.type == 'Search'){
            this.#growSearch(leaf)
        }
        else if (this.type == 'Min Heap'){
            this.#growMinHeap(leaf)
        }
        else if (this.type == 'Max Heap'){
            this.#growMaxHeap(leaf)
        }
        else {
            this.#growComplete(leaf)
        }
    }
    balance() {

    }
}

class Tries {
    constructor() {
        this.root = null;
    }
    terminate(node) {
        node.children.push('*')
    }
}

class Edge {
    constructor(start, end, cost=undefined){
        this.start=start;
        this.end=end;
        this.cost=cost;
    }
}

class Node {
    constructor(idv) {
        this.id = idv;
        this.edges = []
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
        this.start = undefined
        this.visited = new Set();
        this.foundInSearch = false;
        this.pathCost = undefined;
    }
    #node_ref(id) {
        if (this.nodes.has(id)) {
            return this.nodes.get(id)
        }
        let node = new Node(id)
        this.nodes.set(id, node)
        return node
    }

    add_link(id_1, id_2, cost=undefined, directed=false) {
        let node_1 = this.#node_ref(id_1)
        let node_2 = this.#node_ref(id_2)
        node_1.edges.push(new Edge(id_1, id_2, cost))
        if (!directed) {
            node_2.edges.push(new Edge(id_2, id_1, cost))
        }
    }
    #searchDepthFirst(start_id, end_id) {
        let node = this.nodes.get(start_id)
        this.visited.add(node.id)
        for (const edge of node.edges){
            if (end_id != undefined && edge.end == end_id) {
                this.foundInSearch = true
                break;
            }
            if (!this.visited.has(edge.end)) {
                this.#searchDepthFirst(edge.end, end_id)
            }
        }
    }

    #searchBreadthFirst(start_id, end_id) {
        let queue = new Array();
        let node = this.nodes.get(start_id)
        let edge
        this.visited.add(node.id)
        queue.push(...node.edges);
        while (queue.length != 0) {
            edge = queue.shift()
            node = this.nodes.get(edge.end)
            if (end_id != undefined && node.id == end_id) {
                this.foundInSearch = true;
                this.visited.add(node.id)
                break
            }
            if (!this.visited.has(node.id)) {
                this.visited.add(node.id)
                queue.push(...node.edges);
            }
        }
    }

    #dijkstra(start_id, end_id) {

    }

    search(start_id, end_id=undefined, type="Breadth") {
        this.visited = new Set();
        this.foundInSearch = false;
        this.pathCost = undefined;

        if (start_id == end_id) {
            this.visited.add(start_id)
            this.foundInSearch = true;
            return
        }

        if (type.toLowerCase() == "breadth"){
            this.#searchBreadthFirst(start_id, end_id)
        }
        else if (type.toLowerCase() == 'dijkstra') {
            this.pathCost = Infinity
            this.#dijkstra(start_id, end_id)
        }
        else if (type.toLowerCase() == 'depth') {
            this.#searchDepthFirst(start_id, end_id)
        }
        else {
            const e = new Error(`Search Type Not Defined = '${type}' valid options: 'Breadth, Depth, Dijkstra'`);
            e.name = "ClassificationError";
            throw e;
        }
    }
}

export { BTree, Tries, Graph };