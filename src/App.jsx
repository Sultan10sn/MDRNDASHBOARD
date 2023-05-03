import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HideSidebar, NavBar, Sidebar } from "./components";
import { Dashboard, HandleReport, Listview, Login } from "./pages";


function App() {

  return (
    <>
      <Router>
        <div className="flex">
          <HideSidebar>
            <Sidebar />
          </HideSidebar>
          <main className="w-full">
            <NavBar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/table" element={<Listview />} />
              <Route path="/handlereport/:id" element={<HandleReport />} />
              <Route path="/login" element={<Login />} />
            </Routes>

          </main>
        </div>
      </Router>
    </>
  )
}

export default App
