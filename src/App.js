import './App.css';
import React from "react"

function App() {

 const [counter,state] = React.useState(0);

 const changeValue = (value) => {
  state(counter + value);
};
 const doubleValue = () => {
     state(counter*2);
 };


  return (
    <div className="App">
      <div>
     <h2>COUNTER</h2>
     <div>
     <h3 style={counter%2===0?{color:'green'}:{color:'red'}}>{counter}</h3></div>
     <button onClick={()=>{changeValue(+1)}}>INCREMENT</button>
     <button onClick={()=>{changeValue(-1)}}>DECREMENT</button>
     <button onClick={doubleValue}>DOUBLE</button>
     </div>
    </div>
  );
}

export default App;
