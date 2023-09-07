import React, {Component, Fragment} from "react";
import Car from "./Cars";
import MyHeader from "./MyHeader";

const currentYear = new Date().getFullYear()



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
                name: 'BMW',
                color: 'blue',
                year: 2022
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
        title: "Catalogue voitures"
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

    getAge = (year) => {
        return (currentYear - year);
    }

    render() {


        const {title, cars} = this.state
        const {color} = this.props


        return (
            <>


                <MyHeader addStyle={this.addStyle} color={color}>{title} : {cars.length + " resultats"} </MyHeader>

                <p onCopy={this.noCopy}>Donec quam felis ultricies nec</p>


                <table>

                <tbody>
                <tr>
                    <th>Marque</th>
                    <th>Année</th>
                    <th>couleur</th>
                    <th>Age</th>
                </tr>


                {cars.map(({name, color, year}, index) => (

                    /*  <tr>
                          <td>{name}</td>
                          <td>{year}</td>
                          <td>{color}</td>
                          <td>{() => this.getAge(year)}</td>
                      </tr>*/


                    <Car
                        name={name}
                        key={index}
                        age={this.getAge(year)}
                        color={color}
                        year={year}
                    />

                ))}

                </tbody>
                </table>


            </>
        )
    }


}

// export default Mycars;
