import React,{PureComponent} from "react";


export default class PureComp extends PureComponent
{
    render()
    {
        console.log("%c PureComponent render", "color:green");
        return (
            <div>
                <div>
                    <p style={{ color: "green" }}>Pure Component Render :</p>
                    {this.props.name}
                </div>
            </div>
        );
    }
}