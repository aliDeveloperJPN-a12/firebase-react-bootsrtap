import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "./singup.css";
import axios from "axios";
function Signup() {
  useEffect(() => {
    // for scroll down after load component
    window.scrollTo(0, 820);
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sentIformationHttp = (data) => {
    if (username.includes("@") && username.includes(".com")) {
      axios
        .post(
          "https://anime-products-f8474-default-rtdb.firebaseio.com/users.json",
          data
        )
        .then((res) => {
          console.log(res.status);

          // beautifull alert
          swal("signin success", "", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    }else {
      swal("gmail invalid", "", "error");
    }
  };
  const submited = () => {
    const data = { username: username, password: password };
    sentIformationHttp(data);
  };
  const uname = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const pass = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  return (
    <div className="back">
      sign in page :
      <div className="t">
        gmail : <input type="text" onChange={uname} />
      </div>
      <div className="t">
        password : <input type="password" onChange={pass} />
      </div>
      <div className="t">
        <button className="btn btn-primary" onClick={submited}>
          sign up
        </button>
      </div>
      <br />
      <br />
      <a href="/login"> are you sign in befor </a>
    </div>
  );
}

export default Signup;
