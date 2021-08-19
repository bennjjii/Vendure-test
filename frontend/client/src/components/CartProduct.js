import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function CartProduct(props) {
  return (
    <>
      <tr>
        <th className="pl-0 border-0" scope="row">
          <div className="media align-items-center">
            <Link
              className="reset-anchor d-block animsition-link"
              to={props.slug}
            >
              <img src={props.preview} alt="..." width="70" />
            </Link>
            <div className="media-body ml-3">
              <strong className="h6">
                <Link
                  className="reset-anchor animsition-link"
                  to={"detail/" + props.slug}
                >
                  {props.name}
                </Link>
              </strong>
            </div>
          </div>
        </th>
        <td className="align-middle border-0">
          <p className="mb-0 small">{formatter.format(props.price / 100)}</p>
        </td>
        <td className="align-middle border-0">
          <div className="border d-flex align-items-center justify-content-between px-3">
            <span className="small text-uppercase text-gray headings-font-family">
              Quantity
            </span>
            <div className="quantity">
              <button className="dec-btn p-0">
                <i className="fas fa-caret-left"></i>
              </button>
              <input
                className="form-control form-control-sm border-0 shadow-0 p-0"
                type="text"
                value="1"
              />
              <button className="inc-btn p-0">
                <i className="fas fa-caret-right"></i>
              </button>
            </div>
          </div>
        </td>
        <td className="align-middle border-0">
          <p className="mb-0 small">$250</p>
        </td>
        <td className="align-middle border-0">
          <a className="reset-anchor" href="#">
            <i className="fas fa-trash-alt small text-muted"></i>
          </a>
        </td>
      </tr>
    </>
  );
}

export default CartProduct;
