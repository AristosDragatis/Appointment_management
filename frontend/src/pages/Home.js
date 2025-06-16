import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="text-center">
      <h1>Welcome To Appointment Manager</h1>
      <Link to="/users" className="btn btn-primary">Users</Link>
    </div>
  );
}

