import React,{Component} from "react";


const countHits = (WrappedCompnent, power)=>
{
    class CountHits extends Component {
        state = 
        {
            hits: 0,
        };

        addOne = () => {
            this.setState((prevState) => {
                return {
                    hits: prevState.hits + 1,
                };
            });
        };

        componentDidUpdate(prevProps, prevState) 
        {
            if(this.state !== prevState)
            {
                const compName = WrappedCompnent.name;
                this.props.reduceHandle(compName, power);
            }
        }

        render() 
        {
            return <WrappedCompnent addOneHit={this.addOne} state={this.state} {...this.props} />;
        }
    }

    return CountHits;
}



export default countHits;