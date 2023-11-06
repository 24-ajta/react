// import logo from './logo.svg';
import './App.css';
// import Greeting from './components/Greeting';
// import Greeting1 from './components/Greeting1';
// import Counter from './components/Counter';
// import Counterfunction from './components/Counter';
// import Login from './components/Login';
// import Onchange from './components/Onchange';
import ParentComponent from './components/Form1';

function App() {
  return (
    <>
    {/* <Greeting name="first"/>
    <Greeting1 name="second"/>
    <Counter/>
    <Counterfunction initialvalue={1}/>
    <Login/>
    <Onchange/> */}
    <ParentComponent/>
    </>
   
  );
}

export default App;
