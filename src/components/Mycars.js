import React, {Component} from "react";
import Car from "./Cars";
import MyHeader from "./MyHeader";


export class Mycars extends Component {


    state = {
        cars: ["Ford", "Mercedes", "Peugeot"]
    }

    render() {


        const {cars} = this.state
        const {title, color} = this.props


        return (
            <div>


                <MyHeader color={color}>{title}</MyHeader>

                <Car color="red">{cars[0]}</Car>

                <Car>{cars[1]}</Car>

                <Car color="green">{cars[2]}</Car>

                <Car></Car>

            </div>
        )
    }


}

// export default Mycars;
