import Car from "@/Components/Car";
import React, { Fragment,useState } from "react";
import CarPng from "../../assets/images/car.png";
import CarSvg from "../../assets/images/car.svg";
import style from '../../assets/styles/main.module.css';
import { Head } from "@inertiajs/inertia-react";




const Form = ()=>
{

    const [form, setFormState] =  useState(
        {
            name:'',
            color:'',
            colors:['','Reed','Green','Blue','Black'],
            comment:'user fun Comment'
        }
    )

    const handleOnchange = (e)=>
    {
        setFormState(oldValue =>
                {
                    return {
                        ...oldValue,
                        [e.target.id]: e.target.value,
                    };
                }
        )
    }

    const handleSubmitForm = (e)=>
    {
        e.preventDefault();
        if(form.name === '' || form.color === '' || form.comment === '')
        {
            alert("Please Fill all field before submit.");
            return null;
        }
        const {name,color, comment} = form;
        console.log(name, color, comment);

    }

    const titleStyle = {
        fontSize:"40px",
        color:"red",
    }

const img =
    "https://st2.depositphotos.com/2767472/5820/i/450/depositphotos_58200883-stock-photo-christmas-snow-globe-snowflake-with.jpg";
    return (
        <Fragment>
            <Head title="React | Form"/>
            <div className="image">
                <h1 style={titleStyle}>Image</h1>
                <Car provider="Local .png file" link={CarPng} />
                <Car provider="Local .svg file" link={CarSvg} />
                <Car provider="Internet" link={img} />
            </div>
            <p>Comment</p>
            <div className="form">
                <h1 className={style.car}>Form</h1>
                <form onSubmit={handleSubmitForm}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={handleOnchange}
                            value={form.name}
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="color">Color</label>
                        <select
                            name="color"
                            id="color"
                            value={form.color}
                            onChange={handleOnchange}
                        >
                            {form.colors.map((color, index) => {
                                return (
                                    <option key={index} value={color}>
                                        {color}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="comment"></label>
                        <textarea
                            value={form.comment}
                            name="comment"
                            id="comment"
                            cols="30"
                            rows="5"
                            onChange={handleOnchange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Form;