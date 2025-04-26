import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="" style={{ height: '100vh' }}>
        <div className="h-full w-full flex justify-center items-center">
          <div className="scalable-container">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
