import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HideSidebar, NavBar, ScrollToTop, Sidebar } from "./components";
import { ActiveReports, Dashboard, HandleOldReports, HandleReport, Listview, ListviewAll, Login, OldReports, Severity } from "./pages";
import PutRequest from "./pages/PutRequest";




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
                <Route path="/severity" element={<Severity />} />
                <Route path="/activereports" element={<ActiveReports />} />
                <Route path="/oldreports" element={<OldReports />} />
                <Route path="/oldreports/:id" element={<HandleOldReports />} />
                <Route path="/list/:id" element={<Listview />} />
                <Route path="/handlereport/:id" element={<HandleReport />} />
                <Route path="/put" element={<PutRequest />} />
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
