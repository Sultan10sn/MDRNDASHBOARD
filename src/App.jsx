import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Sidebar } from "./components";
import { Charts, HandleReport, Listview, Login } from "./pages";



function App() {



  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <NavBar />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Listview />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/handlereport/:id" element={<HandleReport />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
