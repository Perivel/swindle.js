import { HexInterface } from "../hex/hex.module";
import { RGBAInterface } from "../rgba/rgba.module";


export interface ColorInterface {

    /**
     * hex()
     * 
     * gets the hex value of the color.
     */

    hex(): HexInterface;

    /**
     * rgba()
     * 
     * gets the RGBA value of the color.
     */

    rgba(): RGBAInterface;
}