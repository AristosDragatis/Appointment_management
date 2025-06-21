import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddAppointment() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    date: '',
    time: '',
    professionalId: '',
    status: '',
    serviceId: ''
  });
  const [services, setServices] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // bring services from backend
  useEffect(() => {
    fetch('http://localhost:8080/backend_/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => setServices([]));
    fetch('http://localhost:8080/backend_/api/users')
      .then(res => res.json())
      .then(data => setProfessionals(data));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const appointment = {
      customerName: form.firstname + ' ' + form.lastname,
      email: form.email,
      date: form.date,
      time: form.time,
      professional: { id: Number(form.professionalId)},
      status: form.status,
      service: { id: Number(form.serviceId) }
    };

    try {
      const res = await fetch('http://localhost:8080/backend_/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment)
      });

      if (!res.ok) throw new Error('Failed to save appointment');
      setSuccess(true);
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError('Failed to set appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Appointment</h2>
      <input name="firstname" placeholder="First name" onChange={handleChange} required />
      <input name="lastname" placeholder="Last name" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <input name="time" type="time" onChange={handleChange} required />
      <select
        name="professionalId"
        value={form.professionalId}
        onChange={handleChange}
        required>
        <option value="">Select professional</option>
        {professionals.map(p => (
          <option key={p.id} value={p.id}>
            {p.firstName} {p.lastName}
          </option>
        ))}
      </select>
      <select
        name="status"
        value={form.status || ''}
        onChange={handleChange}
        required>
        <option value="">Select status</option>
        <option value="PENDING">PENDING</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="CANCELLED">CANCELLED</option>
      </select>
      <select name="serviceId" onChange={handleChange} required>
        <option value="">Select Service</option>
        {services.map(s => (
          <option key={s.id} value={s.id}>{s.serviceName}</option>
        ))}
      </select>
      <button type="submit">Save</button>
      {error && <div style={{color: 'red'}}>{error}</div>}
      {success && <div style={{color: 'green'}}>Added successfuly!</div>}
    </form>
  );
}

export default AddAppointment;
