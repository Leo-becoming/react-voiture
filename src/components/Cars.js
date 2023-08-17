import React from "react";
import Wrapper from "./Wrapper";

const Car = ({children, color}) => {


    if (children) {
        return (
            <Wrapper>
                <p>Marque: <b>{children}</b></p>
                <p>Couleur: {color ? color : "inconnue"}</p>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper color="red">
                <p>Marque: <b> Inconnue </b></p>
            </Wrapper>
        )
    }

}


export default Car;
