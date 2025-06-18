package com.example.backend_;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import com.example.backend_.rest.ServiceResource;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/api")
public class HelloApplication extends Application {
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<>();
        classes.add(ServiceResource.class);
        return classes;
    }
}