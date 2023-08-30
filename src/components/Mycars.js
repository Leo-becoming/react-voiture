import React, {Component} from "react";
import Car from "./Cars";
import MyHeader from "./MyHeader";


export class Mycars extends Component {


    state = {
        cars: [
            {
                name: 'ford',
                color: 'red',
                year: 2000
            },
            {
                name: 'Mercedes',
                color: 'black',
                year: 2023
            },
            {
                name: 'Toyota',
                color: 'blue',
                year: 2010
            },
            {
                name: 'Dacia',
                color: 'green',
            }
        ],
        title : "Catalogue voitures"
    }


    noCopy = () => {
        alert('Pas de copie')
    }


    addStyle = (e) => {
        let elem = e.target.classList;

        if (!elem.contains('hovered')) {
            elem.add('hovered')
        } else {
            elem.remove('hovered')
        }
    }


    render() {


        const {title, cars} = this.state
        const {color} = this.props


        return (
            <div>


                <MyHeader addStyle={this.addStyle} color={color}>{title} : {cars.length + " resultats"} </MyHeader>

                <p onCopy={this.noCopy}>Donec quam felis ultricies nec</p>


                {cars.map((car, index) => (
                    <Car name={car.name} key={index} color={car.color} year={car.year}/>
                ))}




            </div>
        )
    }


}

// export default Mycars;
