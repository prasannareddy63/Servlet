package login_system;

import login_system.dto.Patient;
import login_system.dto.UserStore;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/register")
public class RegistrationServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // Retrieve form parameters
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String fullName = request.getParameter("fullName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String address = request.getParameter("address");
        String age = request.getParameter("age");
        String gender = request.getParameter("gender");
        String bloodGroup = request.getParameter("bloodGroup");
        String emergencyContact = request.getParameter("emergencyContact");
        String medicalHistory = request.getParameter("medicalHistory");

        // Create new Patient object
        Patient newPatient = new Patient(username, password, fullName, email, phone, address, age, gender, bloodGroup, emergencyContact, medicalHistory);

        // Register patient
        if (UserStore.registerPatient(newPatient)) {
            request.setAttribute("message", "Registration successful! You can now log in.");
            request.getRequestDispatcher("login.jsp").forward(request, response);
        } else {
            request.setAttribute("error", "Username already exists. Please choose another one.");
            request.getRequestDispatcher("register.jsp").forward(request, response);
        }
    }
}
