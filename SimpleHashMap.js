
function hash(key, arrayLength) {
    
    let hashedIndex = Array.from(key).reduce(
        (accum, char) => accum + char.charCodeAt(),
        0
    );
    
    return hashedIndex % arrayLength;  
}

class HashMap {
    constructor() {
        this._items = []; 
    }

    // sets key to value. 
    set(key, value) {
        const hashedK = hash(key, 10); 
        this._items[hashedK] = [key, value]; 
    }

    // retrive value for key. 
    get(key) {
        const hashedK = hash(key, 10);
        return this._items[hashedK]; 
    }
    
    // delete entry for key. 
    delete(key) {
        const hashedK = hash(key, 10); 
        this._items[hashedK] = null;
    }

    // checks if a key in hash map exists. 
    has(key) {
        const hashedK = hash(key, 10);
        if (this._items[hashedK][0] === key) {
            return true;
        } else return false; 
    }

    // return an array of values in hash map. 
    values() {
        return this._items.map(kv => kv[1]);
    }

    // return an array of keys in hash map. 
    keys() {
        return this._items.map(kv => kv[0]);
    }

    // return an array of keys and values in hash map. 
    entries() {
        return this._items;
    }
    
}

const m = new HashMap(); 

m.set('cat', 'red');
m.set('bob', 'yellow');

//console.log(m);
//console.log(m.get('cat'));
//console.log(m.get('bob'));
//console.log('HAS cat key?: ', m.has('cat'));
//console.log(m.values())
//console.log(m.keys())

m.delete('cat');
m.delete('bob');
console.log(m.entries());
