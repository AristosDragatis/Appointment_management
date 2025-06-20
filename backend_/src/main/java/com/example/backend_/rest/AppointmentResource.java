package com.example.backend_.rest;

import com.example.backend_.ejb.AppointmentSB;
import com.example.backend_.entity.Appointment;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/appointments")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AppointmentResource {

    @Inject
    private AppointmentSB appointmentSB;

    @POST
    public Response create(Appointment appointment) {
        try {
            appointmentSB.create(appointment);
            return Response.status(Response.Status.CREATED)
                         .entity(appointment)
                         .build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST)
                         .entity("Error creating appointment: " + e.getMessage())
                         .build();
        }
    }

    @GET
    public Response getAll() {
        try {
            List<Appointment> appointments = appointmentSB.getAppointments();
            return Response.ok(appointments).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                         .entity("Error retrieving appointments: " + e.getMessage())
                         .build();
        }
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") Integer id, Appointment appointment) {
        try {
            appointment.setId(id);
            appointmentSB.update(appointment);
            return Response.ok(appointment).build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST)
                         .entity("Error updating appointment: " + e.getMessage())
                         .build();
        }
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Integer id) {
        try {
            appointmentSB.delete(id);
            return Response.noContent().build();
        } catch (Exception e) {
            return Response.status(Response.Status.NOT_FOUND)
                         .entity("Appointment not found or cannot be deleted")
                         .build();
        }
    }

    @GET
    @Path("/{id}")
    public Response getById(@PathParam("id") Integer id) {
        try {
            Appointment appointment = appointmentSB.findById(id);
            if (appointment == null) {
                return Response.status(Response.Status.NOT_FOUND)
                             .entity("Appointment not found")
                             .build();
            }
            return Response.ok(appointment).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                         .entity("Error retrieving appointment: " + e.getMessage())
                         .build();
        }
    }
}