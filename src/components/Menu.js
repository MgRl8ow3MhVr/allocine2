import React, { useState, useEffect } from "react";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

const Menu = props => {
  const { changeList, pageplus, page } = props;
  return (
    <div className="menu">
      <div className="chevrons">
        <span onClick={pageplus(-1)}>
          <ChevronLeft></ChevronLeft>
        </span>
        <span>page {page}</span>

        <span onClick={pageplus(1)}>
          <ChevronRight></ChevronRight>
        </span>
      </div>
      <li onClick={changeList(0)}>Popular Movies</li>
      <li onClick={changeList(1)}>Upcoming Movies</li>
      <li onClick={changeList(2)}>Top Movies</li>
    </div>
  );
};

export default Menu;
