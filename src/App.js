import React, {Component} from  'react';
import {Mycars} from "./components/Mycars";

import "./App.css"






class App extends Component {


    state = {
        titre : 'Mon catalogue voiture',
        color : "Green"
    }

    render(){
        return (
            <div className="App">
                <Mycars
                    title={this.state.titre}
                    color={this.state.color}
                />

            </div>
        );
    }
}

export default App;
