
// TODO: Have this get pulled directly into the files in which it is used
import type from '../../';

class Test {}

export default {
    types: {
        error(@type test) {},
        object(@type(Object) obj) {
            return obj;
        },
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
        regExp(@type(RegExp) regExp) {
            return regExp;
        },
        _(@type(Test) test) {
            return test;
        },
    },
    array(@type.isArray arr) {
        return arr;
    },
    object(@type.isObject obj) {
        return obj;
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