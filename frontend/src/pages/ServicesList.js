import { useEffect, useState } from 'react';

function ServicesList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/backend_/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Available Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.serviceName} - {service.price}€ ({service.duration} min)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;
