package com.example.backend_.ejb;

import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Stateless
public class UserSB {
    @PersistenceContext(unitName = "myPU")
    private EntityManager em;

    public void getUsers(){
        em.createQuery("SELECT u FROM User u");
    }
}
