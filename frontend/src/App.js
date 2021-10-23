import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import React from "react";

function App() {
  let [temp, setTemp] = React.useState("");
  React.useEffect(() => {
    async function get() {
      let hr = await axios.get("/q=tampere");
      let data = await hr.data;
      setTemp(data.main.temp - 273);
    }
    get();
  }, []);

  return <div>{temp}</div>;
}

export default App;
