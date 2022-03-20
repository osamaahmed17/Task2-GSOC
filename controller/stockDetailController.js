
const yahooStockAPI  = require('yahoo-stock-api');


// Controller For Stock Details
class stockDetailController {
    constructor() {
        this.postDetailStock = this.postDetailStock.bind(this);
    };

    // Get Stock Details From Yahoo Stock API After Getting The Symbol
    async postDetailStock(req, res) {
        var stockDetail =  await yahooStockAPI.getSymbol(req.body.stockDetail)
        return res.status(200).send(stockDetail);

    }
}



module.exports = new stockDetailController;