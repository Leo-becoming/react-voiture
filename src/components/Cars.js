import React from "react";
import Wrapper from "./Wrapper";


const currentYear =  new Date().getFullYear()

const Car = ({name, color, year}) => {



    if (name) {
        return (
            <Wrapper>
                <p>Marque: <b>{name}</b></p>
                <p>Couleur: {color ? color : "inconnue"}</p>
                <p>Année: {year ? year : "inconnue"}</p>

                <p>Âge: {year ? (currentYear - year) + " " + ((currentYear - year) <= 1 ? "an" : "ans") : "inconnue"}</p>

            </Wrapper>
        )
    } else {
        /* return (
             <Wrapper color="red">
                 <p>Marque: <b> Inconnue </b></p>
             </Wrapper>
         )*/

        return null;
    }

}


export default Car;
