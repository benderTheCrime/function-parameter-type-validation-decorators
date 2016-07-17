const prefix = 'Type Validation: ';
const type = function type(ctor) {
    let typeFn;

    if (ctor === undefined) {
        throw new TypeError();
    }

    switch (ctor) {
    case Array:
        typeFn = this.isArray;

        break;
    case String:
        typeFn = this.isString;

        break;
    case Boolean:
        typeFn = this.isBoolean;

        break;
    case null:
        typeFn = this.isNull;

        break;
    case undefined:
        typeFn = this.isUndefined;

        break;
    default:
        typeFn = function(value) {
            if (value instanceof ctor) {
                return value;
            }

            throw new TypeValidationError(ctor, value);
        };
    }

    return typeFn;
};

class TypeValidationError extends TypeError {
    constructor(ctor, value) {
        let message = `${prefix}${value} is not of type `,
            name = ctor;

        if (ctor || [ null, undefined ].indexOf(ctor) > -1) {
            try {
                name = `${ctor.prototype.constructor.name}`;
            } catch (e) {}

            message += name;
        } else {
            message = `${prefix}Cannot validate type against undefined.`;
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

Object.assign(type, {
    isArray(value) {
        if (Array.isArray(value)) {
            return value;
        }

        throw new TypeValidationError(Array, value);
    },
    isString(value) {
        if (typeof value === 'string') {
            return value;
        }

        throw new TypeValidationError(String, value);
    },
    isNumber(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            return value;
        }

        throw new TypeValidationError(Number, value);
    },
    isFinite(value) {
        if (this.isNumber(value) && isFinite(value)) {
            return value;
        }

        throw new TypeValidationFiniteNumberError(Number, value);
    },
    isBoolean(value) {
        if (typeof value === 'boolean') {
            return value;
        }

        throw new TypeValidationError(Boolean, value);
    },
    isNull(value) {
        if (value === null) {
            return value;
        }

        throw new TypeValidationError(null, value);
    },
    isUndefined(value) {
        if (value === undefined) {
            return value;
        }

        throw new TypeValidationError(undefined, value);
    }
});

System.global.type || Object.defineProperty(System.global, 'type', {
    enumerable: false,
    configurable: false,
    writable: false
});
export default type;