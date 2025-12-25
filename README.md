# BeyondChats – Technical Assignment

## 📌 Overview
This project was built as part of the BeyondChats technical assignment.  
It demonstrates a full-stack pipeline involving backend scraping, API design, Node.js processing, and a frontend UI.

The system:
- Scrapes blog articles from BeyondChats
- Stores them in a database via a Laravel backend
- Uses a Node.js service to fetch, enhance, and republish articles
- Displays both original and AI-updated articles in a React frontend

Partial completion and trade-offs were intentionally made to prioritize reliability, clarity, and real-world constraints.

---

## 🧱 Tech Stack
- **Backend:** Laravel (PHP), SQLite
- **Processing Layer:** Node.js, Axios, Cheerio
- **Frontend:** React, Axios
- **Database:** SQLite
- **AI/LLM:** Simulated rewrite logic (pipeline-ready)

---

## 📂 Repository Structure
beyondchats-assignment/
│
├── backend-laravel/ # Laravel backend (APIs + scraping)
├── node-llm-worker/ # Node.js pipeline (search, scrape, rewrite)
├── frontend-react/ # React frontend
└── README.md


---

## 🔄 Data Flow / Architecture

1. **Laravel Backend**
    - Scrapes BeyondChats blog articles
    - Stores them in SQLite database
    - Exposes CRUD APIs (`/api/articles`)

2. **Node.js Worker**
    - Fetches latest article from Laravel API
    - Searches for related articles (DuckDuckGo + fallback)
    - Scrapes external content with error handling
    - Generates an AI-style updated article
    - Publishes updated article back via Laravel API

3. **React Frontend**
    - Fetches articles from Laravel API
    - Displays original and AI-updated articles
    - Differentiates content using visual badges

---

## ⚙️ Local Setup Instructions

### 1️⃣ Backend (Laravel)
```bash
cd backend-laravel
php artisan serve

