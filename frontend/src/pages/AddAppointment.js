import { Link } from 'react-router-dom';
export default function AddAppointment() {
  return (
    <div className="text-center">
      <h1>Add New Appointment</h1>
      <form>
        <label for="username">Firstname:</label><br></br>
        <input type="text" id="firstname" name="username" placeholder='e.g. John' required></input><br></br>
        <label for="lastname">Lastname:</label><br></br>
        <input type="text" id="lastname" name="lastname" placeholder='e.g. Smith' required></input><br></br>
        <label htmlFor="email">Email:</label><br/>
        <div className="d-flex justify-content-center">
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-25 form-control"
            placeholder='someone@example.com'
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required 
          />
        </div>
        <label for="profession">Service Name:</label><br></br>
        <div className="d-flex justify-content-center">
        <select class="form-select form-select-sm w-25 text-center" aria-label=".form-select-sm example">
            <option selected>--Select One--</option>
            <option value="1">Haircut</option>
            <option value="2">Haircut/Beard</option>
        </select>
        </div>

        <label for="date">Date:</label><br></br>
        <div className="d-flex justify-content-center">
          <input type="date" id="date" name="date" className="w-25" required></input>
        </div>
        
        <label for="time">Time:</label><br></br>
        <div className="d-flex justify-content-center">
          <input type="time" id="time" name="time" className="w-25 form-control" required></input>
        </div>

        <br></br> 
        <button type="button" class="btn btn-success">Submit</button>
      </form>
      <br></br>
      <Link to="/users" className="btn btn-secondary btn-sm">Back</Link>
    </div>
  );
}
