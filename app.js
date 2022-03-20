var express = require("express");
const path = require('path');
const yahooStockAPI  = require('yahoo-stock-api');



async function stockDetail()  {
	return await  yahooStockAPI.getSymbol('AAPL');
}



var app = express();
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/express_backend', async (req, res) => {
    async function stockHistory()  {
        const startDate = new Date('08/21/2020');
        const endDate = new Date('08/26/2020');
        return await yahooStockAPI.getHistoricalPrices(startDate, endDate, 'AAPL', '1d');
    }
   var stockHistory = await stockHistory();
   res.send({ express: stockHistory });

});




//Server Setup
if (process.env.PORT) {
    server = app.listen(process.env.PORT || 5000, process.env.IP, function() {
        console.log("Server is running");
    });
} else {
    server = app.listen(5000, function() {
        console.log("Server is running");
    });
}