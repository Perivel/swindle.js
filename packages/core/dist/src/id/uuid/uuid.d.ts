import { Id } from "./../id/id";
import { UUIDInterface } from "./uuid.interface";
/**
 * UUID
 *
 * UUID represents a UUID.
 */
export declare class UUID extends Id implements UUIDInterface {
    /**
     * Creates a UUID instance.
     * @param value The value of the UUID.
     * @throws UUIDException if the value is invalid.
     */
    constructor(value: string);
    /**
     * NIL()
     *
     * Creates the NIL UUID.
     * @returns a nil UUID (all zeros)
     */
    static NIL(): UUID;
    /**
     * V1()
     *
     * Generates a Version 1 UUID (Timestamp).
     * @returns A version 1 UUID.
     */
    static V1(): UUID;
    /**
     * V3()
     *
     * Creates a Version 3 UUID (namespace with MD5).
     * @param name the name
     * @param namespace the namespace
     * @returns a Version 3 UUID.
     */
    static V3(name: string, namespace: string): UUID;
    /**
     * V4()
     *
     * V4() generates a V4 UUID (random)
     * @returns a Version 4 UUID.
     */
    static V4(): UUID;
    /**
     * V5()
     *
     * Creates a Version 5 UUID (namespace with SHA-1) UUID.
     * @param name the name
     * @param namespace the namespace
     * @returns a Version 5 UUID.
     */
    static V5(name: string, namespace: string): UUID;
    /**
     * equals()
     *
     * equals() compares the suspect to the instance, to determine if they are equal.
     * @param suspect The suspect to be compared.
     */
    equals(suspect: any): boolean;
    /**
     * id()
     *
     * id() gets the value of the id.
     */
    id(): string;
    /**
     * version()
     *
     * gets teh version of the UUID.
     */
    version(): number;
}
//# sourceMappingURL=uuid.d.ts.map