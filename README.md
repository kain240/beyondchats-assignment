# BeyondChats – Technical Assignment

## 📌 Overview
This project was built as part of the BeyondChats technical assignment.  
It demonstrates a complete full-stack pipeline involving backend scraping, API development, Node.js processing, and a React frontend.

The system:
- Scrapes blog articles from the BeyondChats website
- Stores them using a Laravel backend and SQLite database
- Uses a Node.js worker to enhance articles using an AI-style pipeline
- Displays both original and updated articles in a React frontend

The focus of this assignment was on **system design, reliability, and real-world engineering trade-offs** rather than perfect content generation.


---

## 🧱 Tech Stack
- **Backend:** Laravel (PHP)
- **Database:** SQLite
- **Processing Layer:** Node.js, Axios, Cheerio
- **Frontend:** React, Axios
- **AI/LLM:** Simulated rewrite logic (pipeline-ready for real LLMs)

---

## 📂 Repository Structure
- **|** 
- **|--** backend-laravel/ # Laravel backend (scraping + CRUD APIs)
- **|--** node-llm-worker/ # Node.js pipeline (search, scrape, rewrite)
- **|--** frontend-react/ # React frontend
- **|--** README.md

---

## 🔄 Architecture & Data Flow

1. **Laravel Backend**
   - Scrapes blog articles from BeyondChats
   - Stores articles in SQLite database
   - Exposes REST APIs for article CRUD operations

2. **Node.js Worker**
   - Fetches the latest article from Laravel API
   - Searches for related articles (DuckDuckGo + fallback strategy)
   - Scrapes external reference articles with graceful error handling
   - Generates an AI-assisted updated article
   - Publishes the updated article back to Laravel via API

3. **React Frontend**
   - Fetches articles from Laravel API
   - Displays original and AI-updated articles
   - Differentiates articles using visual badges

---

## ⚙️ Local Setup Instructions

### 1️⃣ Backend (Laravel)
```bash
cd backend-laravel
php artisan serve
```

### 2️⃣ Node.js Worker
```bash
cd node-llm-worker
node index.js
```

### 3️⃣ Frontend (React)
```bashcd 
frontend-react
npm start
```