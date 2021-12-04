import { useState } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";

const Paginator = (props) => {
  const history = useHistory();
  const location = useLocation();
  const collectionSlug = new URLSearchParams(location.search).get("collection");
  const params = new URLSearchParams();
  collectionSlug && params.append("collection", collectionSlug);
  const totalPages = Math.ceil(props.totalItems / props.pageLength);

  const firstNum =
    props.page === 1
      ? props.page
      : props.page === totalPages
      ? props.page - 2
      : props.page - 1;
  const secondNum =
    props.page === 1
      ? props.page + 1
      : props.page === totalPages
      ? props.page - 1
      : props.page;
  const thirdNum =
    props.page === 1
      ? props.page + 2
      : props.page === totalPages
      ? props.page
      : props.page + 1;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center justify-content-lg-end">
        <li className="page-item">
          <a className="page-link" href="" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className={props.page === 1 ? "page-item active" : "page-item"}>
          <a
            className="page-link"
            href=""
            onClick={(e) => {
              e.preventDefault();
              params.append("page", firstNum.toString());
              history.push({ search: params.toString() });
            }}
          >
            {firstNum}
          </a>
        </li>
        <li
          className={
            props.page !== 1 &&
            props.page !== Math.ceil(props.totalItems / props.pageLength)
              ? "page-item active"
              : "page-item"
          }
        >
          <a
            className="page-link"
            href=""
            onClick={(e) => {
              e.preventDefault();
              params.append("page", secondNum.toString());
              history.push({ search: params.toString() });
            }}
          >
            {secondNum}
          </a>
        </li>

        <li
          className={
            props.page === Math.ceil(props.totalItems / props.pageLength)
              ? "page-item active"
              : "page-item"
          }
        >
          <a
            className="page-link"
            href=""
            onClick={(e) => {
              e.preventDefault();
              params.append("page", thirdNum.toString());
              history.push({ search: params.toString() });
            }}
          >
            {thirdNum}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
