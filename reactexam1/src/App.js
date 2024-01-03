import './App.css';
import MyHeader from './MyHeader'; 
import MyFooter from './MyFooter';
import CounterContainer from './CounterContainer';
import Counter from './Counter';

function App() {
  const counterProps = {
    // initialNumber: 100,
    a: 1,
    b: 2, 
    c: 3
  }
  
  return (
    <div className="App">
      <MyHeader />      
            
      <CounterContainer>
        <Counter {...counterProps}/> 
      </CounterContainer>

      <MyFooter />
    </div>
  );
}

export default App;
