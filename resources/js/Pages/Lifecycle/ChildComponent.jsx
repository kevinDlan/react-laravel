import React,{Component, Fragment} from "react";



export default class ChildComponent extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      console.log("I'am in child Constructor");
    }
    
    render()
    {
        console.log("I'am in child render");
        return (
            <Fragment>
                {console.log("Child DOM updating")}
                <div>
                    <p>Hello Child Component</p>
                </div>
            </Fragment>
        )
    }
}