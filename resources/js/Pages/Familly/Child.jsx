import React from "react";



const Child = ({ name, requested, res, response}) => {
    return (
        <div>
            <h2>{name}</h2>
            {requested ? (
                <button onClick={response}>Answer at Mother Request</button>
            ) : (
                <button disabled>Answer at Mother Request</button>
            )}
            <p>{res}</p>
        </div>
    );
};


export default Child;