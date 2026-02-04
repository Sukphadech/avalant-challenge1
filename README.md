Full-Stack Practical Assignment (Partial Submission)

This project demonstrates a simple full-stack user listing system with server-side pagination and search.
Due to local disk space constraints, a lightweight HTML frontend was used instead of a full React build, while still validating the complete client–server flow.

🧩 Features Implemented
Backend (Node.js + Express)
-REST API for users
-Server-side pagination
-Server-side search (name / email)
-Defensive input handling (query validation)
-CORS enabled
-Robust handling of edge cases (undefined / invalid inputs)

Frontend (HTML only)
-Plain HTML + JavaScript (no npm, no build tools)
-Fetch API for data loading
-Search input (press Enter or click Search)
-Pagination (Prev / Next)
-Displays real backend data

📁 Project Structure
backend/
 ├─ index.js        # Express server
 ├─ users.js        # Mock user data
 └─ package.json

frontend.html       # Lightweight frontend UI


🚀 How to Run
1️⃣ Start Backend
cd backend
npm install
npm run dev


Backend will be available at:
http://localhost:3001

Test API directly:

http://localhost:3001/api/users

2️⃣ Open Frontend

Simply open the file in a browser:

frontend.html


No build step required.

🔍 API Endpoint
GET /api/users

Query Parameters

page (number, default: 1)

pageSize (number, default: 10)

search (string, optional)

sortBy (id | name | email | createdAt)

sortDir (asc | desc)

Response

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

🧠 Design Decisions
Why HTML instead of React?

Due to limited local disk space, installing node_modules for a frontend framework was not feasible.
To avoid blocking progress, a minimal HTML + Fetch implementation was chosen to:

Demonstrate full client–server integration

Validate pagination and search logic

Keep the solution lightweight and functional

This approach still proves understanding of frontend–backend communication without relying on tooling.

⚠️ Limitations

No frontend framework (React/Vue) due to environment constraints

No automated tests included

UI styling kept minimal by design

✅ What This Demonstrates

Understanding of REST APIs

Server-side pagination & filtering

Defensive coding practices

Practical engineering trade-offs

Ability to deliver under constraints

📝 Notes

Partial submission was intentional and aligned with the assignment guideline allowing partial delivery with explanations.
  