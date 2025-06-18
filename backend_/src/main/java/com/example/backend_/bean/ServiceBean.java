package com.example.backend_.bean;

import com.example.backend_.ejb.ServiceSB;
import jakarta.ejb.EJB;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.EntityManager;
import java.util.List;
import com.example.backend_.entity.Service;

@Named("serviceBean")
@RequestScoped
public class ServiceBean {
    private Service service;
    @EJB
    private ServiceSB serviceSB;

    private List<Service> getServices(){
        return serviceSB.findServices();
    }

    public Service getService(){
        return service;
    }
}
