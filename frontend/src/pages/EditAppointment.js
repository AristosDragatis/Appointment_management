import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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

    const updatedAppointment = {
      ...form,
      service: typeof form.service === 'object'
        ? form.service
        : { serviceName: form.service }
    };

    try {
      const res = await fetch(`http://localhost:8080/backend_/api/appointments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedAppointment)
      });

      if (!res.ok) throw new Error('Failed to update appointment');
      setSuccess(true);
      setTimeout(() => navigate('/appointments'), 1000);
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
        name="email"
        value={form.email || ''}
        onChange={handleChange}
        required
        placeholder="Email"
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
      <input
        name="service"
        value={typeof form.service === 'object' ? form.service.serviceName : form.service || ''}
        onChange={handleChange}
        required
        placeholder="Service"
      />
      <button type="submit">Update</button>
      {success && <div style={{ color: 'green' }}>Appointment updated successfully!</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default EditAppointment;
