import colorConverter from "color-convert";
import { HEX, RGB } from "color-convert/conversions";

export function convert(color: HEX): RGB {
  const colorToConvert: string = color.toLowerCase();
  const convertedColor: RGB = colorConverter.hex.rgb(colorToConvert);
  return convertedColor;
}
