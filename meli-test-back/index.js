import getItems from "./endpoints/getItems.js";
import getItemById from "./endpoints/getItemById.js";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/items", getItems);

app.get("/api/items/:id", getItemById);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
