const express = require("express");

const app = express();
app.use(express.json());

// endpoint 1
app.get("/", (req, res) => {
    res.send("API jalan 🚀");
});

// endpoint 2
app.get("/api/test", (req, res) => {
    res.json({ message: "Test endpoint berhasil" });
});

app.listen(3000, () => {
    console.log("Server jalan di http://localhost:3000");
});