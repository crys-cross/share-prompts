const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  // Handle GET request for /api/users
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  // Send the users as a response
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
