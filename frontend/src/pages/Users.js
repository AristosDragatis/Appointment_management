import { Link } from 'react-router-dom';

export default function Users() {
  return (
    <div>
      <h2>User Management</h2>
      <Link to="/addappointment" className="btn btn-primary mb-2">Add Appointment</Link>
      <br/>
      <Link to="/showappointment" className="btn btn-primary">Show Appointments</Link>
    </div>
  );
}
