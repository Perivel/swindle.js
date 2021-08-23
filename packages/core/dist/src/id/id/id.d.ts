import { IddentifierInterface } from "./id.interface";
import { Equatable } from "../../common/common.module";
/**
 * Id
 *
 * Id represents a generic ID.
 */
export declare abstract class Id implements IddentifierInterface, Equatable {
    private readonly _val;
    /**
     * Creates a new Id instance.
     * @param value The value of the id.
     * @throws IdException when the value is invalid.
     */
    constructor(value: any);
    /**
     * equals()
     *
     * equals() compares the suspect to the intance, to determine if they are equal.
     * @param suspect The suspect to compare.
     */
    equals(suspect: any): boolean;
    /**
     * id()
     *
     * id() gets the value of the ID.
     */
    id(): any;
    toString(): string;
}
//# sourceMappingURL=id.d.ts.map