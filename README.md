# Appointment Management System

A web application that simulates an appointment management system for barbershop owners, allowing them to manage customer appointments through basic operations such as creating, editing, and deleting appointments.

---

## Features

- Add new appointments
- Edit/update existing appointments
- Delete appointments
- View list of scheduled appointments

---

## Technologies Used

### Backend
- Java EE (Jakarta EE) 
- EJB (Stateless Session Beans)
- JPA ( Java Persistence API )
- PostgreSQL | jdbc ( postgresql-42.7.6.jar )
- Payara Server Version 6.2025.6

### Frontend
- React.js
- React Router
- Fetch API

---

## Installation & Run

### Prerequisites
- Java 11+
    JDK (java version "11.0.23")
- PostgreSQL
- Payara or any Jakarta EE-compliant server
- React.js (frontend)

### Backend
1. Import backend in IntelliJ or Visual Studio Code.
2. Configure `persistence.xml` with your PostgreSQL credentials
3. Deploy on Payara Server

### Frontend
```bash
cd frontend
npm install
npm start
