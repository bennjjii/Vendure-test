import Header from "./Header";
import ShopProduct from "./ShopProduct";
import Footer from "./Footer";

const Shop = (props) => {
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
              <div className="col-lg-3 order-2 order-lg-1">
                <h5 className="text-uppercase mb-4">Categories</h5>
                <div className="py-2 px-4 bg-dark text-white mb-3">
                  <strong className="small text-uppercase font-weight-bold">
                    Fashion &amp; Acc
                  </strong>
                </div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Women's T-Shirts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Men's T-Shirts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Dresses
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Novelty socks
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Women's sunglasses
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Men's sunglasses
                    </a>
                  </li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3">
                  <strong className="small text-uppercase font-weight-bold">
                    Health &amp; Beauty
                  </strong>
                </div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Shavers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      bags
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Cosmetic
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Nail Art
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Skin Masks &amp; Peels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Korean cosmetics
                    </a>
                  </li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3">
                  <strong className="small text-uppercase font-weight-bold">
                    Electronics
                  </strong>
                </div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Electronics
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      USB Flash drives
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Headphones
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Portable speakers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Cell Phone bluetooth headsets
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Keyboards
                    </a>
                  </li>
                </ul>
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
                <h6 className="text-uppercase mb-3">Show only</h6>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck1"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customCheck1"
                  >
                    Returns Accepted
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck2"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customCheck2"
                  >
                    Returns Accepted
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck3"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customCheck3"
                  >
                    Completed Items
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck4"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customCheck4"
                  >
                    Sold Items
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck5"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customCheck5"
                  >
                    Deals &amp; Savings
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-4">
                  <input
                    className="custom-control-input"
                    id="customCheck6"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customCheck6"
                  >
                    Authorized Seller
                  </label>
                </div>
                <h6 className="text-uppercase mb-3">Buying format</h6>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    id="customRadio1"
                    type="radio"
                    name="customRadio"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customRadio1"
                  >
                    All Listings
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    id="customRadio2"
                    type="radio"
                    name="customRadio"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customRadio2"
                  >
                    Best Offer
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    id="customRadio3"
                    type="radio"
                    name="customRadio"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customRadio3"
                  >
                    Auction
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    id="customRadio4"
                    type="radio"
                    name="customRadio"
                  />
                  <label
                    className="custom-control-label text-small"
                    for="customRadio4"
                  >
                    Buy It Now
                  </label>
                </div>
              </div>

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
                <div className="row">
                  <ShopProduct
                    name="Kui Ye Chen’s AirPods"
                    imgSrc="img/product-1.jpg"
                    price="250"
                  />
                  <ShopProduct
                    name="Air Jordan 12 gym red"
                    imgSrc="img/product-2.jpg"
                    price="300"
                  />

                  <ShopProduct
                    name="Cyan cotton t-shirt"
                    imgSrc="img/product-3.jpg"
                    price="25"
                  />

                  <ShopProduct
                    name="Timex Unisex Originals"
                    imgSrc="img/product-4.jpg"
                    price="351"
                  />

                  <ShopProduct
                    name="Red digital smartwatch"
                    imgSrc="img/product-5.jpg"
                    price="250"
                  />
                  <ShopProduct
                    name="Nike air max 95"
                    imgSrc="img/product-6.jpg"
                    price="300"
                  />

                  <ShopProduct
                    name="Joemalone Women prefume"
                    imgSrc="img/product-7.jpg"
                    price="25"
                  />
                  <ShopProduct
                    name="Apple Watch"
                    imgSrc="img/product-8.jpg"
                    price="351"
                  />

                  <ShopProduct
                    name="Men silver Byron Watch"
                    imgSrc="img/product-9.jpg"
                    price="351"
                  />

                  <ShopProduct
                    name="Polaroid one step camera"
                    imgSrc="img/product-10.jpg"
                    price="351"
                    new
                  />

                  <ShopProduct
                    name="Gray Nike running shoes"
                    imgSrc="img/product-11.jpg"
                    price="351"
                  />

                  <ShopProduct
                    name="Black DSLR lense"
                    imgSrc="img/product-12.jpg"
                    price="351"
                  />
                </div>

                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center justify-content-lg-end">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
