const express = require("express");
const products = require("./data/products.js");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server listening in ${process.env.NODE_ENV} port ${PORT}`),
);
