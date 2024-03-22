class hashMap {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    };

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    };

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const existingItem = bucket.find(item => item[0] === key);
            if (existingItem) {
                existingItem[1] = value;
            } else {
                bucket.push([key, value]);
            };
        };
    };

// get(key) takes one argument as a key and returns the value that is assigned
// to this key. If a key is not found, return null
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            const existingItem = bucket.find(item => item[0] === key);
            if (existingItem) {
                return existingItem[1];
            };
        } else {
            return null;
        };
    };

// has(key) takes a key as an argument and returns true or false based on
// whether or not the key is in the hash map
    has(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            const existingItem = bucket.find(item => item[0] === key);
            if (existingItem) {
                return true;
            };
        } else {
            return false;
        };
    };

// remove(key) takes a key as an argument. If the given key is in the hash map,
// it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
    
        if (bucket) {
            const sameKeyItemIndex = bucket.findIndex(item => item[0] === key);
            if (sameKeyItemIndex >= 0) {
                bucket.splice(sameKeyItemIndex, 1);
                return true;
            } else {
                return false; // Return false if key doesn't exist in the bucket
            };
        } else {
            return false; // Return false if bucket does not exist for the index
        };
    };

// length() returns the number of stored keys in the hash map
    length() {
        let count = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                count += this.table[i].length;
            };
        };
        return count;
    };

// clear() removes all entries in the hash map
    clear() {
    for (let i = 0; i < this.size; i++) {
        this.table[i] = [];
    };
};

// keys() returns an array containing all the keys inside the hash map
    keys() {
        const arrayKeys = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    arrayKeys.push(this.table[i][j][0]);
                };
            };
        };
        return arrayKeys;
    };

// values() returns an array containing all the values
    values() {
        const arrayValues = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    arrayValues.push(this.table[i][j][1]);
                };
            };
        };
        return arrayValues;
    };

// entries() returns an array that contains each key, value pair.
// Example: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined && this.table[i].length > 0) {
                console.log(i, this.table[i]);
            };
        };
    };
};


const table = new hashMap(50);

table.set("name", "Maria");
table.set("mane", "Nicole");
table.set("city", "New York");
table.entries();
console.log(table.get("name"));
console.log(table.get("hdwdkj"))
table.remove("name");
table.set("weather", "sunny");
console.log(table.keys());
table.entries();
//table.clear();
console.log(table.has("mane"));
table.entries();
console.log(table.length());
console.log(table.values());
console.log(table.keys());
console.log(table.get("hdwdkj"));
console.log(table.remove("city"));
console.log(table.remove("jdowdjoj"));
table.entries();