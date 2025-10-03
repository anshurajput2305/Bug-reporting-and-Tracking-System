📌 AI Resume Job Recommendation System
🚀 Project Overview
This project is an AI-powered Resume Job Recommendation System that analyzes resumes, extracts key skills, and recommends the most relevant job roles. It also includes a chatbot assistant to provide insights such as missing skills and career suggestions.

The system is divided into two parts:

Backend: Python (FastAPI/Flask) with NLP/ML for resume parsing and job matching.

Frontend: React.js for user interface (resume upload, job recommendations, chatbot).

⚙️ Features
📄 Resume Upload: Upload PDF/DOCX resumes.

🔍 Resume Parsing: Extract skills, education, and experience.

🤝 Job Matching: Compare extracted resume data with job dataset.

📊 Job Recommendation: Display top matching jobs with a percentage match score.

🤖 Chatbot Assistant: Answer user queries about job matches and skill gaps.

🛠️ Tech Stack
Frontend: React.js

Backend: Python (FastAPI or Flask)

NLP/AI: spaCy, HuggingFace Transformers, scikit-learn

Database: PostgreSQL / MongoDB (for storing resumes & jobs)

Other Tools: pdfminer, python-docx (for resume text extraction)

📂 Project Structure
bash


Copy code

AI-Resume-Job-Recommender/
│
├── backend/
│   ├── app.py                # Main backend entry (FastAPI/Flask)
│   ├── resume_parser.py      # Resume text & skill extraction
│   ├── job_matcher.py        # Job matching logic
│   ├── models.py             # ML/NLP models
│   ├── database.py           # DB connection
│   ├── chatbot.py            # Chatbot logic
│   ├── utils.py              # Helper functions
│   ├── requirements.txt      # Python dependencies
│   └── data/
│       └── jobs.json         # Sample job dataset
│
├── frontend/
│   ├── src/
│   │   ├── App.js            # Main React app
│   │   ├── components/
│   │   │   ├── UploadResume.js
│   │   │   ├── JobResults.js
│   │   │   └── Chatbot.js
│   │   └── services/api.js   # API calls to backend
│   └── package.json          # React dependencies
│
└── README.md                 # Project documentation


🔌 API Endpoints
POST /uploadResume → Upload resume file and extract text.

GET /matchJobs → Return top matching jobs with score.

POST /chatbot → Query chatbot with a question.

🧑‍🤝‍🧑 Team Roles
anubhav (Backend/Frontend & AI)

anshu rajput (Backend/Frontend & UI)

🛠️ Installation & Setup
1️⃣ Backend
bash
Copy code
cd backend
pip install -r requirements.txt
python app.py
2️⃣ Frontend
bash
Copy code
cd frontend
npm install
npm start
Backend runs on http://localhost:5000
Frontend runs on http://localhost:3000

📅 Timeline (Est. 7 Days)
Day 1: Project setup (backend & frontend).

Day 2: Resume parsing module.

Day 3: Job dataset & matching logic.

Day 4: API integration.

Day 5: Chatbot implementation.

Day 6: Testing & debugging.

Day 7: GitHub integration & documentation.

✅ Future Enhancements
🔹 Live job fetching via LinkedIn/Indeed APIs.

🔹 Advanced career guidance using LLMs.

🔹 Skill gap visualization dashboards.