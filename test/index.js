import test from './lib/index';

const t = require('ava');

// Array
t(t => t.deepEqual(test.array([ 1, 2, 3 ]), [ 1, 2, 3 ]));
t(t => t.throws(test.array, 'Type Validation: undefined is not of type Array'));

// String
t(t => t.is(test.string('foo'), 'foo'));
t(t => t.throws(test.string, 'Type Validation: undefined is not of type String'));

// Number
t(t => t.is(test.number(1), 1));
t(t => t.throws(test.number, 'Type Validation: undefined is not of type Number'));

// Finite
t(t => t.is(test.finite(1), 1));
t(t => t.throws(() => test.finite(Infinity), 'Type Validation: Infinity is not of type Finite Number'));
t(t => t.throws(test.finite, 'Type Validation: undefined is not of type Number'));

// Boolean
t(t => t.is(test.boolean(true), true));
t(t => t.is(test.boolean(false), false));
t(t => t.throws(test.boolean, 'Type Validation: undefined is not of type Boolean'));

// null
t(t => t.is(test.null(null), null));
t(t => t.throws(test.null, 'Type Validation: undefined is not of type null'));

// null
t(t => t.is(test.undef(undefined), undefined));
t(t => t.throws(test.undef.bind(null, 1), 'Type Validation: 1 is not of type undefined'));