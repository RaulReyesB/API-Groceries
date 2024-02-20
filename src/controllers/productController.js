import productDao from "../dao/products.dao.js";

export const getAll = (req, res) => {
  productDao
    .getAll()
    .then((products) => res.render("../src/views/index", { products }))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};
export const getPrice = (req, res) => {
  productDao
    .getPrice()
    .then((result) => res.json(result))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};
export const getPrime = (req, res) => {
  productDao
    .getPrime(req.params.price)
    .then((result) => res.json(result))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};
export const getOne = (req, res) => {
  productDao
    .getOne(req.params.barcode)
    .then((products) => {
      !products
        ? res.json({
            message: "product not found",
          })
        : res.render("../src/views/edit", { products });
    })
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};
export const insertOne = (req, res) => {
  const product = req.body;
  console.log(product);
  productDao
    .insertOne(req.body)
    .then((result) => res.redirect("/"))
    .catch((err) => res.json({ status: "Server unavaliable =/" }));
};

export const deleteOne = (req, res) => {
  productDao
    .deleteOne(req.params.barcode)
    .then((result) => {
      !result
        ? res.console({
            message: "product not found",
          })
        : res.redirect("/");
    })
    .catch((err) => res.console({ status: "Server unavaliable =/" }));
};
export const updateOne = (req, res) => {
  productDao
    .updateOne(req.params.barcode, req.body)
    .then((product) => {
      !product
        ? res.console({
            message: "product not found",
          })
        : res.redirect("/");
    })
    .catch((err) => res.console({ status: "Server unavaliable =/" }));
};
