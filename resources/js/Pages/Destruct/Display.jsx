import React, { Component } from 'react';
import Singer from './Singer';



export default class Display extends Component{
 render()
    {
        return (
            <div>
                <h1>List Of Singer</h1>
                <Singer name="Dj Arafat" age="33" />
                <Singer name="Jimy Hendrix" age="27" />
                <Singer name="David Gilmour" age="73" />
                <Singer name="Carlos Santana" age="73" />
            </div>
        );
    }

}
