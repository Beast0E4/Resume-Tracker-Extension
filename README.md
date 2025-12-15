# Smart Job Application Tracker 🚀

A full-stack product that automatically tracks job applications using a Chrome extension and provides a centralized dashboard to manage and analyze them.

Built using **MERN stack + Chrome Extensions (Manifest V3)**.

---

## 🧠 Problem Statement

Job seekers apply to multiple roles across platforms like LinkedIn, Indeed, etc., but tracking these applications manually is:
- Error-prone
- Time-consuming
- Disorganized

This project solves that by **automatically detecting job applications in the browser** and storing them in a centralized system.

---

## ✨ Features

### 🔌 Chrome Extension
- Detects job application actions on job portals
- Extracts:
  - Company name
  - Job role
  - Job URL
  - Application date
- Stores application data automatically

### 🖥️ Web Dashboard (Client)
- View all applications in one place
- Visual status badges:
  - 🟡 Applied
  - 🔵 Interview
  - 🔴 Rejected
  - 🟢 Offer
- Clean and simple UI built with React

### ⚙️ Backend API
- RESTful API built with Express.js
- MongoDB for persistent storage
- Clean architecture:
  - Routes
  - Controllers
  - Services
- Easily extendable for authentication, analytics, and reminders

---

## 🧱 Tech Stack

### Frontend (Client)
- React (Vite)
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Chrome Extension
- Manifest V3
- Content Scripts
- Chrome Storage API

---

## 📁 Project Structure

```bash
root/
├─ extension/        # Chrome Extension
│  ├─ manifest.json
│  ├─ content.js
│  ├─ popup.html
│  └─ popup.js
│
├─ backend/
│  ├─ index.js
│  ├─ app.js
│  ├─ config/
│  ├─ models/
│  ├─ routes/
│  ├─ controllers/
│  └─ services/
│
├─ client/
│  ├─ src/
│  │  ├─ api/
│  │  ├─ components/
│  │  ├─ pages/
│  │  └─ App.jsx
│  └─ package.json
│
└─ README.md
```

---

## 🚀 Getting Started

### 1️⃣ Backend Setup
```bash
cd backend
npm install
node index.js
```

### Client Setup
```bash
cd client
npm install
npm run dev
```
