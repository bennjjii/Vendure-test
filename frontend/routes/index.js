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

router.get("/shop", async (req, res) => {
  let pageLength = 12;
  console.log(">>>" + queryBuilder(12, 0, 0) + "<<<");
  let productList = await axios.post("http://localhost:3000/shop-api", {
    query: queryBuilder(pageLength, req.query.page ? req.query.page - 1 : 0, 0),
  });

  console.log(productList.data.data.search);

  res.render("shop", {
    productList: productList.data.data.search.items,
    page: req.query.page ? req.query.page : null,
    totalItems: productList.data.data.search.totalItems,
    pageLength: pageLength,
  });
});

/* GET category */

router.get("/category/:slug", async (req, res) => {
  let products = await axios.post("http://localhost:3000/shop-api", {
    query: queryBuilder(12, 0, 0, req.params.slug),
  });
  console.log(products.data.data.search.items);
  res.render("shop", { productList: products.data.data.search.items });
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
