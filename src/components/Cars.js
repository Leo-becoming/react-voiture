import React from "react";
import Wrapper from "./Wrapper";




const Car = ({name, color, year, age}) => {



    if (name) {
        return (
            <Wrapper>
                <p>Marque: <b>{name}</b></p>
                <p>Couleur: {color ? color : "inconnue"}</p>
                <p>Année: {year ? year : "inconnue"}</p>

                <p>
                    Âge:{" "}
                    {year ? age >= 1
                            ? age + (age === 1 ? " an" : " ans")
                            : "-1 an"
                        : "inconnue"}
                </p>
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
