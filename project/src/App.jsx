// import "../src/main/App.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "../src/components/Currencies";
import Main from "../src/components/Main";
import Price from "../src/pages/Price";

export default function App () {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>
      </Routes>
    </div>
  );
}