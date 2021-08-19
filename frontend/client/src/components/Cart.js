import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Header from "./Header";
import Footer from "./Footer";
import CartProduct from "./CartProduct";

const Cart = (props) => {
  const GET_ORDER = gql`
    query {
      activeOrder {
        id
        lines {
          id
          featuredAsset {
            preview
          }
          productVariant {
            id
            name
            price
            product {
              slug
            }
          }
          unitPrice
          quantity
        }
        subTotal
        subTotalWithTax
        total
        totalWithTax
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ORDER);
  console.log(data);

  return (
    <>
      <Header />

      <div className="container">
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Cart</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0" scope="col">
                        {" "}
                        <strong className="text-small text-uppercase">
                          Product
                        </strong>
                      </th>
                      <th className="border-0" scope="col">
                        {" "}
                        <strong className="text-small text-uppercase">
                          Price
                        </strong>
                      </th>
                      <th className="border-0" scope="col">
                        {" "}
                        <strong className="text-small text-uppercase">
                          Quantity
                        </strong>
                      </th>
                      <th className="border-0" scope="col">
                        {" "}
                        <strong className="text-small text-uppercase">
                          Total
                        </strong>
                      </th>
                      <th className="border-0" scope="col">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.activeOrder &&
                      data.activeOrder.lines.map((orderLine) => {
                        return (
                          <CartProduct
                            preview={orderLine.featuredAsset.preview}
                            name={orderLine.productVariant.name}
                            price={orderLine.unitPrice}
                            quantity={orderLine.quantity}
                            productVariantId={orderLine.productVariant.id}
                            slug={orderLine.productVariant.product.slug}
                          />
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <div className="bg-light px-4 py-3">
                <div className="row align-items-center text-center">
                  <div className="col-md-6 mb-3 mb-md-0 text-md-left">
                    <a
                      className="btn btn-link p-0 text-dark btn-sm"
                      href="shop.html"
                    >
                      <i className="fas fa-long-arrow-alt-left mr-2"> </i>
                      Continue shopping
                    </a>
                  </div>
                  <div className="col-md-6 text-md-right">
                    <Link className="btn btn-outline-dark btn-sm" to="checkout">
                      Proceed to checkout
                      <i className="fas fa-long-arrow-alt-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Cart total</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between">
                      <strong className="text-uppercase small font-weight-bold">
                        Subtotal
                      </strong>
                      <span className="text-muted small">$250</span>
                    </li>
                    <li className="border-bottom my-2"></li>
                    <li className="d-flex align-items-center justify-content-between mb-4">
                      <strong className="text-uppercase small font-weight-bold">
                        Total
                      </strong>
                      <span>$250</span>
                    </li>
                    <li>
                      <form action="#">
                        <div className="form-group mb-0">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your coupon"
                          />
                          <button
                            className="btn btn-dark btn-sm btn-block"
                            type="submit"
                          >
                            {" "}
                            <i className="fas fa-gift mr-2"></i>Apply coupon
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer dark={true} />
    </>
  );
};

export default Cart;
