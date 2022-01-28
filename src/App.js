//import logo from './logo.svg';
import './App.css';
//functional component
//JSX
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function Mine()
// {
//   return (
//     <div>
//         <h1>Hello World!!</h1>
//         <p className='App'>My Component is {2*2} times better than yours</p>
//     </div>

//   );
// }

function MineUp(props)
{
  return (
    <div>
        <h1>Hello {props.name}!!</h1>
        <p className='App'>My Component is {2*2} times better than yours</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact Us</li>
        </ul>
<img src={props.path} alt="extension not supported"></img>

    </div>

  );
}

export default MineUp;
