package com.example.backend_.bean;

import com.example.backend_.ejb.AppointmentSB;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;

@Named("appointmentBean")
@RequestScoped
public class AppointmentBean {
    @Inject
    private AppointmentSB appointmentSB;


}
