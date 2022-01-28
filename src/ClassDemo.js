//class component
import React from 'react';
//dynamic behaviour 
class Dummy extends React.Component
{
    render()
    {
        return(
        <div>
           <h1>{this.props.name}</h1> 
        <h1>Hii Working with a class component</h1>
        <h2>Hii Working with a class component</h2>
        <h3>Hii Working with a class component</h3>
        </div>
        );
    }
    
}
export default Dummy;