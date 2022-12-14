import React from "react";
import MyContext from "./MyContext";
import ThirdChild from "./ThirdChild";


const SecondChild = () =>
{
    return (
        <MyContext.Consumer>
            {
                data => {
                    return (
                        <div>
                            <h3>Second Component</h3>
                            <p>
                                <strong>email : </strong>
                                {data.email}
                            </p>
                            <ThirdChild />
                        </div>
                    );
                }
            }
        </MyContext.Consumer>
    )
}

export default SecondChild;