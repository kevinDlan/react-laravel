import React,{Component} from "react";


export default class CarComponent extends Component
{
  render (){
    return (
        <div className="carComponent car-component">
            <div className="content">
                <ol>
                    <li id="brand">
                        Brand :{" "}
                        {this.props.brand ? this.props.brand : "Undeterminate"}
                    </li>
                    <li id="color">
                        Color :{" "}
                        {this.props.color ? this.props.color : "Undeterminate"}
                    </li>
                </ol>
                <span
                    onClick={() => this.props.delete(this.props.id)}
                    className="close"
                >
                    X
                </span>
            </div>
        </div>
    );
  }
}