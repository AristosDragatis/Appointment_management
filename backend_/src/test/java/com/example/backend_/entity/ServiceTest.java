package com.example.backend_.entity;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class ServiceTest {

    @Test
    public void testService() {
    User user = new User();
    Service service = new Service();
    user.setFirstName("Aris");
    user.setLastName("Dragatis");
    user.setId(1);
    service.setServiceName("Haircut");
    service.setDuration(40);

    service.setProfessional(user);
    assertEquals(1, service.getProfessional().getId());
    assertEquals("Aris", service.getProfessional().getFirstName());
    assertEquals("Dragatis", service.getProfessional().getLastName());
    assertEquals("Haircut", service.getServiceName());
    assertEquals(40, service.getDuration());

    }
}
