import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

const app = express();
dotenv.config();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server listening in ${process.env.NODE_ENV} port ${PORT}`),
);
