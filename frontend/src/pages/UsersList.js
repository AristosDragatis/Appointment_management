import { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/backend_/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setError('Failed to fetch professionals'));
  }, []);


  return (
    <div>
      <h2>Professionals</h2>
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
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}

export default UsersList;