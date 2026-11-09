import {BTree} from './trees_graphs.js';

//4_1  Find if Two nodes connect in Graph
//Tests only: Implimented Graph Search methods

//4_2  Minimal Tree from Sorted Array
function treeElements(elements, btree, type='Search') {
    for (let element of elements) {
        btree.grow(element, type)
    }
}

function sortedListSearchTree(sorted_array, btree) {
    if (sorted_array.length <= 2) {
        treeElements(sorted_array, btree)
        return
    }
    let mid = Math.floor(sorted_array.length / 2)
    btree.grow(sorted_array[mid], "Search")
    let first_half = sorted_array.slice(0,mid)
    let second_half = sorted_array.slice(mid+1)

    sortedListSearchTree(first_half, btree)
    sortedListSearchTree(second_half, btree)
}

//4_3  Level Linked Lists (One at each Depth)

//4_4  Checked Balanced Tree

//4_5  Validate Binary Search

//4_6  In-Order Successor

//4_7  Build Order Graph

//4_8  First Common Ancestor (two nodes)

//4_9  BST Sequence all posible origin lists (ordered inserts)

//4_10  Check Subtree Is T2 subtree of T1

//4_11  getRandomNode() function in search tree also implement insert, find, delete

//4_12  Paths with Sum (Any origin but must only descend)

export {sortedListSearchTree};