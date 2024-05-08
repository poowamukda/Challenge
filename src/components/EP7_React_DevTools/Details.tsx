import React from "react";
interface DetailInfo {
    detailInfo: string;
}
function Details(detailInfo: DetailInfo) {
  return (
    <>
      <p className="info">{detailInfo.detailInfo}</p>
    </>
  );
}
export default Details;
