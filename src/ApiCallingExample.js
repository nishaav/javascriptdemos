import React from 'react';

class Api extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={
        values:[],
        isLoading:false
      };  
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((js)=>{
            this.setState({
                values:js,
                isLoading:true
            })
        })
    }
    render()
    {
        
            if(this.state.isLoading)
            return(
                <div>
                    <h1>API RESPONSE</h1>
                    {this.state.values.map((user)=>(
                        <p> {user.id}  {user.name} {user.username}</p>
                    ))}    
                </div>
            );
            else
            return(
                <p>Loading your data..Please wait!!</p>
            );

    }

}

export default Api;