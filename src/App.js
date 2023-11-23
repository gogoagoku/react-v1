
import './App.css';
import MyFirst from './MyFirst'
import Button from 'react-bootstrap/Button';
import BasicExample from './BasicExample';
import ListExample from './ListExample';
import TextExample from './TextExample'
function App() {
  
  return (
    
    <div className="App">
      <BasicExample />
      <ListExample/>
      <header className="App-header">
        <br/>
        <br/>
        <TextExample />
        <br/>
        <TextExample />
        <br/>
        <TextExample/>
        <br/>  
        <MyFirst />
        
         <Button>click me</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
