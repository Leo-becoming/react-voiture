import React from 'react';

function Wrapper(props) {

console.log(props.color)



    const {children, color} = props

    let colorChoice = color ?  color : "pink"

    return (

        <div style={{backgroundColor: colorChoice, width: '550px', padding: '10px', margin: "5px auto"}}>
            {children}
        </div>

    )
}

export default Wrapper