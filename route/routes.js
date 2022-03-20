const stockHistoryController = require("../controller/stockHistoryController");
const stockDetailController = require("../controller/stockDetailController");


module.exports =(app) => {
    app.get(`/postHistoryStock`,stockHistoryController.postHistoryStock);
    app.get(`/postDetailStock`,stockDetailController.postDetailStock);
};

