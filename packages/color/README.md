# Swindle Color
Manipulate and represent colors in different formats.

Currently, Color only suppoerts Hex and RGBA color codes.

# installation
To install Swindle, just use the following command with NPM
```
npm i @swindle/color
```
Similarly, run the following command with Yarn
```
yarn add @swindle/color
```

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

# Tests
To run the tests, use the following command with NPM
```
npm run test
```
Or, with Yarn
```
yarn test
```
# Issues and Bug Reporting
If you are facing any problems while using Swindle, feel free to open an issue, where we'd be happy to help you out.

# License
Swindle is available under the MIT license.