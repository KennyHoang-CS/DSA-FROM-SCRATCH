const { Queue } = require('../Queue');


describe('Queue operations.', () => {

    const q = new Queue(); 

    test('enqueue() works.', () => {
        expect(q.size).toEqual(0);
        q.enqueue(5);
        expect(q.size).toEqual(1);
        expect(q.peek()).toEqual(5);
        expect(q.peekAtEnd()).toEqual(5);
        q.enqueue(4);
        expect(q.size).toEqual(2);
        expect(q.peek()).toEqual(5);
        expect(q.peekAtEnd()).toEqual(4);
    });

    test('dequeue() works.', () => {
        expect(q.dequeue()).toEqual(5);
        expect(q.size).toEqual(1);
        expect(q.dequeue()).toEqual(4);
        expect(q.size).toEqual(0);
        expect(q.dequeue()).toEqual(null);
    });
});