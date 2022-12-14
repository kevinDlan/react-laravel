import React,{Component} from "react";
import vegeta from '../../../assets/images/vegeta.jpg';
import countHits from "./CountHits";

class Vegeta extends Component
{
     
 render()
 {
    const lifeValue =
        this.props.life > 0 ? (
            <td>{this.props.life} %</td>
        ) : (
            <td>
                <span className="badge rounded-pill text-bg-danger">Mort</span>
            </td>
        );
    const Button =
        this.props.life > 0 ? (
            <button
                onClick={this.props.addOneHit}
                className="btn btn-success m-3"
            >
                {this.props.name} Frappe
            </button>
        ) : (
            <button
                className="btn btn-danger m-3"
                disabled
            >
             Mort
            </button>
        );
    return (
        <div className="col">
            <img src={vegeta} alt="vegeta" />
            <br />
            {Button}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Hits</th>
                        <th scope="col">life</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.state.hits}</td>
                        {lifeValue}
                    </tr>
                </tbody>
            </table>
        </div>
    );
 }
}


export default countHits(Vegeta, 10);