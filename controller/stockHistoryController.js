
const yahooStockAPI  = require('yahoo-stock-api');



class stockHistoryController {
    constructor() {
        this.postHistoryStock = this.postHistoryStock.bind(this);
    };

    async postHistoryStock(req, res) {
        const startDate = new Date('08/21/2020');
        const endDate = new Date('08/26/2020');
        var stockHistory = await yahooStockAPI.getHistoricalPrices(startDate, endDate, 'AAPL', '1d');
        let response = {
            success: true,
            data: []
        };
        response.data = stockHistory
        return res.status(200).send(response);    }
}



module.exports = new stockHistoryController;





