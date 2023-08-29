import React, {Component} from "react";
import Car from "./Cars";
import MyHeader from "./MyHeader";


export class Mycars extends Component {


    state = {
        cars: ["Ford", "Mercedes", "Peugeot"]
    }


    noCopy = () => {
        alert('Pas de copie')
    }


    addStyle = (e) => {

        let elem = e.target.classList;

        if (!elem.contains('hovered')){
            elem.add('hovered')
        }else{
            elem.remove('hovered')
        }

    }


    render() {


        const {cars} = this.state
        const {title, color} = this.props


        return (
            <div>


                <MyHeader addStyle={this.addStyle} color={color}>{title}</MyHeader>

                <p onCopy={this.noCopy}>Donec quam felis ultricies nec</p>

                <Car color="red">{cars[0]}</Car>

                <Car>{cars[1]}</Car>

                <Car color="green">{cars[2]}</Car>

                <Car></Car>

            </div>
        )
    }


}

// export default Mycars;
