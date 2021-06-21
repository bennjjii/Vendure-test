const axios = require("axios").default;
var express = require("express");
var router = express.Router();
var queryBuilder = require("../bin/queryBuilder");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();

/* GET home page. */
router.get("/", async (req, res, next) => {
  let http = new axios.create({
    withCredentials: true,
  });
  let response = await axios.post(
    "http://localhost:3000/shop-api",
    {
      query: "{products{items{name,id,description,featuredAsset{source}}}}",
    },
    { withCredentials: true, proxyHeaders: true, mode: "cors", jar: cookieJar }
  );

  console.log(cookieJar.getCookiesSync("http://localhost:3000"));
  res.render("index");
});

/* GET shop page */

router.get("/shop", async (req, res) => {
  let pageLength = 12;
  console.log(">>>" + queryBuilder(12, 0, 0) + "<<<");
  let productList = await axios.post("http://localhost:3000/shop-api", {
    query: queryBuilder(
      pageLength,
      req.query.page ? req.query.page - 1 : 0,
      0,
      req.params.collection
    ),
  });

  console.log(productList.data.data.search.items);

  res.render("shop", {
    productList: productList.data.data.search.items,
    page: req.query.page ? req.query.page : 1,
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

router.get("/detail/:slug", async (req, res, next) => {
  let {
    data: {
      data: { product },
    },
  } = await axios.post("http://localhost:3000/shop-api", {
    query: `{product(slug: "${req.params.slug}") {
          id
            name
            description
            featuredAsset{
              source
            }
          }
        }`,
  });

  console.log(product);
  // res.sendStatus(200);
  res.render("detail", {
    name: product.name,
    description: product.description,
    images: product.featuredAsset.source,
  });
});

/* GET cart */

router.get("/cart", (req, res) => {
  res.render("cart");
});

module.exports = router;
