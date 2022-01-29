import React from 'react';

class MyComp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={name:"Mukesh"};
    }
    // static getDerivedStateFromProps(props,state)
    // {
    //     return {name:props.uname};
    // }

    render()
    {
        return (
            <div>
                <h1>The value is {this.state.name}</h1>
            </div>

        );
    }

    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({name:"Preeti"})
        },2000);
    }
}

export default MyComp;
