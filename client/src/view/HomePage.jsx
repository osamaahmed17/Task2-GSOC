import { Component } from 'react';
import StockQuery from '../component/StockQuery' // For Getting StockQuery Component (Main Form And Button) and Getting Stock Price
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


class HomePage extends Component {

  render() {
    const textStyle = {
      fontSize: "18px",
      fontFamily: "Tahoma, sans-serif"
    };

    // Main HomePage Text
    return (
      <div className="container">
        <br></br>
        <h3 className="title"><b>Welcome To Stock Tracker App</b></h3>
        <p style={textStyle}>This application  monitors the value of a given stock value. The user can specify the
stock symbol and how often to refresh the value, and the application should look for it on some publicly
available sources, displaying the value and a green up arrow (respectively a red down arrow) if the value
went up (respectively down) compared to last update.</p>

        <StockQuery></StockQuery>
      </div>


    );
  }

}

export default HomePage;