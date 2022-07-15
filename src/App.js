import React from "react";

// our libraries
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import Header from "./component/header/Header";

function App() {
  const date = new Date();
  console.log(date);

  const todayYear = date.getFullYear();
  const myName = "Sojod & Katia & Fhme";
  return (
    <div className="app">
      <Header mainHeading="My phonebook" />
      <Main />
      <Footer today={todayYear} myName={myName} />
    </div>
  );
}

export default App;
