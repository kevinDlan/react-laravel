import React,{useState,useEffect, Fragment} from "react";



const UseEffectHook = ()=>
{
    const [counter, setCounter] = useState(0);

    useEffect(
        ()=>{
            document.title = `Vous avez cliquer ${counter} fois`;
        },
        [counter]
        )

    return (
        <Fragment>
            <div className="text-center">
                <h1>{counter}</h1>
                <div>
                    <button onClick={() => setCounter(counter + 1)}>Add</button>
                </div>
            </div>
        </Fragment>
    );
}


export default UseEffectHook;