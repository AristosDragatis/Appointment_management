import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="text-center">
      <h2>Welcome To Appointment Manager</h2>
      <Link to="/users" className="btn btn-primary">Open</Link>
    </div>
  );
}

