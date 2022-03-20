
const yahooStockAPI  = require('yahoo-stock-api');

class stockDetailController {
    constructor() {
        this.postDetailStock = this.postDetailStock.bind(this);
    };

    async postDetailStock(req, res) {

        var stockDetail =  await  yahooStockAPI.getSymbol('AAPL')
        let response = {
            success: true,
            data: []
        };
        response.data = stockDetail
        return res.status(200).send(response);

    }
}



module.exports = new stockDetailController;