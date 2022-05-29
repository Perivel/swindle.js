

export interface RGBAInterface {

    /**
     * a()
     * 
     * gets the alpha value.
     */

    a(): number;

    /**
     * b()
     * 
     * gets the blue value.
     */

    b(): number;

    /**
     * g()
     * 
     * gets the green value.
     */

    g(): number;

    /**
     * r()
     * 
     * gets the red value.
     */

    r(): number;

    /**
     * setA()
     * 
     * sets the alpha value.
     * @param x the value to set.
     */

    setA(x: number): RGBAInterface;

    /**
     * setB()
     * 
     * sets the b value.
     * @param x the value to set.
     */

    setB(x: number): RGBAInterface;

    /**
     * setG()
     * 
     * sets the g value.
     * @param x the value to set.
     */

    setG(x: number): RGBAInterface;

    /**
     * setR()
     * 
     * sets the r value.
     * @param x the value to set.
     */
    
    setR(x): RGBAInterface;
}