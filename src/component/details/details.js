import React from "react";
import "./details.css";
import { AiOutlineClose } from "react-icons/ai";
//show person details
function Details(props) {
  const code = (
    <div className="overlay">
      <div className="details">
        <button
          className="detailExit"
          onClick={() => {
            document.querySelector(".details").style.visibility = "hidden";
            document.querySelector(".overlay").style.visibility = "hidden";
          }}
        >
          <AiOutlineClose />
        </button>
        <p className="pName">Name :</p>
        <p className="telphone">Telephone: </p>
        <p className="address">Address : </p>
        <p className="age">Age : </p>
      </div>
    </div>
  );

  return code;
}

export default Details;
