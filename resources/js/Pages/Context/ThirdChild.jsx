import React from "react";
import MyContext from "./MyContext";


const ThirdChild = ()=>
{

    const handleChange = (param)=>
    {
        param.name = 'Will Smith';

        console.log(param);
    }
    return (
        <MyContext.Consumer>
            {
                data => {
                    return (
                        <div>
                            <h4>Last Component</h4>
                            <p>
                                <strong>Phone : </strong>{data.tel}
                            </p>
                            <button onClick={()=>{handleChange(data)}}>Change Something</button>
                        </div>
                    )
                }
            }
        </MyContext.Consumer>
    )
}

export default ThirdChild;