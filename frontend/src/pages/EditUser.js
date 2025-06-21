import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const numericId = Number(id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/backend_/api/users/${numericId}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => setForm({
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        email: data.email || ''
      }))
      .catch(() => setError('User not found'));
  }, [numericId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const res = await fetch(`http://localhost:8080/backend_/api/users/${numericId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed to update user');
      setSuccess(true);
      setTimeout(() => navigate('/users'), 1000);
    } catch {
      setError('Failed to update user');
    }
  };

  if (error) return <div>{error}</div>;
  if (!form) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Professional</h2>
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
      <button type="submit">Update</button>
      {success && <div style={{ color: 'green' }}>Professional updated successfully!</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default EditUser;