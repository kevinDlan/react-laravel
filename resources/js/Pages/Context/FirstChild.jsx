import { values } from "lodash";
import React from "react";
import MyContext from "./MyContext";
import SecondChild from "./SecondChild";


const FirstChild = ()=>
{
    return (
        <MyContext.Consumer>
            { data =>{
                return (
                    <div>
                        <h2>First Component</h2>
                        <p>
                            <strong>Name : </strong>
                            {data.name}
                        </p>
                        <SecondChild/>
                    </div>
                );
            }}
        </MyContext.Consumer>
    );
}

export default FirstChild;