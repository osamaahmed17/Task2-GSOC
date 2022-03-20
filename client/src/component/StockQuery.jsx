import { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import upLogo from '../image/upLogo.png';
import downLogo from '../image/downLogo.png';
import mehLogo from '../image/mehLogo.png';
import axios from "axios"



class StockQuery extends Component {

    constructor() {
        super();

        // Required Binding Function To Enable This Functionality
        this.handleButtonClicked = this.handleButtonClicked.bind(this);
        this.handleStockSymbol = this.handleStockSymbol.bind(this);
        this.handleShownInterval = this.handleShownInterval.bind(this);
        this.state = {
            // Default Values Sor Stock Symbol, Time Interval And Stock Price
            stock: {
                stockSymbol: 'AAPL',
                shownInterval: 1,
                currentStockPrice: 0,
                previousStockPrice: 0
            }
        }

    }

    // For Getting Stock Symbol Value From Input Box
    handleStockSymbol(event) {
        var stock = this.state.stock;
        stock.stockSymbol = event.target.value;
        this.setState({ stock: stock });
    }

    // For Getting Interval Value From Input Box
    handleShownInterval(event) {
        var stock = this.state.stock;
        stock.shownInterval = event.target.value;
        this.setState({ stock: stock });
    }

    // Initially Gets The Stock Price From Defaul Values
    componentDidMount() {
        this.handleButtonClicked();

    }

    // Gets The Stock Price From Backend Server And Then Updates The Stock State
    getStock = async () => {
        const newStock = {
            stockDetail: this.state.stock.stockSymbol

        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        var stock = this.state.stock;
        this.state.stock.previousStockPrice = this.state.stock.currentStockPrice
        this.setState({ stock: stock });
        await axios.post("/postDetailStock",
            newStock, config
        ).then(res => {
            if (res) {
                stock.currentStockPrice = res.data.response.open
                this.setState({ stock: stock });
                console.log(stock.currentStockPrice)
            }
        })
    }


    // Updates The Interval State
    handleButtonClicked() {
        var updateInterval = this.state.stock.shownInterval
        this.getStock();
        this.interval = setInterval(() => {
            this.getStock();
        }, updateInterval * 60 * 1000);
    }




    render() {
        // Function To Decide The Arrow Or Meh Icon Depending Upon The Stock Price Variation
        var stock = this.state.stock;
        function HandleImage() {
            if (stock.currentStockPrice > stock.previousStockPrice) {

                return (
                    <div >
                        <img src={upLogo} width="70" height="62" alt="up arrow"></img>
                    </div>
                );
            }
            else if (stock.currentStockPrice < stock.previousStockPrice) {

                return (
                    <div>
                        <img src={downLogo} width="70" height="62" alt="down arrow"></img>
                    </div>
                );
            }
            else {

                return (
                    <div>
                        <img src={mehLogo} width="70" height="62" alt="meh Logo"></img>
                    </div>
                );
            }
        }
        return (
            <div>
                <div className="form-group">
                    <p htmlFor="stockSymbol"><b>Enter Stock Symbol</b></p>
                    <input type="text" className="form-control" id="stockSymbol" value={this.state.stock.stockSymbol} onChange={this.handleStockSymbol} placeholder="Enter Stock Symbol" />
                    <small id="stockSymbolHelp" className="form-text text-muted">You can get stock symbol from this <a href="https://www.nasdaq.com/market-activity/stocks/screener">link</a> </small>
                </div>
                <div className="form-group">
                    <p htmlFor="shownInterval"><b>Enter Time Interval (Minutes)</b></p>
                    <input type="number" className="form-control" id="shownInterval" value={this.state.stock.shownInterval} onChange={this.handleShownInterval} placeholder="Enter Time Interval" />
                </div>

                <p><b>Submit After Changing Value</b></p>
                <button type="submut" className="btn btn-danger" onClick={this.handleButtonClicked}>Submit</button>
                <br></br>
                <h4>The Current Price:</h4>
                <h4> <b>{this.state.stock.currentStockPrice}</b></h4>
                <HandleImage />
            </div>
        );
    }

}

export default StockQuery;