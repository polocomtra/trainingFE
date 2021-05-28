import React from "react";

const HomeRoute = () => {
  return (
    <div className="my-3">
      <div className="navMainContent">
        <ol className="breadcrum-ol">
          <li className="breadcrum-li">
            <a href='/' className="homepage-logo">
              <i
                className="fa fa-home"
                style={{ width: "24px", height: "24px" }}
                aria-hidden="true"
              />
              <p>Trang chủ</p>
            </a>
          </li>
          <li className="breadcrum-seperator">
            <div className="styles-arrow">
              <i
                className="fa fa-arrow-circle-o-right"
                style={{ width: "24px", height: "24px" }}
                aria-hidden="true"
              />
            </div>
          </li>
          <li className="breadcrum-li">
            <a href="/" className="homepage-logo">
              <p>Giỏ hàng</p>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomeRoute;
