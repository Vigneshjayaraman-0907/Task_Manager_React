# MERN Task Manager

A simple full-stack Task Manager app built with MongoDB, Express, React, and Node.js.

## Structure
```
mern-task-manager/
├── backend/
│   ├── models/Task.js
│   ├── routes/tasks.js
│   ├── server.js
│   ├── .env
│   └── package.json
└── frontend/
    ├── public/index.html
    ├── src/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Prerequisites
- Node.js installed
- MongoDB running locally (or a free MongoDB Atlas connection string)

## Setup

### 1. Backend
```bash
cd backend
npm install
npm run dev
```
This starts the API server at `http://localhost:5000`.

By default it connects to `mongodb://127.0.0.1:27017/taskmanager` (see `.env`).
If you're using MongoDB Atlas, replace `MONGO_URI` in `backend/.env` with your Atlas connection string.

### 2. Frontend
Open a new terminal:
```bash
cd frontend
npm install
npm start
```
This starts the React app at `http://localhost:3000`, which talks to the backend API.

## Features
- Add a task
- Mark a task complete/incomplete (click the task text)
- Delete a task
- Tasks persist in MongoDB

## API Endpoints
| Method | Endpoint          | Description       |
|--------|-------------------|--------------------|
| GET    | /api/tasks        | Get all tasks      |
| POST   | /api/tasks        | Create a new task  |
| PUT    | /api/tasks/:id    | Update a task      |
| DELETE | /api/tasks/:id    | Delete a task       |

## Next steps you could add
- User authentication (JWT)
- Deployment (Render/Railway for backend, Vercel/Netlify for frontend, Atlas for DB)
- Environment-based API URLs (`.env` in React with `REACT_APP_API_URL`)
- Form validation, loading/error states
