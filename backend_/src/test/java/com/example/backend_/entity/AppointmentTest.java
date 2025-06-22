package com.example.backend_.entity;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class AppointmentTest {
    @Test
    void create(){
        Appointment appointment = new Appointment();
        Service service = new Service();
        User user = new User();
            user.setFirstName("Aris");
            user.setLastName("Dragatis");
            service.setServiceName("Haircut");
            appointment.setService(service);
            appointment.setProfessional(user);

            assertEquals("Haircut", appointment.getService().getServiceName());
            assertEquals("Aris", appointment.getProfessional().getFirstName());
            assertEquals("Dragatis", appointment.getProfessional().getLastName());
    }

}
