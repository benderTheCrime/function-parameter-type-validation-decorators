class TypeValidationConstructorError extends TypeError {
    constructor() {
        const message = 'Cannot validate against type undefined. Use type.isUndefined instead.';

        super(message);
        this.message = message;
        this.name = 'TypeValidationConstructorError';
    }
}

class TypeValidationError extends TypeError {
    constructor(ctor, value) {
        let message = `${value} is not of type `;

        try {
            message = `${message}${ctor.prototype.constructor.name}.`;
        } catch (e) {
            message = `${message}${ctor}.`;
        }

        super(message);
        this.message = message;
        this.name = 'TypeValidationError';
    }
}

class TypeValidationFiniteNumberError extends TypeValidationError {
    constructor(ctor, value) {
        super('Finite Number', value);
    }
}

function type(ctor) {
    switch (ctor) {
    case Object:
        return type.isObject;
    case Array:
        return type.isArray;
    case String:
        return type.isString;
    case Number:
        return type.isNumber;
    case Boolean:
        return type.isBoolean;
    case null:
        return type.isNull;
    case undefined:
        throw new TypeValidationConstructorError();
    default:
        return function(value) {
            if (value instanceof ctor) {
                return value;
            }

            throw new TypeValidationError(ctor, value);
        };
    }
};

type.isObject = function(value) {
    try {
        if (Object.prototype.toString.call(value) === '[object Object]') {
            return value;
        }
    } catch (e) {}

    throw new TypeValidationError(Object, value);
};

type.isArray = function(value) {
    if (Array.isArray(value)) {
        return value;
    }

    throw new TypeValidationError(Array, value);
};

type.isString = function(value) {
    if (typeof value === 'string') {
        return value;
    }

    throw new TypeValidationError(String, value);
};

type.isNumber = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return value;
    }

    throw new TypeValidationError(Number, value);
};

type.isFinite = function(value) {
    if (this.isNumber(value) && isFinite(value)) {
        return value;
    }

    throw new TypeValidationFiniteNumberError(Number, value);
};

type.isBoolean = function(value) {
    if (typeof value === 'boolean') {
        return value;
    }

    throw new TypeValidationError(Boolean, value);
};

type.isNull = function(value) {
    if (value === null) {
        return null;
    }

    throw new TypeValidationError(null, value);
};

type.isUndefined = function(value) {
    if (value === undefined) {
        return;
    }

    throw new TypeValidationError(undefined, value);
};

export default type;