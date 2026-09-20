import "./App.css";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import StudentDirectory from "./Students/StudentDirectory"
export default function App() {
  return (

    <div className="app">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <StudentDirectory />
      </div>
      <Footer />
    </div>
  )
}