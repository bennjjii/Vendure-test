import { useState } from "react";

const Paginator = (props) => {
  console.log(props.page);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center justify-content-lg-end">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className={props.page === 1 ? "page-item active" : "page-item"}>
          <a className="page-link" href="#">
            {props.page}
            {props.page === 1
              ? props.page
              : props.page === Math.ceil(props.totalItems / props.pageLength)
              ? props.page - 2
              : props.page - 1}
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
          <a className="page-link" href="#">
            {props.page === 1
              ? props.page + 1
              : props.page === Math.ceil(props.totalItems / props.pageLength)
              ? props.page - 1
              : props.page}
          </a>
        </li>

        <li
          className={
            props.page === Math.ceil(props.totalItems / props.pageLength)
              ? "page-item active"
              : "page-item"
          }
        >
          <a className="page-link" href="#">
            {props.page === 1
              ? props.page + 2
              : props.page === Math.ceil(props.totalItems / props.pageLength)
              ? props.page
              : props.page + 1}
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
