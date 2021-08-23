"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Id = void 0;
const id_exception_1 = require("./../exceptions/id.exception");
/**
 * Id
 *
 * Id represents a generic ID.
 */
class Id {
    /**
     * Creates a new Id instance.
     * @param value The value of the id.
     * @throws IdException when the value is invalid.
     */
    constructor(value) {
        if (!value) {
            throw new id_exception_1.IdException();
        }
        this._val = value;
    }
    /**
     * equals()
     *
     * equals() compares the suspect to the intance, to determine if they are equal.
     * @param suspect The suspect to compare.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Id) {
            const other = suspect;
            isEqual = this.id() === other.id();
        }
        return isEqual;
    }
    /**
     * id()
     *
     * id() gets the value of the ID.
     */
    id() {
        return this._val;
    }
    toString() {
        return this.id().toString();
    }
}
exports.Id = Id;
//# sourceMappingURL=id.js.map