import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listview from "./pages/Listview";
import { NavBar } from "./components";
import Login from "./pages/Login";


function App() {

  return (
    <div >
      <NavBar />
      <Listview />
    </div>
  )
}

export default App
