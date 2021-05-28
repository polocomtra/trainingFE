import React from "react";

const Brand = () => {
  return (
    <div className="col-12 col-sm-8 col-md-8 header-col-1 header-nav-1">
      <div className="col-1" />
      <div className="header-navItem-1 header-logoWrapper-1 col-2">
        <a className="navbar-brand header-logo-1" href="/">
          <img src="https://meete.co/img/meete_logo.svg" alt="Meete logo" />
        </a>
      </div>
      <div className="header-navItem-1 dropdown col-3">
        <span className>
          <span className="nav-link header-textWrap-1" data-toggle="dropdown">
            Hồ Chí Minh
          </span>
        </span>
      </div>
      <div className="header-navItem-1 DesktopHeader_searchBar__l2AXC col-6">
        <div className="searchBar_wrap d-flex align-items-center">
          <input
            className="form-control mr-sm-2 searchBar_input"
            type="search"
            data-action="search"
            placeholder="Khuyến mãi, thương hiệu, địa điểm"
            aria-label="Search"
          />
          <div className="d-flex searchBar-icon">
              <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
