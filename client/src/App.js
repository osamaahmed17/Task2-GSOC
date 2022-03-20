import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from '../src/component/Headers'; //For Getting Header Component
import HomePage from '../src/view/HomePage' //For HomePage View
import '../src/style/App.css';

class App extends Component {
    state = {
        data: null
    };



    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Headers />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );

    }

}


export default App;