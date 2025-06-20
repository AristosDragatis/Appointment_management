import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/backend_/api/appointments')
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => console.error(err));
  }, []);
  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure?")) return;

  await fetch(`http://localhost:8080/backend_/api/appointments/${id}`, {
    method: 'DELETE'
  });

  setAppointments(appointments.filter((a) => a.id !== id));
};


  return (
    <div>
      <h1>Appointments</h1>
      <Link to="/appointments/add">Add New</Link><br></br>
      <Link to="/services">Services</Link>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            {a.customerName} | {a.date} | {a.time} | {a.service?.serviceName}
            {' '}
            <Link to={`/appointments/edit/${a.id}`}>Edit</Link>
            {' '}
            <button onClick={() => handleDelete(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsList;
