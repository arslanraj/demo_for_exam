import Context from "./Context";
import { useState } from "react";

const State = (props) => {
    const [state, setState] = useState({
        name: "Arslan",
        fname: "Ashraf"
      });
  

  const update = (name, fname)=>{
    setState({
        name: name,
        fname: fname,
      }); 
  }

  return <Context.Provider value={{state, update}}>{props.children}</Context.Provider>;
};

export default State;
