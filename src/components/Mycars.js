import React, {Component} from "react";
import Car from "./Cars";


class Mycars extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <Car color="red">Ford</Car>
                <Car>Toyota</Car>
                <Car color="green">BMW</Car>
                <Car color="Black"></Car>

            </div>
        )
    }


}

export default Mycars;
