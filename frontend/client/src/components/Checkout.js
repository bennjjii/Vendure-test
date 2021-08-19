import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Header from "./Header";
import Footer from "./Footer";
import CheckoutProduct from "./CheckoutProduct";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Checkout = (props) => {
  const stripe = useStripe();
  const elements = useElements();
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
          linePriceWithTax
        }
        subTotal
        subTotalWithTax
        total
        totalWithTax
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ORDER);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <>
      <Header />

      <div className="container">
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Checkout</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Checkout
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Billing details</h2>
          <div className="row">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <label
                      className="text-small text-uppercase"
                      for="firstName"
                    >
                      First name
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="text-small text-uppercase" for="lastName">
                      Last name
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="text-small text-uppercase" for="email">
                      Email address
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="email"
                      type="email"
                      placeholder="e.g. Jason@example.com"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="text-small text-uppercase" for="phone">
                      Phone number
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="phone"
                      type="tel"
                      placeholder="e.g. +02 245354745"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="text-small text-uppercase" for="company">
                      Company name (optional)
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="company"
                      type="text"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="text-small text-uppercase" for="country">
                      Country
                    </label>
                    <select
                      className="selectpicker country"
                      id="country"
                      data-width="fit"
                      data-style="form-control form-control-lg"
                      data-title="Select your country"
                    ></select>
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="text-small text-uppercase" for="address">
                      Address line 1
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="address"
                      type="text"
                      placeholder="House number and street name"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label className="text-small text-uppercase" for="address">
                      Address line 2
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="addressalt"
                      type="text"
                      placeholder="Apartment, Suite, Unit, etc (optional)"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="text-small text-uppercase" for="city">
                      Town/City
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="city"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="text-small text-uppercase" for="state">
                      State/County
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="state"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label className="text-small text-uppercase">
                      Payment Details
                    </label>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                              color: "#aab7c4",
                            },
                          },
                          invalid: {
                            color: "#9e2146",
                          },
                        },
                      }}
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="alternateAddressCheckbox"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label text-small"
                        for="alternateAddressCheckbox"
                      >
                        Alternate billing address
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row d-none" id="alternateAddress">
                      <div className="col-12 mt-4">
                        <h2 className="h4 text-uppercase mb-4">
                          Alternative billing details
                        </h2>
                      </div>
                      <div className="col-lg-6 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="firstName2"
                        >
                          First name
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="firstName2"
                          type="text"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="lastName2"
                        >
                          Last name
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="lastName2"
                          type="text"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="email2"
                        >
                          Email address
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="email2"
                          type="email"
                          placeholder="e.g. Jason@example.com"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="phone2"
                        >
                          Phone number
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="phone2"
                          type="tel"
                          placeholder="e.g. +02 245354745"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="company2"
                        >
                          Company name (optional)
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="company2"
                          type="text"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="country2"
                        >
                          Country
                        </label>
                        <select
                          className="selectpicker country"
                          id="country2"
                          data-width="fit"
                          data-style="form-control form-control-lg"
                          data-title="Select your country"
                        ></select>
                      </div>
                      <div className="col-lg-12 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="address2"
                        >
                          Address line 1
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="address2"
                          type="text"
                          placeholder="House number and street name"
                        />
                      </div>
                      <div className="col-lg-12 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="address2"
                        >
                          Address line 2
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="addressalt2"
                          type="text"
                          placeholder="Apartment, Suite, Unit, etc (optional)"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="city3"
                        >
                          Town/City
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="city3"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <label
                          className="text-small text-uppercase"
                          for="state4"
                        >
                          State/County
                        </label>
                        <input
                          className="form-control form-control-lg"
                          id="state4"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 form-group">
                    <button
                      className="btn btn-dark"
                      type="submit"
                      disabled={!stripe}
                    >
                      Place order
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Your order</h5>
                  <ul className="list-unstyled mb-0">
                    {data &&
                      data.activeOrder &&
                      data.activeOrder.lines.map((orderLine) => {
                        return (
                          <CheckoutProduct
                            name={orderLine.productVariant.name}
                            linePrice={orderLine.linePriceWithTax}
                          />
                        );
                      })}
                    <li className="d-flex align-items-center justify-content-between">
                      <strong className="text-uppercase small font-weight-bold">
                        Total
                      </strong>
                      <span>
                        {data &&
                          data.activeOrder &&
                          formatter.format(data.activeOrder.totalWithTax / 100)}
                      </span>
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

export default Checkout;
