package com.example.backend_.rest;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import com.example.backend_.ejb.ServiceSB;
import com.example.backend_.entity.Service;
import java.util.List;

@Path("/services")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ServiceResource {
    
    @Inject
    private ServiceSB serviceSB;
    
    @GET
    public Response getAllServices() {
        List<Service> services = serviceSB.findServices();
        return Response.ok(services).build();
    }
}