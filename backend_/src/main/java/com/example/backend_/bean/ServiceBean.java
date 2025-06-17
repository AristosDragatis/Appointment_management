package com.example.backend_.bean;

import com.example.backend_.ejb.ServiceSB;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import jakarta.persistence.PersistenceContext;

@Named("serviceBean")
@RequestScoped
public class ServiceBean {
    @Inject
    private ServiceSB serviceSB;


    @PersistenceContext
    private jakarta.persistence.EntityManager em;

}
