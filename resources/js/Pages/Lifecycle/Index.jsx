import React,{Component, Fragment} from "react";
import ChildComponent from "./ChildComponent";



export default class Index extends Component
{

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Toto',
         step:1
      };

      console.log(`Step : ${this.state.step}, I'am in constructor `);

    };

    componentDidMount() 
    {
        console.log(`Step : ${this.state.step}, I'am in componentDidMount `);
    }
    

    render()
    {
        console.log(`Step : ${this.state.step}, I'am in render `);
        return (
            <Fragment>
                {console.log(`Step : ${this.state.step}, I'am updating DOM`)}
                <div>Welcome to react Lifecycle</div>
                <p>Loading : {this.state.step}</p>
                <p>Name : {this.state.name}</p>
                <ChildComponent/>
            </Fragment>
        )
    }
}