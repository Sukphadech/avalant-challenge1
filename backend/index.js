const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

const users = require("./users");

app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
  let {
    page = 1,
    pageSize = 10,
    search = "",
    sortBy = "id",
    sortDir = "asc"
  } = req.query;

  // ===== pagination (safe) =====
  page = parseInt(page, 10);
  pageSize = parseInt(pageSize, 10);

  page = Number.isNaN(page) || page < 1 ? 1 : page;
  pageSize = Number.isNaN(pageSize) || pageSize < 1 ? 10 : pageSize;

  // ===== ensure users is array =====
  let result = Array.isArray(users) ? [...users] : [];

  // ===== search (FULLY DEFENSIVE) =====
  const keyword =
    typeof search === "string" ? search.toLowerCase() : "";

  if (keyword) {
    result = result.filter(u => {
      if (!u || typeof u !== "object") return false;

      const name =
        typeof u.name === "string" ? u.name.toLowerCase() : "";
      const email =
        typeof u.email === "string" ? u.email.toLowerCase() : "";

      return name.includes(keyword) || email.includes(keyword);
    });
  }

  // ===== validate sortBy =====
  const allowedSortFields = ["id", "name", "email", "createdAt"];
  if (!allowedSortFields.includes(sortBy)) {
    sortBy = "id";
  }

  // ===== validate sortDir =====
  sortDir = sortDir === "desc" ? "desc" : "asc";

  // ===== sort =====
  result.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];

    if (valA < valB) return sortDir === "asc" ? -1 : 1;
    if (valA > valB) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  const total = result.length;

  // ===== pagination slice =====
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = result.slice(start, end);

  res.json({
    items,
    total,
    page,
    pageSize
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
