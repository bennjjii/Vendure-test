import { Link } from "react-router-dom";

const ShopProduct = (props) => {
  const style = {
    // width: 200,
    height: 200,
    objectFit: "cover",
  };

  return (
    <>
      <div className="col-lg-4 col-sm-6">
        <div className="product text-center">
          <div className="mb-3 position-relative">
            <div className="badge text-white badge-primary">
              {props.new ? "New" : null}
            </div>
            <Link className="d-block" to={"/detail/" + props.slug || "/detail"}>
              <img
                className="img-fluid w-100"
                style={style}
                src={props.imgSrc || "http://localhost:5000/img/product-1.jpg"}
                alt="..."
              />
            </Link>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                <li className="list-inline-item m-0 p-0">
                  <Link className="btn btn-sm btn-outline-dark" to="#">
                    <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li className="list-inline-item m-0 p-0">
                  <Link className="btn btn-sm btn-dark" to="/cart">
                    Add to cart
                  </Link>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                    className="btn btn-sm btn-outline-dark"
                    href="#productView"
                    data-toggle="modal"
                  >
                    <i className="fas fa-expand"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            <a className="reset-anchor" href="detail.html">
              {props.name || "Kui Ye Chen’s AirPods"}
            </a>
          </h6>
          <p className="small text-muted">${props.price / 100 || "250"}</p>
        </div>
      </div>
    </>
  );
};

export default ShopProduct;
