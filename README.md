# Employee Management System (EMS)

## Project Overview

This Employee Management System (EMS) is a web-based application designed to streamline task and employee management within an organization. It provides separate dashboards for administrators and employees, allowing for efficient task assignment, tracking, and employee oversight.

## Features

### Admin Dashboard

*   **Employee Management:**
    *   Add, edit, and delete employee records.
    *   View a list of all employees with search functionality (by name and email).
    *   View a summary of task counts (new, active, completed, failed) for each employee via a dedicated modal.
*   **Task Management:**
    *   Create and assign tasks to employees.
    *   View a comprehensive list of all tasks across all employees with search functionality (by employee name, task title, and category).
    *   Edit and delete existing tasks.
*   **Persistence:** All changes (employee data, task data) are persisted locally using `localStorage`.
*   **Notifications:** Real-time toast notifications for various actions (add/edit/delete employee, add/edit/delete task).

### Employee Dashboard

*   **Task Overview:** View a summary of their assigned tasks (new, active, completed, failed).
*   **Task List:** View a list of all assigned tasks.
*   **Task Status Update:** Employees can update the status of their tasks (e.g., mark as completed or failed).
*   **Persistence:** Task status changes are persisted locally using `localStorage`.
*   **Notifications:** Real-time toast notifications for task status updates.

### General

*   **User Authentication:** Separate login for Admin and Employees.
*   **Dynamic Content:** All displayed data is dynamic and updates based on user interactions and data changes.
*   **Responsive UI:** Designed with Tailwind CSS for a clean and responsive user interface.

## Tech Stack

*   **Frontend:**
    *   React.js
    *   Tailwind CSS
    *   `react-hot-toast` for notifications
*   **Data Storage:**
    *   `localStorage` (for local persistence - *Note: For a production application, a backend API and database would be used.*)

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ems-main
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will typically open in your browser at `http://localhost:5173` (or another available port).

## Usage

### Admin Login

*   **Email:** `abhipal2330@gmail.com`
*   **Password:** `123`

### Employee Login

Use the email and password of any employee defined in `src/utils/localStorage.jsx` (e.g., `alice@example.com`, `123`).

## Future Enhancements

For a production-ready system, the following enhancements would be crucial:

*   **Backend API & Database:** Replace `localStorage` with a robust backend (e.g., Node.js, Python) and a database (e.g., PostgreSQL, MongoDB) for secure, scalable, and multi-user data management.
*   **More Granular User Roles & Permissions:** Implement a more sophisticated role-based access control system.
*   **Advanced Task Features:** Task dependencies, file attachments, comments, and recurring tasks.
*   **Reporting & Analytics:** Comprehensive reporting tools and data visualization.
*   **Secure Authentication:** Implement JWT or OAuth for enhanced security.
*   **Unit and Integration Tests:** Add automated tests for reliability.