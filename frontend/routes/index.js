const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  axios
    .post("http://localhost:3000/shop-api", {
      query: "{products{items{name,id,description}}}",
    })
    .then((res) => {
      return res.data.data.products.items;
    })
    .then((data) => {
      console.log(data);
      res.render("index", { title: "Express", productList: data });
    });
});

/* GET shop page */

router.get("/shop", (req, res, next) => {
  res.send(200);
});

/* GET detail page */

router.get("/detail/:id", (req, res, next) => {
  res.status(200).send(req.params.id);
});

module.exports = router;
