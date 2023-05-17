import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HideSidebar, NavBar, ScrollToTop, Sidebar } from "./components";
import { Dashboard, HandleReport, Listview, ListviewAll, Login } from "./pages";



function App() {

  return (
    <div className="bg-gray-50">
      <Router>
        <ScrollToTop>
          <div className="flex">
            <HideSidebar>
              <Sidebar />
            </HideSidebar>
            <main className="w-full">
              <NavBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/list" element={<ListviewAll />} />
                <Route path="/list/:id" element={<Listview />} />
                <Route path="/handlereport/:id" element={<HandleReport />} />
                <Route path="/login" element={<Login />} />
              </Routes>

            </main>
          </div>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
