import React, { Component } from "react";
import "./main.css";

import Data from "../data/Data";
import Form from "../form/Form";
import Details from "../details/details";

import uuid from "react-uuid";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";

class Main extends Component {
  state = {
    list: [],
    listToSave: [],
  };
  //to clear all the list
  clearAll = () => {
    this.setState({
      list: [],
    });
  };
  //delet item from the list
  deleteItem = item => {
    this.setState(prev => {
      const newList = prev.list.filter(el => el !== item);
      return {
        list: newList,
      };
    });
  };
  //show the form and the overlay
  showForm = () => {
    document.querySelector(".overlay").style.visibility = "visible";
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector(".title").textContent = "Create Contact";
    document.querySelector(".submit").style.display = "block";
    document.querySelector(".buttonEdit").style.display = "none";
  };
  //add new person to the list
  addContact = newContact =>
    this.setState(({ list, listToSave }) => ({
      list: [...list, newContact],
      listToSave: [...listToSave, newContact],
    }));
  //to the search button
  searchFunction = e => {
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
  sort = () => {
    this.state.list.sort(function (l, r) {
      //to sort the array by the name

      l = l.name.toLowerCase();
      r = r.name.toLowerCase();
      if (l < r) {
        return -1; // return negative number
      } else if (l > r) {
        return 1; // positive number
      }
      return 0;
    });
  };
  //show edit form
  showEditForm = item => {
    document.querySelector(".overlay").style.visibility = "visible";
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector(".title").textContent = "Edit";
    document.querySelector(".submit").style.display = "none";
    document.querySelector(".buttonEdit").style.display = "block";
    let form = document.querySelector(".form");
    form.name.value = ` ${item.name}`;
    form.phone.value = `${item.phone}`;
    form.address.value = `${item.address}`;
    form.age.value = ` ${item.age}`;
    form.image.value = ` ${item.image}`;
    document
      .querySelector(".buttonEdit")
      .addEventListener("click", function () {
        item.name = form.name.value;
        item.phone = form.phone.value;
        item.address = form.address.value;
        item.age = form.age.value;
        item.image = form.image.value;
        document.querySelector(".overlay").style.visibility = "hidden";
        document.querySelector(".container").style.visibility = "hidden";
      });
  };
  //to show person details
  showDetails = item => {
    document.querySelector(".pName").innerHTML = `Name : ${item.name}`;
    document.querySelector(".telphone").innerHTML = `Phone : ${item.phone}`;
    document.querySelector(".address").innerHTML = `Address : ${item.address}`;
    document.querySelector(".age").innerHTML = `Age : ${item.age}`;
    document.querySelector(".details").style.visibility = "visible";
    document.querySelector(".overlay").style.visibility = "visible";
  };

  render() {
    const list = this.state.list.map(item => (
      <Data
        peopleinfo={item}
        key={uuid()}
        onDelete={() => this.deleteItem(item)}
        onEdit={() => this.showEditForm(item)}
        onShowPerson={() => this.showDetails(item)}
      />
    ));

    const code = (
      <article className="all-main">
        <h5>{this.state.list.length} People</h5>
        <div className="nav">
          <input
            className="search"
            type="text"
            placeholder="Search.."
            name="search"
            onClick={this.search}
            onChange={event => {
              this.searchFunction(event.target.value);
            }}
          />

          <button className="deleteall" onClick={this.clearAll}>
            <AiFillDelete />
          </button>
          <button className="addpesron" onClick={this.showForm}>
            <BsFillPersonPlusFill />
          </button>
        </div>
        {list}
        {this.sort()}

        <Form onAdd={this.addContact} />
        <Details />
      </article>
    );
    return code;
  }
}
export default Main;
