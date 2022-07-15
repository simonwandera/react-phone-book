import React, { Component, useState } from "react";
import "./form.css";
import { AiOutlineClose } from "react-icons/ai";
import { useFormik } from 'formik'

const Form = ({ setOpenModal }) => {
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
    setOpenModal(false)
  };
  // //to rest the form
  const validate = values => {
    const errors = {}

    
    console.log(errors)
    return errors
}

const onSubmit = (values) => {
  const name = values.name
  const phone = values.phone

  console.log(phone)

  const val = {name, phone}
  fetch('http://127.0.0.1:8000/contacts/', {
      method: 'POST',
      body: JSON.stringify(val),
      headers: {"Contect-Type": "application/json; charset=UTF-8"}
  }).then(responce => {
      if (!responce.ok) {
          alert("Failed to add")
      }else{
          alert("Contact added")
      }
      return responce.json();
  }).then(data => {
      console.log('Added')

  })
}

const formik = useFormik({
  initialValues:  {
      name: '',
      phone: '',
      address: '',
      age: '',
      image: ''
  },
  validate,
  onSubmit
})


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
                placeholder="Enter your name here"
                title="alphanumeric a-z"
                id="name"
                className="nameE"
                pattern="[a-zA-Z]{3-20}"
                // placeholder="Enter your name here"
                required
                onChange={formik.handleChange}
                value={formik.values.name}
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
                onChange={formik.handleChange}
                value={formik.values.phone}                
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
                onChange={formik.handleChange}
                value={formik.values.address}
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
                onChange={formik.handleChange}
                value={formik.values.age}
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
                onChange={formik.handleChange}
                value={formik.values.image}
                name="image"
              />
            </div>

            <div className="box">
              <input
                className="submit"
                type="button"
                onClick={formik.handleSubmit}
                
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

export default Form;
