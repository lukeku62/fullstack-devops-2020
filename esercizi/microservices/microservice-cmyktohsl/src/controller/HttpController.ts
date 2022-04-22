import {convert} from '../service/Service';
import {Express} from 'express';
import { CMYK, HSL } from 'color-convert/conversions';

type CMYKType = {
    c: number,
    m: number,
    y: number,
    k: number
}
class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const inputcolor: CMYKType =JSON.parse(req.query.color as string);
            const color:CMYK = [inputcolor.c, inputcolor.m, inputcolor.y, inputcolor.k];
            const convertedColor: HSL = convert(color);

            res.send({inputCMYK:color, outputHSL:convertedColor});
        });
    }
}

export default HttpController;
