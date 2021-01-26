const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();
var queryBuilder = require("../bin/queryBuilder");

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
  let skip = 0;
  req.query.page ? (skip = (req.query.page - 1) * 12) : (skip = 0);
  console.log(">>>" + queryBuilder(12, 0, 0) + "<<<");
  axios
    .post("http://localhost:3000/shop-api", {
      query: queryBuilder(12, 0, 0),
    })
    .then((res) => {
      console.log(res.data.data.search.items);
      return res.data.data.search.items;
    })
    .then((data) => {
      //console.log(req.query);
      res.render("shop", { productList: data });
    });
});

/* GET detail page */

router.get("/detail/:slug", (req, res, next) => {
  axios
    .post("http://localhost:3000/shop-api", {
      query: `{product(slug: "${req.params.slug}") {
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
