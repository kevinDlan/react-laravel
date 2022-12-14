import React, { Component } from "react";
import Goku from "./Components/Goku";
import Vegeta from "./Components/Vegeta";


export default class Index extends Component
{

    constructor(props) {
      super(props)
    
      this.state = {
         vegeta:100,
         goku:100
      }
    }

    reduceLife = (params, power)=>
    {
        if(params === "Goku")
        {
            this.setState({
                vegeta: this.state.vegeta - power
            })
        }else{
            this.setState({
                goku: this.state.goku - power,
            });
        }
    }
    
    render(){
        return (
            <div className="container text-center">
                <h1 className="fw-bold">Goku Vs Végéta</h1>
                <hr />
                <div className="row">
                    <Vegeta life={this.state.vegeta} name="Végeta" reduceHandle={this.reduceLife}/>
                    <Goku life={this.state.goku} name="Goku" reduceHandle={this.reduceLife}/>
                </div>
            </div>
        )
    }
}