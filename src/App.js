import './App.css';
import {useState, useEffect} from "react";

function App() {
   const [activeWindow, setActiveWindow] = useState(false)

    const modulWindow = () => {
       if (activeWindow) {
           return  (<div className="window" >
               <div className="window-content" >
                       <h1>УХАДИ</h1>
                        <input className="input-module"/>
                   <button className="button-module" onClick = {() => setActiveWindow(false)}>close</button>
               </div>
           </div>)
       }
    }
  return (
    <div className="App">
        <button className="button-module" onClick={() => setActiveWindow(true)}>модульное окно</button>
        <div>{modulWindow()}</div>
    </div>
  );
}

export default App;
