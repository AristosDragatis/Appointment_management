package com.example.backend_.rest;

import com.example.backend_.ejb.UserSB;
import com.example.backend_.entity.User;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @Inject
    private UserSB userSB;

    @GET
    public List<User> getAll() {
        return userSB.getUsers();
    }

    @GET
    @Path("/{id}")
    public User getById(@PathParam("id") Long id) {
        return userSB.getUser(id);
    }

    @POST
    public Response create(User user) {
        userSB.create(user);
        return Response.status(Response.Status.CREATED).build();
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") Integer id, User user) {
        user.setId(id);
        userSB.update(user);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        userSB.delete(id);
        return Response.noContent().build();
    }
}