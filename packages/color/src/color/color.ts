import { Equatable, Serializable } from '@swindle/core';
import { Hex } from '../hex/hex.module';
import { RGBA } from '../rgba/rgba.module';
import { ColorInterface } from './color.interface';
import { hexToRgba, rgbaToHex, } from 'colors-convert';

/**
 * Color
 * 
 * A Color value.
 */

export class Color implements ColorInterface, Equatable, Serializable {

    private readonly _rgba: RGBA;
    private readonly _hex: Hex;

    /**
     * Creates a Color value.
     * @param value the value of the color.
     */

    constructor(value: RGBA|Hex) {
        
        if (value instanceof RGBA) {
            this._rgba = value as RGBA;
            this._hex = new Hex(rgbaToHex({
                r: this._rgba.r(),
                g: this._rgba.g(),
                b: this._rgba.b(),
                a: this._rgba.a()
            }));
        }
        else {
            this._hex = value as Hex;
            const rgba = hexToRgba(this._hex.value());
            this._rgba = new RGBA(rgba.r, rgba.g, rgba.b, rgba.a);
        }
        
    }

    /**
     * Black()
     * 
     * creates a Black color.
     * @param a the alpha value, defaults to 1.0
     * @returns a color instance representing the Black color.
     */

    public static Black(a: number = 1.0): Color {
        return Color.FromRGBA(0,0,0,a);
    }

    /**
     * Blue()
     * 
     * creates a Color instance set to blue.
     * @param a the alpha value, defaults to 1.0
     * @returns a color value set to blue.
     */

    public static Blue(a: number = 1.0): Color {
        return Color.FromRGBA(0, 0, 255, a);
    }

    /**
     * FromHex()
     * 
     * creates a Color instance from a Hex string.
     * @param v the hex value.
     * @returns a Color representing the Hex value provided.
     * @throws HexException when the Hex value is invalid.
     */

    public static FromHex(v: string): Color {
        const hex = new Hex(v);
        return new Color(hex);
    }

    /**
     * FromRGBA()
     * 
     * Creates a Color instance using the RGBA values provided.
     * @param r the r value.
     * @param g the g value.
     * @param b the b value.
     * @param a the a value.
     * @returns a Color instance set to the RGBA value provided.
     */

    public static FromRGBA(r: number, g: number, b: number, a: number = 1.0): Color {
        const rgba = new RGBA(r, g, b, a);
        return new Color(rgba);
    }

    /**
     * Green()
     * 
     * creates a Color instance set to green.
     * @param a the alpha value, defaults to 1.0
     * @returns a color value set to green.
     */

    public static Green(a: number = 1.0): Color {
        return Color.FromRGBA(0, 255, 0, a);
    }

    /**
     * Red()
     * 
     * creates a Color instance set to red.
     * @param a the alpha value, defaults to 1.0
     * @returns a color value set to red.
     */

    public static Red(a: number = 1.0): Color {
        return Color.FromRGBA(255, 0, 0, a);
    }

    /**
     * White()
     * 
     * creates a Color instance set to white.
     * @param a the alpha value, defaults to 1.0
     * @returns a color value set to White.
     */

    public static White(a: number = 1.0): Color {
        return Color.FromRGBA(255, 255, 255, a);
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Color) {
            const other = suspect as Color;
            isEqual = this.rgba().equals(other.rgba()) && this.hex().equals(other.hex());
        }

        return isEqual;
    }

    /**
     * hex()
     * 
     * gets the hex value of the color.
     */

    public hex(): Hex {
        return this._hex;
    }

    /**
     * rgba()
     * 
     * gets the RGBA value of the color.
     */

    public rgba(): RGBA {
        return this._rgba;
    }

    public serialize(): string {
        return JSON.stringify({
            hex: this.hex().serialize(),
            rgba: this.rgba().serialize(),
        });
    }

    public toString(): string {
        return this.serialize();
    }
}