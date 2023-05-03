import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavBar, Sidebar } from "./components";
import { Dashboard, HandleReport, Listview, Login } from "./pages";
import { useEffect } from "react";


function App() {

  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/table" element={<Listview />} />
            <Route path="/handlereport/:id" element={<HandleReport />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
