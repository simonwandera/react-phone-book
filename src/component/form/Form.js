import React, { Component } from "react";
import "./form.css";
import { AiOutlineClose } from "react-icons/ai";

const DETAILS = {
  name: "",
  phone: "",
  address: "",
  age: "",
  image: "",
};

class App extends Component {
  state = DETAILS;
  //when we feild in the input
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  //submit click
  handleSubmit = e => {
    e.preventDefault();

    const { onAdd } = this.props;
    onAdd(this.state);
    this.restForm();
    this.exit();
  };
  //to hide the form and the popup
  exit = () => {
    document.querySelector(".overlay").style.visibility = "hidden";
    document.querySelector(".container").style.visibility = "hidden";
  };
  //to rest the form
  restForm = () => {
    this.setState(DETAILS);
  };
  //form elemnts
  render() {
    return (
      <div className="overlay">
        <div className="container">
          <button className="exit" onClick={this.exit}>
            <AiOutlineClose />
          </button>
          <h3 className="title">Create Contact</h3>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="box">
              <label htmlFor="name">Name: *</label>
              <input
                type="text"
                placeholder="name"
                title="alphanumeric a-z"
                id="name"
                className="nameE"
                pattern="[a-zA-Z]{3-20}"
                placeholder="Enter your name here"
                required
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
              />
            </div>

            <div className="box">
              <label htmlFor="phone">Phone: *</label>
              <input
                placeholder="exampele 053-4301036"
                pattern="[0-9]{3}[0-9]{7}"
                title="Exampele 053-4301036"
                type="tel"
                id="phone"
                className="phoneE"
                required
                onChange={this.handleChange}
                value={this.state.phone}
                name="phone"
              />
            </div>

            <div className="box">
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                placeholder="address"
                title="alphanumeric"
                id="address"
                className="addressE"
                onChange={this.handleChange}
                value={this.state.address}
                name="address"
              />
            </div>

            <div className="box">
              <label htmlFor="age">Age: </label>
              <input
                type="tel"
                placeholder="age"
                title="alphanumeric"
                id="age"
                className="ageE"
                onChange={this.handleChange}
                value={this.state.age}
                name="age"
              />
            </div>

            <div className="box">
              <label htmlFor="image">Image Url: </label>
              <input
                type="text"
                placeholder="image url"
                title="alphanumeric"
                id="image"
                className="imageE"
                onChange={this.handleChange}
                value={this.state.image}
                name="image"
              />
            </div>

            <div className="box">
              <input
                className="submit"
                type="submit"
                onSubmit={this.handleSubmit}
                value="Send"
              />
              <button class="buttonEdit" type="button">
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
