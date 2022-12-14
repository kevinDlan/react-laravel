import React, { Component } from "react";


export default class ClassComponent extends Component
{
    render(){
        console.log("%c Class Component render", "color:red");
        return (
            <div>
                <p style={{color:'red'}}>Normal Class Render :</p> {this.props.name}
            </div>
        )
    }
}