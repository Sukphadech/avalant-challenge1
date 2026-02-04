# 🚀 Full-Stack Practical Assignment (Partial Submission)

This project demonstrates a **simple full-stack user listing system** with **server-side pagination and search**.

Due to **local disk space constraints**, a **lightweight HTML + JavaScript frontend** was used instead of a full React build, while still validating the **complete client–server flow**.

---

## ✨ Features

### 🔧 Backend (Node.js + Express)

* REST API for user listing
* Server-side pagination
* Server-side search (name / email)
* Defensive input handling (query validation)
* CORS enabled
* Robust handling of edge cases (undefined / invalid inputs)

### 🎨 Frontend (HTML only)

* Plain HTML + Vanilla JavaScript
* No npm, no build tools required
* Fetch API for data loading
* Search input (Enter key or Search button)
* Pagination controls (Previous / Next)
* Displays real backend data

---

## 📁 Project Structure

```
backend/
├─ index.js        # Express server
├─ users.js        # Mock user data
└─ package.json

frontend.html      # Lightweight frontend UI
```

---

## ▶️ How to Run

### 1️⃣ Start Backend Server

```bash
cd backend
npm install
npm run dev
```

Backend will be available at:

```
http://localhost:3001
```

---

### 2️⃣ Test API Directly

```
http://localhost:3001/api/users
```

---

### 3️⃣ Open Frontend

Simply open the following file in a browser:

```
frontend.html
```

No build step required.

---

## 🔍 API Endpoint

### `GET /api/users`

#### Query Parameters

| Name     | Type   | Default | Description                   |
| -------- | ------ | ------- | ----------------------------- |
| page     | number | 1       | Page number                   |
| pageSize | number | 10      | Items per page                |
| search   | string | —       | Search by name or email       |
| sortBy   | string | id      | id | name | email | createdAt |
| sortDir  | string | asc     | asc | desc                    |

---

### Response Example

```json
{
  "items": [
    {
      "id": 2,
      "name": "Bob Johnson",
      "email": "bob.johnson@test.com"
    }
  ],
  "total": 40,
  "page": 1,
  "pageSize": 10
}
```

---

## 🧠 Design Decisions

### Why HTML instead of React?

Due to **limited local disk space**, installing frontend dependencies (`node_modules`) was not feasible.

To avoid blocking progress, a **minimal HTML + Fetch API implementation** was chosen to:

* Demonstrate full client–server integration
* Validate pagination and search logic
* Keep the solution lightweight and functional

This approach still proves understanding of **frontend–backend communication** without relying on heavy tooling.

---

## ⚠️ Limitations

* No frontend framework (React / Vue) due to environment constraints
* No automated tests included
* UI styling kept minimal by design

---

## ✅ What This Demonstrates

* Understanding of RESTful APIs
* Server-side pagination and filtering
* Defensive coding practices
* Practical engineering trade-offs
* Ability to deliver under constraints

---

## 📝 Notes

This is a **partial submission**, intentionally aligned with the assignment guideline allowing partial delivery with clear technical explanations.

---
