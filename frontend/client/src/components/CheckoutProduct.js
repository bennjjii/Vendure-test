import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function CheckoutProduct(props) {
  return (
    <>
      <li className="d-flex align-items-center justify-content-between">
        <strong className="small font-weight-bold">{props.name}</strong>
        <span className="text-muted small">
          {formatter.format(props.linePrice / 100)}
        </span>
      </li>
      <li className="border-bottom my-2"></li>
    </>
  );
}

export default CheckoutProduct;
