/// <reference types="node" />
import { Equatable } from "../../common/common.module";
import { Salt } from "../salt/salt";
import { HashInterface } from "./hash.interface";
/**
 * Hash
 *
 * A Hash.
 */
export declare class Hash implements HashInterface, Equatable {
    private readonly _value;
    constructor(value: string);
    /**
     * Create()
     *
     * creates a hash using the data and the salt
     * @param data the data to hash
     * @param salt the salt to use
     * @returns a hashed version of the data
     */
    static Create(data: string | Buffer, salt: Salt): Promise<Hash>;
    /**
     * equals()
     *
     * compares the instance to the suspect, to determine if they are equal.
     * @param suspect the suspect to compare
     */
    equals(suspect: any): boolean;
    toString(): string;
    /**
     * value()
     *
     * gets the value of the hash.
     */
    value(): string;
}
//# sourceMappingURL=hash.d.ts.map