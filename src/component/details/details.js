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
            console.log('You are exiting')
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
