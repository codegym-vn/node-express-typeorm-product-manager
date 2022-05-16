import * as typeorm from "typeorm";
import { Product } from "./src/entity/Product";
const multer = require('multer');
const upload = multer();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json());
app.use(express.json());
const PORT = 3000;

typeorm.createConnection().then(connection => {
  const ProductRepo = connection.getRepository(Product);

  app.get("/product/create", (req, res) => {
    res.render("create");
  });
  app.post("/product/create", upload.none(), async (req, res) => {
    const productData = {
      name: req.body.name,
      avatar: req.body.avatar,
      author: req.body.author,
      price: req.body.price
    };

    const product =  await ProductRepo.save(productData);
    res.render("success")
  });
  app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
  })
});
