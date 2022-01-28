import './App.css';

//Component inside another component

function Mine()
{
  return (
    <div>
        <h1>Hello World!!</h1>
        <p className='App'>My Component is {2*2} times better than yours</p>
    </div>

  );
}
function Tag()
{
    return(
        <div>
            <h1 className='App'>My Heading Sample</h1>
            <Mine></Mine>
        </div>
    );
}

export default Tag;



