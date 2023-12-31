import React from "react";
import { useContext } from "react";
import Context from "../context/Context";

function Home() {
  const data = useContext(Context);
  return (
    <div>
      <h1>THis is Home Page...</h1>
      <h3>
        {data.state.name} S/O {data.state.fname}
      </h3>
      <button
        onClick={() => {
          const name = prompt("Enter Name");
          const fname = prompt("Enter Father's Name");
          data.update(name, fname);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default Home;
