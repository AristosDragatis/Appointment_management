import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [services, setServices] = useState([]); //  services
  const [professionals, setProfessionals] = useState([]); // professionals


// fetch services and professionals
useEffect(() => {
fetch('http://localhost:8080/backend_/api/services')
  .then(res => res.json())
  .then(data => setServices(data));
fetch('http://localhost:8080/backend_/api/users')
  .then(res => res.json())
  .then(data => setProfessionals(data));
}, []);

  useEffect(() => {
    fetch(`http://localhost:8080/backend_/api/appointments/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => setForm(data))
      .catch(() => setError('Appointment not found'));
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!form) return <div>Loading...</div>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

   const updatedAppointment = {
      ...form,
      service: { id: form.service.id },
      professional: { id: form.professional.id },
      status: form.status
    }; 

    try {
      const res = await fetch(`http://localhost:8080/backend_/api/appointments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAppointment)
      });

      if (!res.ok) throw new Error('Failed to update appointment');
      setSuccess(true);
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError('Failed to update appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Appointment</h2>
      <input
        name="customerName"
        value={form.customerName || ''}
        onChange={handleChange}
        required
        placeholder="Customer Name"
      />
      <input
        name="date"
        type="date"
        value={form.date || ''}
        onChange={handleChange}
        required
        placeholder="Date"
      />
      <input
        name="time"
        type="time"
        value={form.time || ''}
        onChange={handleChange}
        required
        placeholder="Time"
      />
      <select
        name="professionalId"
        value={form.professional?.id || ''}
        onChange={e => {
          const selectedProfessional = professionals.find(p => p.id === Number(e.target.value));
          setForm({ ...form, professional: selectedProfessional });
        }}
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
      <select
        name="serviceId"
        value={form.service?.id || ''}
        onChange={e => {
          const selectedService = services.find(s => s.id === Number(e.target.value));
          setForm({ ...form, service: selectedService });
        }}
        required>
        <option value="">Select service</option>
        {services.map(s => (
          <option key={s.id} value={s.id}>
            {s.serviceName}
          </option>
        ))}
      </select>
      
      <button type="submit">Update</button>
      {success && <div style={{ color: 'green' }}>Appointment updated successfully!</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default EditAppointment;
