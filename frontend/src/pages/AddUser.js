import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('http://localhost:8080/backend_/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed to add professional');
      setSuccess(true);
      setTimeout(() => navigate('/users'), 1000);
    } catch {
      setError('Failed to add professional');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Professional</h2>
      <input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        required
        placeholder="Firstname"
      />
      <input
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        required
        placeholder="Lastname"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Email"
        type="email"
      />
      <button type="submit">Save</button>
      {success && <div style={{ color: 'green' }}>Professional added successfully!</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default AddUser;