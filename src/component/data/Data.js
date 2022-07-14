import React from "react";

import { AiFillDelete } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
//data attribute
function Data(props) {
  const { peopleinfo } = props;
  const { name, image } = peopleinfo;
//for each line in the list
  const code = (
    <div className="people">
      <figure className="image">
        <img src={image} />
      </figure>
      <p className="name"> {name} </p>

      <button className="delete" onClick={props.onDelete}>
        <AiFillDelete />
      </button>
      <button className="edit" onClick={props.onEdit}>
        <BsPencilSquare />
      </button>
      <button className="show" onClick={props.onShowPerson}>
        <BsExclamationCircle />
      </button>
    </div>
  );
  return code;
}

export default Data;
