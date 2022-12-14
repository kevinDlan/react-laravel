import React, { Fragment } from "react";
import CarImg from "../assets/images/car.png"


const Car = props => 
{
    const {link,provider} = props
    return (
        <Fragment>
            <img width="100px" src={link} alt="Car-img" />
            <p>{provider !== null && provider}</p>
        </Fragment>
    );
}

export default Car;