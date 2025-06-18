package com.example.backend_.bean;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.EntityManager;

@Named("userBean")
@RequestScoped
public class UserBean {


    @Inject
    private UserBean userBean;

}
