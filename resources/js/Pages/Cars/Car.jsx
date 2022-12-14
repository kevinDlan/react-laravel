import React, {Component} from "react";
import CarComponent from './Components/CarComponent'
import { Link } from "@inertiajs/inertia-react";
import "../../../css/style.css";
import { Inertia } from "@inertiajs/inertia";

export default class Car extends Component {
    state = {
        title: "My Car Catalog",
    };
    cars = this.props.cars;

    noCopy = () => {
        alert("Please Don't Copy this text.");
    };

    changeTitle = ()=>
    {
        this.setState({
            title : 'Beautiful Cars'
        })
    }
    onMouseHover = (e) => {
        const classList = e.target.classList;
        classList.contains("react-hover")
            ? classList.remove("react-hover")
            : classList.add("react-hover");
    };

     delete = (id)=>
 {
    if(confirm('Are you sure to delete ?'))
    {
        Inertia.delete(route("cars.delete", id));
    }
 }
    render() {
        // console.log(cars);
        return (
            <div className="car">
                <h1 onMouseOver={this.onMouseHover} className="title">
                    {this.state.title}
                </h1>
                <p onCopy={this.noCopy}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="group-btn">
                    <Link className="button" href={route("cars.create")}>
                        Create
                    </Link>
                    <button onClick={this.changeTitle} className="button">
                        Change Title
                    </button>
                </div>

                {this.cars.map(({ id, brand, color }) => (
                    <CarComponent
                        key={id}
                        id={id}
                        delete = {this.delete}
                        brand={brand}
                        color={color}
                    />
                ))}
            </div>
        );
    }
}