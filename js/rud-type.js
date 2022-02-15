// make a rudimentry type system
const Type = {
  is: function(obj, type) {
    return typeof obj === type;
  },
  isArray: function(obj) {
    return Array.isArray(obj);
  },
  isObject: function(obj) {
    return obj !== null && typeof obj === 'object';
  },
  isFunction: function(obj) {
    return this.is instanceof Function // not sure if this is correct
  },
  isString: function(obj) {
    return obj !== null && typeof obj === 'string';
  },
  isUnion: function(obj) {
    return this.isArray(obj) && obj.every(this.isString);
  },
};

const test = {
  isArray: Type.isArray,
  isObject: Type.isObject,
  isFunction: Type.isFunction,
  isString: Type.isString,
  isUnion: Type.isUnion,
};

console.log(test.isArray([]));
console.log(test.isObject({}));
console.log(test.isString('string'));
console.log(test.isFunction(function() {}));
console.log(test.isUnion(['string', 'string']));

