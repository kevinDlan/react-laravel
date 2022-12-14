import React,{ Component } from "react";
import FirstChild from "./FirstChild";
import MyContext from "./MyContext";



export default class Index extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         user:{
            name:'kevin KONE',
            email:'kevinkone19@gmail.com',
            tel:'+2250777298466'
         }
      }
    }
    render()
    {
        return (
            <MyContext.Provider value={this.state.user}>
                <div>
                    <h1>Parent Component</h1>
                    <FirstChild />
                    
                </div>
            </MyContext.Provider>
        );
    }
}