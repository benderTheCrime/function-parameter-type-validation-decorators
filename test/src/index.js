
// TODO: Have this get pulled directly into the files in which it is used
import type from '../../';

export default {
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