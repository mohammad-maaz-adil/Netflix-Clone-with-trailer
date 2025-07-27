const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Netflix", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB connection error:", err));