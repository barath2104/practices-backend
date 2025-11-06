require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const itemsRoutes = require("./routes/items");
const errorHandler = require("./middlewares/errorHandler");
const userRoutes =require('./routes/user')
const imageRoutes = require("./routes/images")

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/items", itemsRoutes);
app.use('/api/user' ,userRoutes)
app.use("/api/image",imageRoutes);
app.get("/", (req, res) => res.send("Server is up"));
app.use(errorHandler);



// Connect to DB then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server — DB connection error:", err);
    process.exit(1);
  });
