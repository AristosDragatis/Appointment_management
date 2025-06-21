import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/backend_/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setError('Failed to fetch professionals'));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this professional?')) return;
    try {
      const res = await fetch(`http://localhost:8080/backend_/api/users/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error();
      setUsers(users.filter(u => u.id !== id));
    } catch {
      setError('Failed to delete professional');
    }
  };



  return (
    <div>
      <h2>Professionals</h2>
      <Link to="/users/add">Add Professional</Link>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!users.length ? (
        <div>No professionals found.</div>
      ) : (
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>
                <Link to={`/users/edit/${u.id}`}>Edit</Link>
                {' | '}
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}

export default UsersList;