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
exports.Hash = void 0;
const Bcrypt = __importStar(require("bcryptjs"));
/**
 * Hash
 *
 * A Hash.
 */
class Hash {
    constructor(value) {
        this._value = value;
    }
    /**
     * Create()
     *
     * creates a hash using the data and the salt
     * @param data the data to hash
     * @param salt the salt to use
     * @returns a hashed version of the data
     */
    static async Create(data, salt) {
        //return new Hash(await Bcrypt.hash(data, salt.value()));
        return new Promise((resolve, reject) => {
            Bcrypt.hash(data.toString(), salt.value(), (error, hash) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(new Hash(hash));
                }
            });
        });
    }
    /**
     * equals()
     *
     * compares the instance to the suspect, to determine if they are equal.
     * @param suspect the suspect to compare
     */
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Hash) {
            isEqual = this.value() === suspect.value();
        }
        return isEqual;
    }
    toString() {
        return this.value();
    }
    /**
     * value()
     *
     * gets the value of the hash.
     */
    value() {
        return this._value;
    }
}
exports.Hash = Hash;
//# sourceMappingURL=hash.js.map