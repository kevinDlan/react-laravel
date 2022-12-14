import React, { Fragment } from "react";


const Button = ({ handleNameUpdate }) => {
    return (
        <Fragment>
            <button onClick={handleNameUpdate}>Change</button>
        </Fragment>
    );
};

export default Button