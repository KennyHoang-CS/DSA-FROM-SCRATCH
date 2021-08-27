
const { BST } = require('../BST');

describe('Binary Search Tree operations works.', () => {

    let bst = new BST(); 

    test('add() works.', () => {
        bst.add(50);
        expect(bst.root.data).toEqual(50);
        bst.add(30);
        expect(bst.root.left.data).toEqual(30);
        bst.add(70);
        expect(bst.root.right.data).toEqual(70);
        bst.add(20);
        bst.add(40);
        bst.add(60);
        bst.add(80);
    });

    test('dfs() works.', () => {
        expect(bst.dfs()).toEqual([50, 30, 20, 40, 70, 60, 80]);
    });

    test('findMin() works.', () => {
        expect(bst.findMin()).toEqual(20)
    });

    test('findMax() works.', () => {
        expect(bst.findMax()).toEqual(80);
    });

    test('delete() works.', () => {
        
        // leaf node 
        bst.delete(20);
        expect(bst.root.left.left).toEqual(null);

        // node to be deleted has one child
        bst.delete(30);
        expect(bst.root.left.data).toEqual(40);

        // node to be deleted have two childs
        bst.delete(50);
        expect(bst.root.data).toEqual(60);
    });

    test('search() works.', () => {
        expect(bst.search(80)).toEqual(true)
    });

});