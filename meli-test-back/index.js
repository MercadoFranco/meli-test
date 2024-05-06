import getItems from "./endpoints/getItems.js";
import getItemById from "./endpoints/getItemById.js";
import express from "express";
const app = express();
const PORT = 3000;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

app.get("/api/items", getItems);

app.get("/api/items/:id", getItemById);

app.listen(PORT, () => {
  console.log(`Corriendo en http://localhost:${PORT}`);
});
