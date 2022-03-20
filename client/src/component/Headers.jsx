import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import logo from '../image/stockLogo.png';


class Header extends Component {
    render() {
        return (
             <nav className="app-header">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="brand-logo center">
                            <img src={logo} width="70" height="62" alt="app logo">
                            </img>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Header;