import React, {Component} from  'react';
import Mycars from "./components/Mycars";

import "./App.css"






class App extends Component {


    state = {
        titre : 'Mon catalogue voiture'
    }

    render(){
        return (
            <div className="App">
                <h1>Cars</h1>
                <Mycars title={this.state.titre} />

            </div>
        );
    }
}

export default App;
