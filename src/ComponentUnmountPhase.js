import React from 'react';
class UnComp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={appear:true};
    }


    removePara=()=>
    {
        this.setState({appear:false});
    }
    render()
    {
        let para;
        if(this.state.appear)
        {
            para=<Tag></Tag>;
        };
return(
    <div>
        {para}
        <button type="button" onClick={this.removePara}>CLICK ME</button>
    </div>
)
    }
}
class Tag extends React.Component
{
    componentWillUnmount()
    {
        alert("Your Component will unmount from UI");

    }
    render()
    {
        return(
            <p>Heyy...Working with unmountimg example!!</p>
        )
    }
}

export default UnComp;