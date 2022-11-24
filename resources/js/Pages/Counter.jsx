import React,{useState} from "react";
import '../../css/style.css'

export default function Counter ()
{
    let [value, setValue] = useState(0);
    const handleAction = (e)=>
    {
        const action = e.target.id;
        if(action === 'in')
        {
            setValue(() => value++);
        }else
        {
            if(value >= 1)
            {
                setValue(() => value--);
            }
        }
    }
    return (
        <div className="container">
            <h1 className="title">Counter Component</h1>
            <span>{value}</span>
            <div className="action">
                <button id="in" onClick={handleAction}>Increment(+)</button>
                <button id="de" onClick={handleAction}>Decrement(-)</button>
            </div>
        </div>
    );
}
