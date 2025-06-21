import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Appointments</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/users">Professionals</Link>
            </li>
            <li>
              <Link className='nav-link' to="/services">
              Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
