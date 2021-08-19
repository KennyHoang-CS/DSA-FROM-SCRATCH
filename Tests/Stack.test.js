const { Stack } = require('../Stack');


describe('Stack Operations. ', () => {
    
    let myStack = new Stack();

    test('isEmpty() works.', () => {
        expect(myStack.isEmpty()).toEqual(true);
    });

    test('push() works.', () => {
        myStack.push(1); 
        expect(myStack.peeking()).toEqual(1);
        expect(myStack.isEmpty()).toEqual(false); 
        myStack.push(2);
        expect(myStack.peeking()).toEqual(2);
    });

    test('peeking() works.', () => {
        expect(myStack.peeking()).toEqual(2);
    });

    test('pop() works.', () => {
        expect(myStack.pop()).toEqual(2);
    });
});

