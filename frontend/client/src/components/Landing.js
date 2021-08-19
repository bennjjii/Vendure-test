import Header from "./Header";
import Footer from "./Footer";
import TrendingProduct from "./TrendingProduct";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <>
      <Header />

      <div className="container">
        <section
          className="hero pb-3 bg-cover bg-center d-flex align-items-center"
          style={{ background: "url(img/hero-banner-alt.jpg)" }}
        >
          <div className="container py-5">
            <div className="row px-4 px-lg-5">
              <div className="col-lg-6">
                <p className="text-muted small text-uppercase mb-2">
                  New Inspiration 2020
                </p>
                <h1 className="h2 text-uppercase mb-3">
                  20% off on new season
                </h1>
                <a className="btn btn-dark" href="shop">
                  Browse collections
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <header className="text-center">
            <p className="small text-muted small text-uppercase mb-1">
              Carefully curated collections
            </p>
            <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
          </header>
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <Link className="category-item" to="shop?collection=camera-photo">
                <img
                  className="img-fluid"
                  src="http://localhost:3000/assets/source/1d/eniko-kis-663725-unsplash.jpg"
                  alt=""
                  style={{ height: "40vw", width: "100%", objectFit: "cover" }}
                />
                <strong className="category-item-title">Camera & Photo</strong>
              </Link>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <Link
                className="category-item mb-4"
                to="shop?collection=footwear"
              >
                <img
                  className="img-fluid"
                  src="img/cat-img-2.jpg"
                  alt=""
                  style={{
                    height: "18.6vw",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <strong className="category-item-title">Footwear</strong>
              </Link>
              <Link className="category-item" to="shop?collection=equipment">
                <img
                  className="img-fluid"
                  src="http://localhost:3000/assets/source/ac/tommy-bebo-600358-unsplash.jpg"
                  alt=""
                  style={{
                    height: "18.6vw",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <strong className="category-item-title">Sports</strong>
              </Link>
            </div>
            <div className="col-md-4">
              <Link className="category-item" to="shop?collection=furniture">
                <img
                  className="img-fluid"
                  src="http://localhost:3000/assets/source/68/nathan-fertig-249917-unsplash.jpg"
                  alt=""
                  style={{ height: "40vw", width: "100%", objectFit: "cover" }}
                />

                <strong className="category-item-title">Furniture</strong>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-5">
          <header>
            <p className="small text-muted small text-uppercase mb-1">
              Made the hard way
            </p>
            <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
          </header>
          <div className="row">
            <TrendingProduct slug="allstar-sneakers" />
            <TrendingProduct slug="instant-camera" />
            <TrendingProduct slug="road-bike" />
            <TrendingProduct slug="boxing-gloves" />
            <TrendingProduct slug="tent" />
            <TrendingProduct slug="cruiser-skateboard" />
            <TrendingProduct slug="clacky-keyboard" />
            <TrendingProduct slug="compact-digital-camera" />
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-4 mb-3 mb-lg-0">
                <div className="d-inline-block">
                  <div className="media align-items-end">
                    <svg className="svg-icon svg-icon-big svg-icon-light">
                      <use href="#delivery-time-1"> </use>
                    </svg>
                    <div className="media-body text-left ml-3">
                      <h6 className="text-uppercase mb-1">Free shipping</h6>
                      <p className="text-small mb-0 text-muted">
                        Free shipping worlwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3 mb-lg-0">
                <div className="d-inline-block">
                  <div className="media align-items-end">
                    <svg className="svg-icon svg-icon-big svg-icon-light">
                      <use href="#helpline-24h-1"> </use>
                    </svg>
                    <div className="media-body text-left ml-3">
                      <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                      <p className="text-small mb-0 text-muted">
                        Free shipping worlwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-inline-block">
                  <div className="media align-items-end">
                    <svg className="svg-icon svg-icon-big svg-icon-light">
                      <use href="#label-tag-1"> </use>
                    </svg>
                    <div className="media-body text-left ml-3">
                      <h6 className="text-uppercase mb-1">Festival offer</h6>
                      <p className="text-small mb-0 text-muted">
                        Free shipping worlwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <h5 className="text-uppercase">Let's be friends!</h5>
                <p className="text-small text-muted mb-0">
                  Nisi nisi tempor consequat laboris nisi.
                </p>
              </div>
              <div className="col-lg-6">
                <form action="#">
                  <div className="input-group flex-column flex-sm-row mb-3">
                    <input
                      className="form-control form-control-lg py-3"
                      type="email"
                      placeholder="Enter your email address"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-dark btn-block"
                        id="button-addon2"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
