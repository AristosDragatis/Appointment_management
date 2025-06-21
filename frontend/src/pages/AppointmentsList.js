import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/backend_/api/appointments')
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(() => setError('Failed to fetch appointments'));
  }, []);

  return (
    <div>
      <h2>Available Appointments</h2>
      <Link to="/appointments/add">Add Appointment</Link>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!appointments.length ? (
        <div>No appointments found.</div>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>Customer</th>
      <th>Date</th>
      <th>Time</th>
      <th>Professional</th>
      <th>Service</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {appointments.map(a => (
      <tr key={a.id}>
        <td>{a.customerName}</td>
        <td>{a.date}</td>
        <td>{a.time}</td>
        <td>
          {a.professional
            ? `${a.professional.firstName} ${a.professional.lastName}`
            : ''}
        </td>
        <td>{a.service ? a.service.serviceName : ''}</td>
        <td>
          <Link to={`/appointments/edit/${a.id}`}>Edit</Link>
          {' | '}
          <button onClick={() => {
            if (window.confirm('Are you sure you want to delete this appointment?')) {
              fetch(`http://localhost:8080/backend_/api/appointments/${a.id}`, {
                method: 'DELETE'
              })
                .then(res => {
                  if (res.ok) setAppointments(appointments.filter(ap => ap.id !== a.id));
                });
            }
          }}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
  </table> 
      )}
    </div>
  );
}

export default AppointmentsList;
