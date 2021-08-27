
const { BinaryTree } = require('../BinaryTree');


describe('Binary Tree Operations.', () => {

    // create our binary tree.
    let bt = new BinaryTree();
    bt.add(13);
    bt.add(12);
    bt.add(10);
    bt.add(4);
    bt.add(19);
    bt.add(16);

    test('add() works.', () => {
        bt.add(420);
        expect(bt.search(420)).toEqual(true);
    }); 

    test('delete() works.', () => {
        bt.delete(12);
        expect(bt.root.left.data).toEqual(420);
        expect(bt.search(12)).toEqual(false);
    });

    test('maxSumPath() works.', () => {
        expect(bt.maxSumPath()).toEqual(478);
    });
});

/*
            13
           /   \
          12    10 
         / \    /  \
        4  19  16  420   

*/