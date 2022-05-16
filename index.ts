import * as typeorm from "typeorm";
import { Product } from "./src/models/Product";

const express = require('express');

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.json());
const PORT = 3000;

typeorm.createConnection().then(connection => {
  const ProductRepo = connection.getRepository(Product);

  app.get("/product/create", (req, res) => {
    res.render("create");
});
  app.listen(PORT, () => {
    console.log("App running with port: "+ PORT)
  })
});
