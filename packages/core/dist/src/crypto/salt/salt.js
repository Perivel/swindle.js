"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salt = void 0;
const Bcrypt = __importStar(require("bcryptjs"));
/**
 * Salt
 *
 * Represents a salt.
 */
class Salt {
    constructor(value) {
        this._value = value;
    }
    /**
     * Generate()
     *
     * generates a salt.
     * @param rounds the number of rounds to use.
     * @returns a generated hash
     */
    static async Generate(rounds = 10) {
        return new Salt(await Bcrypt.genSalt(rounds));
    }
    /**
     * equals()
     *
     * compares the suspect to the instance to determine if they are equal.
     * @param suspect the suspect to compare
     * @returns true if the suspect and the instance are equal
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Salt) {
            isEqual = suspect.value() === this.value();
        }
        return isEqual;
    }
    /**
     * value()
     *
     * gets the value of the salt.
     */
    value() {
        return this._value;
    }
    toString() {
        return this.value();
    }
}
exports.Salt = Salt;
//# sourceMappingURL=salt.js.map