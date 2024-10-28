import { useState } from "react";
import Navbar from "./assets/Component/Navbar";
import Plans from "./assets/Component/Plans";

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="">
      <Navbar toggle={toggle} setToggle={setToggle}></Navbar>
      <Plans></Plans>
    </div>
  );
}

export default App;
