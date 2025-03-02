import express from "express";

const jsonServer = await import("json-server");

const server = express();
const router = jsonServer.default.router("db.json");
const middlewares = jsonServer.default.defaults();

server.use(express.json());
server.use(middlewares);

// Custom login route
server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = router.db.get("users").value();

  const user = users.find((u) => u.username === username && u.password === password);
  
  if (user) {
    res.status(200).json({ id: user.id, username: user.username, role: user.role });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});


// import jsonServer from "json-server";
// import express from "express";

// const server = express();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(express.json());
// server.use(middlewares);

// // Custom login route
// server.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const users = router.db.get("users").value();

//   const user = users.find((u) => u.username === username && u.password === password);
  
//   if (user) {
//     res.status(200).json({ id: user.id, username: user.username, role: user.role });
//   } else {
//     res.status(401).json({ error: "Invalid credentials" });
//   }
// });

// server.use(router);

// // Start the server
// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });
