import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddAppointment from './pages/AddAppointment';
import AppointmentsList from './pages/AppointmentsList';
import ServicesList from './pages/ServicesList';
import EditAppointment from './pages/EditAppointment';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AppointmentsList />} />
          <Route path="/appointments/add" element={<AddAppointment/>} />
          <Route path="/services" element={<ServicesList/>} />
          <Route path="/appointments/edit/:id" element={<EditAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
