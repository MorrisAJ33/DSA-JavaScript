import {sortedListSearchTree} from '../problems.js';
import {BTree, Tries, Graph} from '../trees_graphs.js';
//import {withExecutionTime} from '../utils';


let graph_connections = [['b','a',1],
                         ['a','s',1],
                         ['s','c',1],
                         ['c','d',1],
                         ['c','g',1],
                         ['g','h',1],
                         ['h','j',1],
                         ['h','i',1],
                         ['g','d',1],
                         ['i','k',1],
                         ['b','e',1]]

let connect_test = ['k','b',1]

var graph_unconnected = new Graph()
var graph_connected = new Graph()


for (let edge of graph_connections) {
    graph_unconnected.add_link(edge[0], edge[1], edge[2], true)
    graph_connected.add_link(edge[0], edge[1], edge[2], true)
}


describe('Unconnected Graph', () => {
     test('Breadth First without checked connection', () => {
       graph_unconnected.search('s','e')
       expect(graph_unconnected.foundInSearch).toBeFalsy();
     });
     test('Depth First without checked connection', () => {
       // test code
       graph_unconnected.search('s','e','Depth')
       expect(graph_unconnected.foundInSearch).toBeFalsy();
     });
   });

graph_connected.add_link(connect_test[0],connect_test[1], connect_test[2], true)

describe('Connected Graph', () => {
     test('Breadth First checked with connection', () => {
       graph_connected.search('s','e')
       expect(graph_connected.foundInSearch).toBeTruthy();
     });
     test('Depth First checked with connection', () => {
       // test code
       graph_connected.search('s','e','Depth')
       expect(graph_connected.foundInSearch).toBeTruthy();
    });
});


var graph_connected_undirected = new Graph()


for (let edge of graph_connections) {
    graph_connected_undirected.add_link(edge[0], edge[1], edge[2])
}


describe('Undirected Connecting Graph', () => {
     test('Breadth First checked with connection', () => {
       graph_connected_undirected.search('s','e')
       expect(graph_connected.foundInSearch).toBeTruthy();
     });
     test('Depth First checked with connection', () => {
       // test code
       graph_connected_undirected.search('s','e','Depth')
       expect(graph_connected.foundInSearch).toBeTruthy();
    });
});

var sorted_values_odd = [-1,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
var bTreeOdd = new BTree()

sortedListSearchTree(sorted_values_odd, bTreeOdd);

describe('Search BTree Balanced from Sorted Array of Odd Length', () => {
     test('Root Node Value', () => { 
        expect(bTreeOdd.root.data).toEqual(7);
     });
     test('Lowest Value', () => { 
        expect(bTreeOdd.root.left.left.left.data).toEqual(-1);
     });
     test('Highest Value', () => { 
        expect(bTreeOdd.root.right.right.right.data).toEqual(14);
     });
});