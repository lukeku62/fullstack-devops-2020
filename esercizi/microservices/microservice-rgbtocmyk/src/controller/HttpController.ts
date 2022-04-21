import {convert} from '../service/Service';
import {Express} from 'express';
import { CMYK, RGB } from 'color-convert/conversions';

type RGBObjType = {
    r: number,
    g: number,
    b: number
}

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const stringObj: RGBObjType = JSON.parse(req.query.color as string);
            const color: RGB = [stringObj.r, stringObj.g, stringObj.b];
            const convertedColor: CMYK = convert(color);

            res.send({inputRGB:color, outputCMYK:convertedColor});
        });
    }
}

export default HttpController;
