import React from "react";
import "./footer.css";
//footer details
function Footer(props) {
  const { today, myName } = props;
  const code = (
    <footer className="footer">
      <p>
        &copy; {today} {myName}
      </p>
    </footer>
  );
  return code;
}

export default Footer;
