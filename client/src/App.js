import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI()
    }

    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        try {
            const response = await fetch('/express_backend');
            const json = await response.json();
            console.log('json', json)

        } catch (err) {
            console.error('err', err);
        }
    };

    render() {

        if (this.state.data == undefined)
            return (<LoadingComponent />);
        console.log(this.state.data)
        return (
            <Provider store={store}>
                <div className="App">

                    <Favicon url="" />
                    <BrowserRouter>
                        <Headers />
                        <Switch>
                            <Route path="/signin" render={(props) => <Signin name={this.state.data} />} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/signout" component={Signout} />
                            <Route path="/" exact component={HomePage} />
                            <Route exact path='/namelist' render={(props) => <NameList name={this.state.data} />} />
                            <Route path="/dashboard" render={(...props) => <Dashboard name={this.state.data} />} /> />
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        );

    }

}


export default App;