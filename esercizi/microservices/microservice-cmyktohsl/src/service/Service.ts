import colorConverter from "color-convert";
import { CMYK, HSL } from "color-convert/conversions";

export function convert(color: CMYK): HSL {
  const colorToConvert: CMYK = color;
  const convertedColor: HSL = colorConverter.cmyk.hsl(colorToConvert);
  return convertedColor;
}
