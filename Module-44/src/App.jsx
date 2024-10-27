import { useState } from "react";
import Navbar from "./assets/Component/Navbar";

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="">
      <Navbar toggle={toggle} setToggle={setToggle}></Navbar>
    </div>
  );
}

export default App;
