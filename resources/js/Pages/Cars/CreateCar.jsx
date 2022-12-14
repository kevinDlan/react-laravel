import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React,{Fragment,useState} from "react";
import "../../../css/style.css";



export default function CreateCar(props)
{

    // Validation Error
    const {errors} = usePage().props;

    const [input, setInput] = useState(
        {
            brand:"",
            color:""
        }
    );

    const onInputChange = (e)=>
    {
        const key = e.target.id;
        const value = e.target.value;
        setInput(values =>({
            ...values,
            [key]:value
        }))
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault();
        Inertia.post('/create', input);
    }
    const [title, setTitle] = useState("Create Car Form")
    return (
        <Fragment>
            <div className="car">
                <h1 className="title">{title}</h1>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <input
                                placeholder="Entrer car brand"
                                id="brand"
                                type="text"
                                name="brand"
                                value={input.brand}
                                onChange={onInputChange}
                                required
                            />
                            {errors.brand && (
                                <div className="errors">{errors.brand}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="color">Car Color</label>
                            <input
                                placeholder="Entrer car color"
                                id="color"
                                type="text"
                                name="color"
                                value={input.color}
                                onChange={onInputChange}
                                required
                            />
                            {errors.color && (
                                <div className="errors">{errors.color}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="createYear">Created Year</label>
                            <select
                                className="createYear"
                                name="createYear"
                                id="createYear"
                            >
                                <option value="2019" key="2019"></option>
                                <option value="2020" key="2020"></option>
                                <option value="2021" key="2021"></option>
                                <option value="2022" key="2022"></option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}