package com.example.backend_.entity;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class AppointmentTest {
    @Test
    void create(){
        Appointment appointment = new Appointment(); // new object appointment
        Service service = new Service(); // new object service
        User user = new User(); // new object user
            user.setFirstName("Aris");
            user.setLastName("Dragatis");
            service.setServiceName("Haircut");
            service.setDuration(40);
            appointment.setService(service);
            appointment.setProfessional(user);

            assertEquals("Haircut", appointment.getService().getServiceName());
            assertEquals(40, appointment.getService().getDuration());
            assertEquals("Aris", appointment.getProfessional().getFirstName());
            assertEquals("Dragatis", appointment.getProfessional().getLastName());
    }
}
