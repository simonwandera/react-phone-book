import React from "react";

import "./header.css";

function Header(props) {
  const { subHeading, mainHeading } = props;

  return (
    <header className="main-heading">
      <h1>
        {mainHeading}
        <span>{subHeading}</span>
      </h1>
    </header>
  );
}

export default Header;
