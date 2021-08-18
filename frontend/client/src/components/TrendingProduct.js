import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const TrendingProduct = (props) => {
  const SELF_QUERY = gql`
    query {
      product(slug: "${props.slug}") {
        id
        name
        description
        variants {
          id
          priceWithTax
          sku
        }
        featuredAsset {
          source
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(SELF_QUERY);
  console.log(data);
  const style = {
    //width: 240,
    height: 264,
    //height: "27vw",
    objectFit: "cover",
  };

  return (
    <>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="product text-center">
          <div className="position-relative mb-3">
            {props.sale && (
              <div className="badge text-white badge-primary">Sale</div>
            )}
            <Link className="d-block" to={"/detail/" + props.slug || "/detail"}>
              <img
                className="img-fluid w-100"
                style={style}
                src={data && data.product.featuredAsset.source}
                alt="..."
              />
            </Link>

            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                <li className="list-inline-item m-0 p-0">
                  <a className="btn btn-sm btn-outline-dark" href="#">
                    <i className="far fa-heart"></i>
                  </a>
                </li>
                <li className="list-inline-item m-0 p-0">
                  <a className="btn btn-sm btn-dark" href="cart.html">
                    Add to cart
                  </a>
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
            {" "}
            <a className="reset-anchor" href="detail.html">
              {data && data.product.name}
            </a>
          </h6>
          <p className="small text-muted">
            ${data && parseInt(data.product.variants[0].priceWithTax / 100)}
          </p>
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;
