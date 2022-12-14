import React,{useState} from "react";
import Child from "./Child";


const Mother = ()=>
{
    const [home, setState] = useState({
        motherMessage: null,
        childResponse: null,
    });

    const motherAction = (e)=>
    {
        e.preventDefault();
        setState({
                motherMessage:'Set up you room'
                }
        )
    }

    const childResponse = (e)=>
    {
        e.preventDefault();

        setState(
            {
                childResponse:'Mam it is done !',
                motherMessage:null
            }
        )

    }
    return (
        <>
            <div className="mother">
                <h1>Mamam</h1>
                <button onClick={motherAction}>Mother Request</button>
                <p>{home.motherMessage}</p>
                <hr />
                <Child name="Kevin KONE" response={childResponse} res={home.childResponse} requested = {home.motherMessage !== null ? true : false}/>
            </div>
        </>
    );
}

export default Mother;