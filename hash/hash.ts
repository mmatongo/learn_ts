interface Hash {
    [key: string]: any;
}

const hashmap = () => {
    let hash: Hash = {};
    hash.set = (key: string, value: any) => {
        hash[key] = value;
    };
    hash.get = (key: string) => {
        return hash[key];
    };
    hash.has = (key: string) => {
        return hash.get(key) !== undefined;
    };
    hash.delete = (key: string) => {
        delete hash[key];
    };
    hash.clear = () => {
        hash = {};
    };
    return hash;
};

/* Use Codi on Vim/Neovim for live output and Quokka on Vscode */

/* add new entried */
const hash = hashmap();
hash.set('name', 'John');
hash.set('age', 30);
hash.set('city', 'New York');

/* get value */
console.log(hash.get('name'));
console.log(hash.get('age'));
console.log(hash.get('city'));

