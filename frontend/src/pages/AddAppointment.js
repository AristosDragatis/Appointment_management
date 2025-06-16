export default function AddAppointment() {
  return (
    <div className="text-center">
      <h1>Add New Appointment</h1>
      <form>
        <label for="username">Firstname:</label><br></br>
        <input type="text" id="firstname" name="username"></input><br></br>
        <label for="lastname">Lastname:</label><br></br>
        <input type="text" id="lastname" name="lastname"></input><br></br>
        <label for="profession">Profession:</label><br></br>
        <div className="d-flex justify-content-center">
        <select class="form-select form-select-sm w-25 text-center" aria-label=".form-select-sm example">
            <option selected>--Select One--</option>
            <option value="1">Barber</option>
        </select>
        </div>

        <label for="date">Date:</label><br></br>
        <div className="d-flex justify-content-center">
          <input type="date" id="date" name="date" className="w-25"></input>
        </div>
        
        <label for="time">Time:</label><br></br>
        <div className="d-flex justify-content-center">
          <input type="time" id="time" name="time" className="w-25"></input>
        </div>

        <br></br> 
        <button type="button" class="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
