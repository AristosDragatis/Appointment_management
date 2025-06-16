import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import NavBar from './components/NavBar';
import AddAppointment from './pages/AddAppointment';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/AddAppointment" element={<AddAppointment/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
