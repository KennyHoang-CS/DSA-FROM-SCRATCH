
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

    test('addAtPosition() works.', () => {
        ll.addAtPosition('first', 1);
        ll.addAtPosition('last', 4);
        expect(ll.getHead().data).toEqual('first'); 
        expect(ll.getTail().data).toEqual('last');
    });

    test('delete() works.', () => {
        ll.delete(1);
        expect(ll.search(1)).toEqual(false);
        ll.delete('last');
        expect(ll.search('last')).toEqual(false);
        expect(ll.getTail().data).toEqual(3);
    });

    test('deleteAtPos() works.', () => {
        
        let ll2 = new LinkedList();
        ll2.add(1);
        ll2.add(2);
        ll2.add(3); // 1 2 3
        ll2.deleteAtPosition(1);  // 2 3 
        expect(ll2.getHead().data).toEqual(2);
        expect(ll2.getTail().data).toEqual(3);
        ll2.deleteAtPosition(2);  // 2 
        expect(ll2.getHead().data).toEqual(2);
        expect(ll2.getTail().data).toEqual(2);
        ll2.deleteAtPosition(1);
        expect(ll2.getHead()).toEqual(null);
        expect(ll2.getTail()).toEqual(null);
    });
});