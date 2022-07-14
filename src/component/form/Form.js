import React, { Component, useState } from "react";
import "./form.css";
import { AiOutlineClose } from "react-icons/ai";

const App =()=> {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    address: "",
    age: "",
    image: "",
  });

  //when we feild in the input
  const handleChange = e => {
    const { name, value } = e.target;
    // this.setState({
    //   [name]: value,
    // });
    details.name = name.value
    
  };
  //submit click
  const handleSubmit = e => {
    console.log('Submitting the form')
  };
  // //to hide the form and the popup
  const exit = () => {
   console.log('Exiting')
  };
  // //to rest the form
  // restForm = () => {
  //   this.setState(DETAILS);
  // };
  //form elemnts
  {
    return (
      <div className="overlay">
        <div className="container">
          <button className="exit" onClick={exit}>
            <AiOutlineClose />
          </button>
          <h3 className="title">Create Contact</h3>
          <form className="form" onSubmit={handleSubmit}>
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
                onChange={handleChange}
                value={details.name}
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
                onChange={console.log('Changes')}
                value={console.log("values")}
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
                onChange={console.log('changes')}
                value={console.log('values')}
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
                onChange={console.log('changes')}
                value={console.log('values')}
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
                onChange={console.log('changes')}
                value={console.log('values')}
                name="image"
              />
            </div>

            <div className="box">
              <input
                className="submit"
                type="submit"
                onChange={console.log('changes')}
                value={console.log('values')}
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
