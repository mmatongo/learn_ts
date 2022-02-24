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
  isNumber: function(obj) {
    return obj !== null && typeof obj === 'number';
  },
};

const Types = {
  is: Type.is,
  isArray: Type.isArray,
  isObject: Type.isObject,
  isFunction: Type.isFunction,
  isString: Type.isString,
  isUnion: Type.isUnion,
  isNumber: Type.isNumber,
};

// assign a type to a value using the types object
const test = function(value, type) {
  return Types.is(value, type);
};

// test a value against a union of types
const testUnion = function(value, types) {
  return Types.isUnion(types) && types.some(function(type) {
    return Types.is(value, type);
  });
};

