const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  axios
    .post("http://localhost:3000/shop-api", {
      query: "{products{items{name,id,description,featuredAsset{source}}}}",
    })
    .then((res) => {
      return res.data.data.products.items;
    })
    .catch(console.log("Backend down"))
    .then((data) => {
      console.log(data);
      res.render("index", { title: "Express", productList: data });
    });
});

/* GET shop page */

router.get("/shop", (req, res, next) => {
  axios
    .post("http://localhost:3000/shop-api", {
      query:
        "{products{items{name,id,description,featuredAsset{source},variants{price}}}}",
    })
    .then((res) => {
      return res.data.data.products.items;
    })
    .then((data) => {
      console.log(data[0].variants);
      res.render("shop2", { productList: data });
    });
});

/* GET detail page */

router.get("/detail/:slug", (req, res, next) => {
  axios
    .post("http://localhost:3000/shop-api", {
      query: `{product(slug: "allstar-sneakers") {
          id
            name
            description
            featuredAsset{
              source
            }
          }
        }`,
    })
    .then((res) => {
      return res.data.data.product;
    })
    .then((data) => {
      console.log(data);
      res.render("detail", {
        name: data.name,
        description: data.description,
        images: data.featuredAsset.source,
      });
    });
});

module.exports = router;
