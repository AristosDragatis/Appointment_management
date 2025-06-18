package com.example.backend_.ejb;

import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Stateless
public class AppointmentSB {

    @PersistenceContext(unitName = "myPU")
    private EntityManager em;

    public void getAppointments(){
        em.createQuery("SELECT a FROM Appointment a");
    }
}
