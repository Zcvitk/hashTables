class hashSet {
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
    
    set(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
    
        if (!bucket) {
            this.table[index] = [[key]];
        } else {
            const existingKey = bucket.find(item => item[0] === key);
            if (existingKey) {
                existingKey[0] = key;
            } else {
                bucket.push([key]);
            }
        };
    };
    
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
    
        if (bucket) {
            const existingKey = bucket.find(item => item[0] === key);
            if (existingKey) {
                return existingKey[0];
            }
        } else {
            return null;
        };
    };
    
    has(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
    
        if (bucket) {
            const existingKey = bucket.find(item => item[0] === key);
            if (existingKey) {
                return true;
            }
        } else {
            return false;
        };
    };
    
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
    
        if (bucket) {
            const sameKeyItemIndex = bucket.findIndex(item => item[0] === key);
            if (sameKeyItemIndex >= 0) {
                bucket.splice(sameKeyItemIndex, 1);
                return true;
            } else {
                return false; 
            }
        } else {
            return false; 
        }
    };
    
    length() {
        let count = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                count += this.table[i].length;
            }
        }
        return count;
    };
    
    clear() {
        for (let i = 0; i < this.size; i++) {
            this.table[i] = [];
        }
    };
    
    keys() {
        const arrayKeys = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                    arrayKeys.push(this.table[i]);
            }
        }
        return arrayKeys;
    };
    
    entries() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined && this.table[i].length > 0) {
                console.log(i, this.table[i]);
            }
        }
    };
}



const table = new hashSet(50);

table.set("name");
table.set("surname");
table.set("namesur");
table.set("country");
console.log(table.get("name"));
console.log(table.get("jdwdjowjo"));
console.log(table.has("country"));
console.log(table.has("llllllllllsxsxs"));
//table.remove("country");
table.remove("cbdcbeib");
table.entries();
console.log(table.length());
//table.clear();
console.log(table.keys());
table.entries();