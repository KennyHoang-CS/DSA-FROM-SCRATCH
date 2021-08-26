
const { LinkedList } = require('../LinkedList');

describe('Linked List operations.', () => {

    let ll = new LinkedList(); 

    test('add() works.', () => {
        ll.add(1);
        ll.add(2);
        ll.add(3); 
        expect(ll.getHead().data).toEqual(1); 
        expect(ll.getTail().data).toEqual(3);
    });

});