package login_system;

import login_system.dto.Patient;
import login_system.dto.UserStore;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Get login credentials from form
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Validate credentials
        Patient patient = UserStore.getPatient(username, password);

        if (patient != null) {
            // Create session and store user details
            HttpSession session = request.getSession();
            session.setAttribute("username", patient.getUsername());
            session.setAttribute("patient", patient);

            // Redirect to dashboard
            response.sendRedirect("dashboard.jsp");
        } else {
            // Show error message on login page
            request.setAttribute("error", "Invalid username or password.");
            request.getRequestDispatcher("login.jsp").forward(request, response);
        }
    }
}
