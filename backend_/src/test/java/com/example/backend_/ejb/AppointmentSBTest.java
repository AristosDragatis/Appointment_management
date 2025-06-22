package com.example.backend_.ejb;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import com.example.backend_.entity.Appointment;
import com.example.backend_.entity.Service;
import com.example.backend_.entity.User;

public class AppointmentSBTest {
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
