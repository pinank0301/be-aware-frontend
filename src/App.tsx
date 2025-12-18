import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "@/pages/Home"
import { Report } from "@/pages/Report"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
