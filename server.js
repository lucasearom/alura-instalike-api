import express from "express";

const app = express();

app.listen(3333, () => {
    console.log("Server is running on port 3333");
});

app.get("/api", (req, res) => {
    res.status(200).send("Hello World!");
});
