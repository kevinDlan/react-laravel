import React,{Component} from "react";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
import FuncPurComp from "./FunctionPureComponent";
import PureComp from "./PureComponent";



export default class Index extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Batman"
      }
    }

     handleNameUpdate = ()=>
     {
            this.setState({
                name: "Spidernam"
            })
     }


    render(){
        console.log("%c Parent Render",'color:blue')
        return (
            <div>
                <p style={{ color: "blue" }}>
                    Parent Render : {this.state.name}
                </p>
                <ClassComponent name={this.state.name} />
                <PureComp name={this.state.name} />
                <FuncPurComp name={this.state.name} />
                <Button handleNameUpdate={this.handleNameUpdate} />
            </div>
        );
    }
}