package com.example.backend_.entity;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserTest {


    @Test
    void create(){
        Appointment appointment = new Appointment();
        Service service = new Service();
        User user = new User();


        user.setFirstName("Aris");
        user.setLastName("Dragatis");
        String fullName = user.getFirstName() + " " + user.getLastName();
        user.setEmail("example@example.com");
        assertEquals("Aris Dragatis", fullName);
        assertEquals("example@example.com" , user.getEmail());
    }
}
