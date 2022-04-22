import {convert} from '../service/Service';
import {Express} from 'express';
import { HSL } from 'color-convert/conversions';

type HSLType = {
    h: number,
    s: number,
    l: number
}

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const inputcolor: HSLType =JSON.parse(req.query.color as string);
            const color: HSL = [inputcolor.h, inputcolor.s, inputcolor.l];
            const convertedColor: string = convert(color).toLowerCase();

            res.send({inputHSL:color, outputHEX:convertedColor});
        });
    }
}

export default HttpController;
