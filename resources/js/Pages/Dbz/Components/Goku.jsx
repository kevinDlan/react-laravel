import React, { Component } from "react";
import goku from "../../../assets/images/vegeta.jpg";
import countHits from "./CountHits";


class Goku extends Component {
    render() {
        const { life, state, name, addOneHit } = this.props;
        const lifeValue =
            this.props.life > 0 ? (
                <td>{life} %</td>
            ) : (
                <td>
                    <span className="badge rounded-pill text-bg-danger">
                        Mort
                    </span>
                </td>
            );
        const Button =
            this.props.life > 0 ? (
                <button
                    onClick={addOneHit}
                    className="btn btn-success m-3"
                >
                    {name} Frappe
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
                <img src={goku} alt="vegeta" />
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
                            <td>{state.hits}</td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default countHits(Goku, 20)
