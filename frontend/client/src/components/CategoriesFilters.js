import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

let trunk = (trunk) => (
  <>
    <div className="py-2 px-4 bg-dark text-white mb-3">
      <strong className="small text-uppercase font-weight-bold">
        <Link className="reset-anchor" to={`shop?collection=${trunk}`}>
          {trunk.replace(/-/g, " ")}
        </Link>
      </strong>
    </div>
  </>
);

let branch = (branchName) => (
  <ul
    className="list-unstyled small text-muted pl-lg-4 font-weight-normal"
    style={{ textTransform: "capitalize" }}
  >
    <li className="mb-2">
      <Link className="reset-anchor" to={`shop?collection=${branchName}`}>
        {branchName.replace(/-/g, " ")}
      </Link>
    </li>
  </ul>
);
const CategoriesFilters = (props) => {
  console.log(props);
  //cleans the data for producing the category list

  let categories = [];

  if (props.categories) {
    props.categories.map((category) => {
      if (category.parent.slug == "__root_collection__") {
        categories.push(trunk(category.slug));

        category.children.map((child) => {
          categories.push(branch(child.slug));
        });
      }
    });
  }

  let categoryBar = React.createElement("div", null, categories);

  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <h5 className="text-uppercase mb-4">Categories</h5>
      {categoryBar}

      <h6 className="text-uppercase mb-4">Price range</h6>
      <div className="price-range pt-4 mb-5">
        <div id="range"></div>
        <div className="row pt-2">
          <div className="col-6">
            <strong className="small font-weight-bold text-uppercase">
              From
            </strong>
          </div>
          <div className="col-6 text-right">
            <strong className="small font-weight-bold text-uppercase">
              To
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilters;
