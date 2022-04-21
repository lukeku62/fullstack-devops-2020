"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../service/Service");
class HttpController {
    constructor(server) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color);
            const convertedColor = (0, Service_1.convert)(color);
            res.send(convertedColor);
        });
    }
}
exports.default = HttpController;
//# sourceMappingURL=HttpController.js.map