import React from "react";
import Item from "./Item";

const ListData = ({items}) => {
  return (
    <div className="col-md-8 col-lg-9" style={{ marginTop: "8px" }}>
      <div className="bg-white rounded">
        <div className="p-3 mb-4 w-100 cartDeal">
          <div
            className="d-flex flex-column align-items-center w-100"
            id="cartView"
          >
            {
                items.map((item,index)=>{
                    return <Item item={item} key={index} />
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListData;
