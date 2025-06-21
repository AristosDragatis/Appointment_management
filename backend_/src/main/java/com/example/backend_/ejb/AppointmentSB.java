package com.example.backend_.ejb;

import com.example.backend_.entity.Appointment;
import com.example.backend_.entity.Service;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class AppointmentSB {
    private Service service;

    @PersistenceContext(unitName = "myPU")
    private EntityManager em;

    // show all appointments
    public List<Appointment> getAppointments(){
        return em.createQuery("SELECT a FROM Appointment a", Appointment.class).getResultList();
    }

    // create an appointment
    public void create(Appointment a){
        em.persist(a);
    }

    // update an appointment
    public void update(Appointment a){
        em.merge(a);
    }

    // delete an appointment
    public void delete(Integer id){
        Appointment a = em.find(Appointment.class, id);
        if(a != null){
            em.remove(a);
        }
    }

    public Appointment findById(Integer id) {
        return em.find(Appointment.class, id);
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }
}
