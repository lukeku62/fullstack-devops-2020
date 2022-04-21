import colorConverter from "color-convert";
import { CMYK, RGB } from "color-convert/conversions";

export function convert(color: RGB): CMYK {
  const colorToConvert: RGB = color;
  const convertedColor: CMYK = colorConverter.rgb.cmyk(colorToConvert);
  return convertedColor;
}
