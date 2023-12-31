import React from "react";
import getData from "../apis/getData";
import { useEffect, useState } from "react";


function Services() {
  const [state, setState] = useState(null);

  const getAsyncData = async () => {
    const result = await getData();
    setState(result);
  };

  useEffect(() => {
    getAsyncData();
  }, []);

  if (state === null) {
    return null;
  } else {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {state.slice(0, 6).map((item) => {
          return <div style={style} className="m-4">
            <img src={item.image} alt="" width={300} height={300} />
            <h3>{item.title}</h3>
            <h4>Price: {item.price}</h4>
          </div>;
        })}
      </div>
    );
  }
}

const style = {
    border: "2px solid black",
    width: "min-content"
}

export default Services;
