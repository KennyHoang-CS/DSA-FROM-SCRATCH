
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
        let myValues = [];
        for (let i = 0; i < this._items.length; i++)  {
            if (this._items[i] && this._items[i][1]) {
                myValues.push(this._items[i][1]);
            }
        }

        return myValues;
    }

    // return an array of keys in hash map. 
    keys() {
        let myKeys = [];
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i] && this._items[i][0]) {
                myKeys.push(this._items[i][0]);
            }
        }

        return myKeys;
    }

    // return an array of keys and values in hash map. 
    entries() {     
        let myEntries  = [];
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i]) {
                myEntries.push(this._items[i]);
            }
        }

        return myEntries;
    }
    
}


