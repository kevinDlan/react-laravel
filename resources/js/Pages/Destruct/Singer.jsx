import React, { Fragment } from "react";



const Singer = ({ name, age }) => {
    // const {name, age} = props;
    return (
        <Fragment>
            <div>
                <p>
                    Singer : {name} - {age}
                </p>
            </div>
        </Fragment>
    );
};

export default Singer;