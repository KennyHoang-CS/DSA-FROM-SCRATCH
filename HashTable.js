
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

    set(key, value) {
        const hashedK = hash(key, 10); 
        this._items[hashedK] = value; 
    }

    get(key) {
        const hashedK = hash(key, 10);
        return this._items[hashedK]; 
    }
    
    has(key) {
       
    }

    values() {
        console.log('');
        console.log('Values...');
        for (let i = 0; i < this._items.length; i++) {
            console.log(this._items[i]);
        }
    }
    
}

const m = new HashMap(); 

m.set('cat', 'red');
m.set('bob', 'yellow');

console.log(m);
console.log(m.get('cat'));
console.log(m.get('bob'));
//console.log('HAS cat key?: ', m.has());
m.values();
