import { convert } from "../service/Service";
import { Express } from "express";
import { HEX, RGB } from "color-convert/conversions";

class HttpController {
  constructor(server: Express) {
    server.get("/", (req, res) => {
      const color: HEX = req.query.color as HEX;
      const convertedColor: RGB = convert(color);

      res.send({ rgb: convertedColor });
    });
  }
}

export default HttpController;
