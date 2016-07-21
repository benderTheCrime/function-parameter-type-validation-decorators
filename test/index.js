import test, { Test } from './lib/index';

const t = require('ava');

// Object
t(t => t.deepEqual(test.object({}), {}));
t(t => t.throws(test.object, 'undefined is not of type Object.'));

// Array
t(t => t.deepEqual(test.array([ 1, 2, 3 ]), [ 1, 2, 3 ]));
t(t => t.throws(test.array, 'undefined is not of type Array.'));

// String
t(t => t.is(test.string('foo'), 'foo'));
t(t => t.throws(test.string, 'undefined is not of type String.'));

// Number
t(t => t.is(test.number(1), 1));
t(t => t.throws(test.number, 'undefined is not of type Number.'));

// Finite
t(t => t.is(test.finite(1), 1));
t(t => t.throws(() => test.finite(Infinity), 'Infinity is not of type Finite Number.'));
t(t => t.throws(test.finite, 'undefined is not of type Number.'));

// Boolean
t(t => t.is(test.boolean(true), true));
t(t => t.is(test.boolean(false), false));
t(t => t.throws(test.boolean, 'undefined is not of type Boolean.'));

// null
t(t => t.is(test.null(null), null));
t(t => t.throws(test.null, 'undefined is not of type null.'));

// null
t(t => t.is(test.undef(undefined), undefined));
t(t => t.throws(test.undef.bind(null, 1), '1 is not of type undefined.'));

// Custom
t(t => t.throws(test.types.error, 'Cannot validate against type undefined. Use type.isUndefined instead.'));
t(t => t.deepEqual(test.types.object({}), {}));
t(t => t.throws(test.types.object, 'undefined is not of type Object.'));
t(t => t.deepEqual(test.types.array([ 1, 2, 3 ]), [ 1, 2, 3 ]));
t(t => t.throws(test.types.array, 'undefined is not of type Array.'));
t(t => t.is(test.types.string('foo'), 'foo'));
t(t => t.throws(test.types.string, 'undefined is not of type String.'));
t(t => t.is(test.types.number(1), 1));
t(t => t.throws(test.types.number, 'undefined is not of type Number.'));
t(t => t.is(test.types.boolean(true), true));
t(t => t.is(test.types.boolean(false), false));
t(t => t.throws(test.types.boolean, 'undefined is not of type Boolean.'));
t(t => t.is(test.types.null(null), null));
t(t => t.throws(test.types.null, 'undefined is not of type null.'));
t(t => t.deepEqual(test.types.regExp(/.*/), /.*/));
t(t => t.throws(test.types.regExp, 'undefined is not of type RegExp.'));
t(function(t) {
    const TEST = new Test();

    t.deepEqual(test.types._(TEST), TEST);
});
t(t => t.throws(test.types._, 'undefined is not of type Test.'));