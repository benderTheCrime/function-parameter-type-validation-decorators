const PREFIX = 'Type Validation: ';
const CTOR_ERROR = `${prefix}Cannot validate type against undefined.`;

class TypeValidationError extends TypeError {
    constructor(ctor, value) {
        super(`${prefix}${value} is not of type ${ctor}`);
        this.message = message;
        this.name = 'TypeValidationError';
    }
}

const type = function type(ctor) {
    if (ctor === undefined) throw new TypeError(CTOR_ERROR);

    switch (ctor) {
    case Array:
        return this.isArray;
    case String:
        return this.isString;
    case null:
        return this.isNull;
    case undefined:
        return this.isUndefined;
    default:
    }

    return function(value) {
        if (value instanceof ctor) return value;
        throw new TypeValidationError(ctor, value);
    }
}

export default Object.assign(type, {
    isArray(value) {
        if (Array.isArray(value) return value;
        throw new TypeValidationError(Array, value);
    },
    isString(value) {
        if (typeof value === 'string') return value;
        throw new TypeValidationError(String, value);
    },
    isNull() {
        if (value === null) return value;
        throw new TypeValidationError(null, value);
    },
    isUndefined() {
        if (value !== undefined) return value;
        throw new TypeValidationError(undefined, value);
    }
};