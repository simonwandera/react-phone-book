import React, { Component, useState } from "react";
import "./main.css";

import Data from "../data/Data";
import Form from "../form/Form";
import Details from "../details/details";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Main = ()=> {
  const [list, setList]=useState([]);
  //to clear all the list
  const clearAll = () => {
    setList([])
  };
  //delet item from the list
  const deleteItem = item => {
    console.log('Delete all items');
  };
  //show the form and the overlay
  const showForm = () => {
    document.querySelector(".overlay").style.visibility = "visible";
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector(".title").textContent = "Create Contact";
    document.querySelector(".submit").style.display = "block";
    document.querySelector(".buttonEdit").style.display = "none";
  };
  //add new person to the list
  const addContact = newContact =>{
    console.log('Adding a new item')
  };
  //to the search button
  const searchFunction = e => {
    let letters = e.toLowerCase(); // the letters that input
    const templist = this.state.list;

    for (let i = 0; i < templist.length; i++) {
      if (!templist[i].name.toLowerCase().includes(letters)) {
        this.setState(this.state.list);
      } else {
        this.setState(prev => {
          const newLIst = prev.list.filter(el =>
            el.name.toLowerCase().includes(letters)
          );
          console.log(newLIst);
          return {
            list: newLIst,
          };
        });
      }

      if (letters == "")
        this.setState({
          list: this.state.listToSave,
        });
    }
  };
  const sort = () => {
    console.log('Sorting the items')
  };
  // //show edit form
  // showEditForm = item => {
  //   document.querySelector(".overlay").style.visibility = "visible";
  //   document.querySelector(".container").style.visibility = "visible";
  //   document.querySelector(".title").textContent = "Edit";
  //   document.querySelector(".submit").style.display = "none";
  //   document.querySelector(".buttonEdit").style.display = "block";
  //   let form = document.querySelector(".form");
  //   form.name.value = ` ${item.name}`;
  //   form.phone.value = `${item.phone}`;
  //   form.address.value = `${item.address}`;
  //   form.age.value = ` ${item.age}`;
  //   form.image.value = ` ${item.image}`;
  //   document
  //     .querySelector(".buttonEdit")
  //     .addEventListener("click", function () {
  //       item.name = form.name.value;
  //       item.phone = form.phone.value;
  //       item.address = form.address.value;
  //       item.age = form.age.value;
  //       item.image = form.image.value;
  //       document.querySelector(".overlay").style.visibility = "hidden";
  //       document.querySelector(".container").style.visibility = "hidden";
  //     });
  // };
  // //to show person details
  // showDetails = item => {
  //   document.querySelector(".pName").innerHTML = `Name : ${item.name}`;
  //   document.querySelector(".telphone").innerHTML = `Phone : ${item.phone}`;
  //   document.querySelector(".address").innerHTML = `Address : ${item.address}`;
  //   document.querySelector(".age").innerHTML = `Age : ${item.age}`;
  //   document.querySelector(".details").style.visibility = "visible";
  //   document.querySelector(".overlay").style.visibility = "visible";
  // };

 {
    const newList = list.map(item => (
      <Data
        peopleinfo={item}
        key={item.name}
        onDelete={() => this.deleteItem(item)}
        onEdit={() => this.showEditForm(item)}
        onShowPerson={() => this.showDetails(item)}
      />
    ));

   return (
      <article className="all-main">
        <h5>{list.length} People</h5>
        <div className="nav">
          <input
            className="search"
            type="text"
            placeholder="Search.."
            name="search"
            onClick={searchFunction}
            onChange={event => {
              searchFunction(event.target.value);
            }}
          />

          <button className="deleteall" onClick={clearAll}>
            <AiFillDelete />
          </button>
          <button className="addpesron" onClick={console.log('Showing form')}>
            <BsFillPersonPlusFill />
          </button>
        </div>
        {list}
        {sort()}

        <Form onAdd={addContact} />
        <Details />
      </article>

    );
    
  }
}
export default Main;
