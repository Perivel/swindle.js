"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;
const id_1 = require("./../id/id");
const uuid_1 = require("uuid");
const exceptions_well_1 = require("./../exceptions/exceptions.well");
/**
 * UUID
 *
 * UUID represents a UUID.
 */
class UUID extends id_1.Id {
    /**
     * Creates a UUID instance.
     * @param value The value of the UUID.
     * @throws UUIDException if the value is invalid.
     */
    constructor(value) {
        if (!uuid_1.validate(value)) {
            throw new exceptions_well_1.UUIDException();
        }
        super(value);
    }
    /**
     * NIL()
     *
     * Creates the NIL UUID.
     * @returns a nil UUID (all zeros)
     */
    static NIL() {
        return new UUID(uuid_1.NIL);
    }
    /**
     * V1()
     *
     * Generates a Version 1 UUID (Timestamp).
     * @returns A version 1 UUID.
     */
    static V1() {
        return new UUID(uuid_1.v1());
    }
    /**
     * V3()
     *
     * Creates a Version 3 UUID (namespace with MD5).
     * @param name the name
     * @param namespace the namespace
     * @returns a Version 3 UUID.
     */
    static V3(name, namespace) {
        return new UUID(uuid_1.v3(name, namespace));
    }
    /**
     * V4()
     *
     * V4() generates a V4 UUID (random)
     * @returns a Version 4 UUID.
     */
    static V4() {
        return new UUID(uuid_1.v4());
    }
    /**
     * V5()
     *
     * Creates a Version 5 UUID (namespace with SHA-1) UUID.
     * @param name the name
     * @param namespace the namespace
     * @returns a Version 5 UUID.
     */
    static V5(name, namespace) {
        return new UUID(uuid_1.v5(name, namespace));
    }
    /**
     * equals()
     *
     * equals() compares the suspect to the instance, to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof UUID) {
            const other = suspect;
            isEqual = this.id() === other.id();
        }
        return isEqual;
    }
    /**
     * id()
     *
     * id() gets the value of the id.
     */
    id() {
        return super.id();
    }
    /**
     * version()
     *
     * gets teh version of the UUID.
     */
    version() {
        return uuid_1.version(this.id());
    }
}
exports.UUID = UUID;
//# sourceMappingURL=uuid.js.map