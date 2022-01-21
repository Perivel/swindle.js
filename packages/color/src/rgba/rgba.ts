import { Equatable, Serializable } from '@swindle/core';
import { RGBAInterface } from './rgba.interface';
import { RGBAException } from './rgba.exception';

/**
 * RGBA
 * 
 * An RGBA color representation.
 */

export class RGBA implements RGBAInterface, Equatable, Serializable {

    private readonly _r: number;
    private readonly _g: number;
    private readonly _b: number;
    private readonly _a: number;

    /**
     * Creates an RGBA value. 
     * @param r the r value.
     * @param g the g value.
     * @param b the b value. 
     * @param a the alpha value.
     * @trows RGBAException when the RGBA values are invalid.
     */

    constructor(r: number, g: number, b: number, a: number = 1.0) {
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);

        if (
            ((r >= 0) && (r <= 255)) &&
            ((g >= 0) && (g <= 255)) &&
            ((b >= 0) && (b <= 255)) &&
            ((a >= 0.0) && (a <= 1.0))
        ) {
            // valid RGBA.
            this._a = a;
            this._b = b;
            this._g = g;
            this._r = r;
        }
        else {
            // invalid.
            throw new RGBAException();
        }
    }

    /**
     * a()
     * 
     * gets the alpha value.
     */

    public a(): number {
        return this._a;
    }

    /**
     * b()
     * 
     * gets the blue value.
     */

    public b(): number {
        return this._b;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof RGBA) {
            const other = suspect as RGBA;
            isEqual = (
                (this.r() === other.r()) &&
                (this.g() === other.g()) &&
                (this.b() === other.b()) &&
                (this.a() === other.a())
            );
        }

        return isEqual;
    }

    /**
     * g()
     * 
     * gets the green value.
     */

    public g(): number {
        return this._g;
    }

    /**
     * r()
     * 
     * gets the red value.
     */

    public r(): number {
        return this._r;
    }

    public serialize(): string {
        return JSON.stringify({
            r: this.r().toString(),
            g: this.g().toString(),
            b: this.b().toString(),
            a: this.a().toString()
        });
    }

    /**
     * setA()
     * 
     * sets the alpha value.
     * @param x the value to set.
     * @throws RGBAException when x is invalid.
     */

    public setA(x: number): RGBA {
        return new RGBA(this.r(), this.g(), this.b(), x);
    }

    /**
     * setB()
     * 
     * sets the b value.
     * @param x the value to set.
     * @throws RGBAException when x is invalid.
     */

    public setB(x: number): RGBA {
        return new RGBA(this.r(), this.g(), x, this.a());
    }

    /**
     * setG()
     * 
     * sets the g value.
     * @param x the value to set.
     * @throws RGBAException when x is invalid.
     */

    public setG(x: number): RGBA {
        return new RGBA(this.r(), x, this.b(), this.a());
    }

    /**
     * setR()
     * 
     * sets the r value.
     * @param x the value to set.
     * @throws RGBAException when x is invalid.
     */

    public setR(x): RGBA {
        return new RGBA(x, this.g(), this.b(), this.a());
    }

    public toString(): string {
        return this.serialize();
    }
}