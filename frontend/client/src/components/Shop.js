import Header from "./Header";
import ResultsList from "./ResultsList";
import Paginator from "./Paginator";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useAuth } from "./services/context";
import CategoriesFilters from "./CategoriesFilters";

const Shop = (props) => {
  const auth = useAuth();
  const location = useLocation();
  const collectionSlug = new URLSearchParams(location.search).get("collection");
  const page = parseInt(new URLSearchParams(location.search).get("page")) || 1;
  const pageLength = 12;

  const pageSlug = page > 0 ? (page - 1) * 12 : 0;

  //${collectionSlugSlug}
  const SHOP_QUERY = gql`
    query ShopQuery($take: Int, $skip: Int = 0, $collectionSlug: String) {
      search(
        input: {
          collectionSlug: $collectionSlug
          take: $take
          skip: $skip
          groupByProduct: true
        }
      ) {
        totalItems
        items {
          productId
          sku
          productName
          description
          productAsset {
            preview
          }
          priceWithTax {
            ... on PriceRange {
              min
            }
          }
          slug
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(SHOP_QUERY, {
    variables: {
      take: pageLength,
      skip: pageSlug,
      collectionSlug: collectionSlug,
    },
  });
  //console.log(data && data.search.totalItems);
  const collectionResults = auth.useQueryCollections();
  console.log(collectionResults);
  return (
    <>
      <Header />

      <div
        className="modal fade"
        id="productView"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="row align-items-stretch">
                <div className="col-lg-6 p-lg-0">
                  <a
                    className="product-view d-block h-100 bg-cover bg-center"
                    style={{ background: "url(img/product-5.jpg)" }}
                    href="img/product-5.jpg"
                    data-lightbox="productview"
                    title="Red digital smartwatch"
                  ></a>
                  <a
                    className="d-none"
                    href="img/product-5-alt-1.jpg"
                    title="Red digital smartwatch"
                    data-lightbox="productview"
                  ></a>
                  <a
                    className="d-none"
                    href="img/product-5-alt-2.jpg"
                    title="Red digital smartwatch"
                    data-lightbox="productview"
                  ></a>
                </div>
                <div className="col-lg-6">
                  <button
                    className="close p-4"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="p-5 my-md-4">
                    <ul className="list-inline mb-2">
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                    </ul>
                    <h2 className="h4">Red digital smartwatch</h2>
                    <p className="text-muted">$250</p>
                    <p className="text-small mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ut ullamcorper leo, eget euismod orci. Cum sociis
                      natoque penatibus et magnis dis parturient montes nascetur
                      ridiculus mus. Vestibulum ultricies aliquam convallis.
                    </p>
                    <div className="row align-items-stretch mb-4">
                      <div className="col-sm-7 pr-sm-0">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                          <span className="small text-uppercase text-gray mr-4 no-select">
                            Quantity
                          </span>
                          <div className="quantity">
                            <button className="dec-btn p-0">
                              <i className="fas fa-caret-left"></i>
                            </button>
                            <input
                              className="form-control border-0 shadow-0 p-0"
                              type="text"
                              value="1"
                            />
                            <button className="inc-btn p-0">
                              <i className="fas fa-caret-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5 pl-sm-0">
                        <a
                          className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                          href="cart.html"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <a className="btn btn-link text-dark p-0" href="#">
                      <i className="far fa-heart mr-2"></i>Add to wish list
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              <CategoriesFilters
                categories={
                  collectionResults.data &&
                  collectionResults.data.collections.items
                }
              />
              <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <p className="text-small text-muted mb-0">
                      Showing 1–12 of 53 results
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                      <li className="list-inline-item text-muted mr-3">
                        <a className="reset-anchor p-0" href="#">
                          <i className="fas fa-th-large"></i>
                        </a>
                      </li>
                      <li className="list-inline-item text-muted mr-3">
                        <a className="reset-anchor p-0" href="#">
                          <i className="fas fa-th"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <select
                          className="selectpicker ml-auto"
                          name="sorting"
                          data-width="200"
                          data-style="bs-select-form-control"
                          data-title="Default sorting"
                        >
                          <option value="default">Default sorting</option>
                          <option value="popularity">Popularity</option>
                          <option value="low-high">Price: Low to High</option>
                          <option value="high-low">Price: High to Low</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
                <ResultsList data={data} />

                <Paginator
                  totalItems={data && data.search.totalItems}
                  pageLength={pageLength}
                  page={page}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer dark={true} />
    </>
  );
};

export default Shop;
