# Color
Manipulate and represent colors in different formats.

Currently, Color only suppoerts Hex and RGBA color codes.

> **Note** The Color module has now been merged with the Core module.

# Usage
```ts
import { Color, Hex, RGBA } from '@swindle/color';

// instantiating colors.
const red = Color.Red();
const blue = Color.FromRGBA(0,0,255);
const white = Color.FromHex('#FFFFFF');
const black = new Color(new RGBA(0,0,0));
const green = new Color(new Hex('#00FF00'));

// getting RGBA and Hex code from color.
const hexBlue = blue.hex();
const rgbaRed = red.rgba();

// equality.
const myColor = Color.FromRGBA(255,0,0);
if (myColor.equals(red)) {...} // => true
if (myColor.equals(green)) {...} // => false
if (myColor.equals(undefined)) {...} // => false

// getting the plain value from a Hex instance.
const codeValue = hexBlue.value(); // #0000FF
const codeStr = hexBlue.toString(); // // #0000FF

// getting the rgba value from an RGBA instance.
const r = rgbaRed.r(); // 255
const g = rgbRed.g(); // 0
const b = rgbaRed.b(); // 0
const alpha = rgbaRed.a(); // 1.0
```