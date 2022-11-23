import React, {Component} from "react";
import CarComponent from './Components/CarComponent'
import "../../../css/style.css";

export default class Car extends Component {
    delete = (e) => {
        const brand = e.target.innerHTML;
        alert(brand);
    };

    state = {
        title: "My Car Catalog",
    };

    render() {
        return (
            <div className="car">
                <h1 className="title">{this.state.title}</h1>
                <CarComponent delete={this.delete} brand="Toyota" color="red" />
                <CarComponent
                    delete={this.delete}
                    brand="Bentley"
                    color="black"
                />
                <CarComponent delete={this.delete} brand="Ford" />
                <CarComponent
                    delete={this.delete}
                    brand="Range Rover"
                    color="brune"
                />
                <CarComponent
                    delete={this.delete}
                    brand="Hunday"
                    color="black"
                />
            </div>
        );
    }
}