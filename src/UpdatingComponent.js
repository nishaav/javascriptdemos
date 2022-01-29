import React from 'react';

class UpComp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={color:"red"};
    }
    // static getDerivedStateFromProps(props,state)
    // {
    //     return {color:props.value};
    // }
    //user defined method
    shouldComponentUpdate()
    {
        return true;
    }
    
    changeValue=()=>{
        this.setState({color:"blue"});
    }
    

    render()
    {
        return(
        <div>
        <h1>The Value is {this.state.color}</h1>
        <button type="button" onClick={this.changeValue}>CLICK ME</button>
        </div>
        );
    }

}
export default UpComp;