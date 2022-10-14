import React, { useState } from "react";
import { Button } from "@mui/material";
import '../../main.scss';
import Counter from "./Counter";


const App = () => {

   const [ setMax, useSetMax ] = useState(10);
   const valueSetMax = () => useSetMax(5);

   return (
   <>
      <h2 className="title">Hello React!</h2>
      <Counter max={setMax} min={1} key={`1:${setMax}`}/>
      <Button type="button" variant="contained" onClick={ valueSetMax }>Изменить максимальное число</Button>
   </>
   )
}
 
export default App;