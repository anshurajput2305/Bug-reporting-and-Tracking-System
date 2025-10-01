# Bug-reporting-and-Tracking-System
A web-based Bug Reporting and Tracking System that allows users to report bugs, while developers and managers can track, assign, and resolve them with analytics and dashboards for better collaboration.

📌 Project Overview

The Bug Reporting and Tracking System is a web-based platform that allows users (testers, developers, clients) to report software bugs, while project managers and developers can track, assign, and resolve them efficiently.
It improves collaboration, ensures transparency, and speeds up software delivery.

🚀 Features
👤 User (Tester/Client/Employee)

Register/Login

Report bugs with title, description, severity, priority, and attachments

Track bug status updates

Comment on issues

👨‍💼 Admin / Project Manager

View and verify reported bugs

Assign bugs to developers

Change status (New → Open → In Progress → Resolved → Closed)

Generate bug reports and statistics

👨‍💻 Developer

View assigned bugs

Update progress and resolution notes

Change bug status (In Progress → Resolved)

📊 Analytics Dashboard

Number of open/closed bugs

Average resolution time

Severity-based bug charts

Module-wise bug distribution

🛠️ Tech Stack
Layer	Technology Used
Frontend	React.js / Angular / Vue.js
Backend	Node.js (Express) / Python (Django/Flask) / Java (Spring Boot)
Database	MySQL / PostgreSQL / MongoDB
Auth	JWT / OAuth2
File Upload	Local / Cloud (for screenshots)
Charts	Chart.js / Recharts
📂 Project Structure
Bug-Reporting-System/
├── backend/         # Server-side code
├── frontend/        # Client-side code
├── docs/            # Documentation & reports
├── presentation/    # PPT files
├── tests/           # Postman / test cases
├── README.md
└── demo.mp4         # Optional demo video

⚙️ Installation
1️⃣ Clone Repository
git clone https://github.com/YourUsername/Bug-Reporting-System.git
cd Bug-Reporting-System

2️⃣ Setup Backend
cd backend
npm install         # if Node.js
npm start


(or for Django)

pip install -r requirements.txt
python manage.py runserver

3️⃣ Setup Frontend
cd frontend
npm install
npm start

4️⃣ Database Setup

Import bugtracker.sql into MySQL/PostgreSQL.

Update DB config in backend/src/config/db.js.

<!-- 📸 Screenshots

(Add screenshots here, e.g., login page, bug reporting form, dashboard) -->

Login Page


Bug Reporting Form


Dashboard


📊 Sample Analytics

Open vs Closed Bugs

Average Resolution Time

Severity-based Distribution

🧪 Testing

Postman Collection: tests/API_Testing.postman.json

Unit Tests: inside tests/

<!-- 📽️ Demo Video (Optional)

Watch Demo -->

👥 Team Members

Name 1 – Role (Backend)

Name 2 – Role (Frontend)

Name 3 – Role (Database & Testing)

📄 License

This project is for educational purposes only.

👥 Team Members

anshu rajput – Frontend & UI Design (React/Angular/Vue)

anubhav – Backend, Database & Deployment (Node/Django/Spring + SQL)