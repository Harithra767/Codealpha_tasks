console.log("SERVER FILE STARTED");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- PRODUCTS ---------------- */
let products = [
    { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Phone", price: 20000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 3000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smart Watch", price: 5000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Keyboard", price: 1500, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Mouse", price: 800, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Tablet", price: 25000, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Monitor", price: 12000, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Speaker", price: 3500, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Gaming Chair", price: 15000, image: "https://via.placeholder.com/150" }
];

/* ---------------- ROUTES ---------------- */

// test route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// products API
app.get("/products", (req, res) => {
    res.json(products);
});

/* ---------------- START SERVER ---------------- */
app.listen(5000, () => {
    console.log("Server running on port 5000");
});