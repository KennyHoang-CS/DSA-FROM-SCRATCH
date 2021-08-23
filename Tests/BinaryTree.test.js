
const BT = require('../BinaryTree');


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
        bt.add(9);
    }); 
});