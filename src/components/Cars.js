import React from "react";

const Car = ({children, color}) => {

    const colorInfo = color ? (<p>Couleur: <b>{color}</b></p>) : ("")


    if (children) {
        return (
            <div style={{backgroundColor: "pink", width: '550px', padding: '10px', margin: "5px auto"}}>
                <p>Marque: <b>{children}</b></p>
                {colorInfo}

            </div>
        )
    } else {
        return (
            <div style={{backgroundColor: "red", width: '550px', padding: '10px', margin: "5px auto"}}>
                <p>Marque: <b> Inconnue </b></p>
                {colorInfo}

            </div>
        )
    }

}


export default Car;
