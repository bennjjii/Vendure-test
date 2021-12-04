import { gql, useMutation } from "@apollo/client";
import { useAuth } from "./services/context";

function AddToCartButton(props) {
  const auth = useAuth();
  return (
    <div className="row align-items-stretch mb-4">
      <p>{props.productVariantId}</p>
      <div className="col-sm-5 pr-sm-0">
        <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
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
      <div className="col-sm-3 pl-sm-0">
        <button
          className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
          onClick={() => {
            auth.addToCart({
              variables: {
                productVariantId: props.productVariantId,
                quantity: 1,
              },
            });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default AddToCartButton;
