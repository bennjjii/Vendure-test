import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className="header bg-white">
        <div className="container px-0 px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
            <Link to="/" className="navbar-brand">
              <span className="font-weight-bold text-uppercase text-dark">
                Boutique
              </span>
            </Link>

            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/detail" className="nav-link">
                    Product detail
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="pagesDropdown"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="dropdown-menu mt-3"
                    aria-labelledby="pagesDropdown"
                  >
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="/"
                    >
                      Homepage
                    </Link>
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="/shop"
                    >
                      Category
                    </Link>
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="/detail"
                    >
                      Product detail
                    </Link>
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="/cart"
                    >
                      Shopping cart
                    </Link>
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="/checkout"
                    >
                      Checkout
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>
                    Cart
                    <small className="text-gray">(2)</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <i className="far fa-heart mr-1"></i>
                    <small className="text-gray"> (0)</small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <i className="fas fa-user-alt mr-1 text-gray"></i>Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
