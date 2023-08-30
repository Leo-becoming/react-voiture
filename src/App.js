import React, {Component} from 'react';
import {Mycars} from "./components/Mycars";

import "./App.css"


class App extends Component {


    state = {
        // titre: 'Mon catalogue voiture',
        color: "Green"
    }


    changeTitle = (e) => {
        //remplace la valeur du state dans le DOM
        this.setState({
            titre: "Nouveau titre"
        })
    }

    changeTitleParam = (titre) => {
        //remplace la valeur du state dans le DOM
        this.setState({
            titre: titre
        })
    }


    changeViaBind = (param) => {
        this.setState({
            titre: param
        })
    }

    changeViaInput = () => {
        const InputVal = document.getElementById("input-titre").value;

        this.setState({
            titre: InputVal
        })
    }

    changeViaInputDirect = (e) => {
        this.setState({
            titre: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <Mycars
                    title={this.state.titre}
                    color={this.state.color}
                />
{/*
                <div>
                    <button onClick={this.changeTitle}>Changer le nom en dur</button>
                    <button onClick={() => this.changeTitleParam("Titre 2")}>Changer le nom avec param</button>
                    <button onClick={this.changeViaBind.bind(this, 'titre via bind')}>Changer le nom avec Bind</button>
                </div>

                <div>
                    <input id='input-titre' type='text' placeholder={this.state.titre}/>
                    <button onClick={this.changeViaInput}>Changer le titre</button>
                </div>

                <div>
                    <input type='text' value={this.state.titre} onChange={this.changeViaInputDirect}/>
                </div>*/}
            </div>


        );
    }
}

export default App;
