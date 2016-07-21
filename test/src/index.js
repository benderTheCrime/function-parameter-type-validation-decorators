
// TODO: Have this get pulled directly into the files in which it is used
import type from '../../';

class Test {}

export default {
    types: {
        error(@type test) {},
        array(@type(Array) arr) {
            return arr;
        },
        string(@type(String) str) {
            return str;
        },
        number(@type(Number) num) {
            return num;
        },
        boolean(@type(Boolean) bool) {
            return bool;
        },
        null(@type(null) nul) {
            return nul;
        },
        _(@type(Test) test) {
            return test;
        },
    },
    array(@type.isArray arr) {
        return arr;
    },
    string(@type.isString str) {
        return str;
    },
    number(@type.isNumber num) {
        return num;
    },
    finite(@type.isFinite num) {
        return num;
    },
    boolean(@type.isBoolean bool) {
        return bool;
    },
    null(@type.isNull nul) {
        return nul;
    },
    undef(@type.isUndefined undef) {
        return undef;
    }
};
export { Test };