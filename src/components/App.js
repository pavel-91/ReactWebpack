import React from "react";
import '../../main.scss';
import Counter from "./Counter";


const App = () => {
   return (
   <>
      <h2 className="title">Hello React!</h2>
      <Counter max={10} min={1}/>
   </>
   )
}
 
export default App;