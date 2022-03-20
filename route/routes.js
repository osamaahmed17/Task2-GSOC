const stockDetailController = require("../controller/stockDetailController");

// Post Routes For Stock Details
module.exports =(app) => {
    app.post(`/postDetailStock`,stockDetailController.postDetailStock);
};

