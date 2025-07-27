const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");
require("./db");
app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.listen(5500, () => console.log("Server running on http://localhost:5500"));