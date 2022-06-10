import express from "express";
import salute from "./api";
import products from "./api/product/list";

const app = express();
const port = process.env.port || 4000;

app.use("/api/saludo");
app.use("/api/product");

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
