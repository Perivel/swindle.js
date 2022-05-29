import { Equatable, Serializable } from '@swindle/core';
import { HexInterface } from './hex.interface';
import { HexException } from './hex.exception';
import { isHex } from 'colors-convert';

/**
 * Hex
 * 
 * A Hex color value.
 */

export class Hex implements HexInterface, Equatable, Serializable {

    private readonly _value: string;

    /**
     * Creates a Hex instance.
     * @param value the hex value.
     * @throws HexException when the hex value is invalid.
     */
    constructor(value: string) {
        value = value.toUpperCase();
        if (isHex(value)) {
            this._value = value;
        }
        else {
            throw new HexException();
        }
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Hex) {
            const other = suspect as Hex;
            isEqual = this.value() === other.value();
        }

        return isEqual;
    }

    public serialize(): string {
        return this.value();
    }

    public toString(): string {
        return this.serialize();
    }

    /**
     * value()
     * 
     * gets the value.
     */

    public value(): string {
        return this._value;
    }
}