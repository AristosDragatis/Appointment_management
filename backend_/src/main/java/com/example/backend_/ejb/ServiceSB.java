package com.example.backend_.ejb;

import com.example.backend_.entity.Service;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class ServiceSB {

    @PersistenceContext(unitName = "myPU")
    private EntityManager em;

    public List<Service> findServices(){
        return em.createQuery("SELECT s FROM Service s", Service.class).getResultList();
    }

    public Service update(Service service){
        return em.merge(service);
    }

    public void delete(Integer id){
        Service service = em.find(Service.class, id);
        if(service != null){
            em.remove(service);
        }
    }

    public Service save(Service service){
        em.persist(service);
        return service;
    }
}
