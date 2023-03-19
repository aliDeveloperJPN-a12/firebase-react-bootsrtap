import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import "./login.css";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    // for scroll down after load component
    window.scrollTo(0, 820);

    axios
      .get(
        "https://anime-products-f8474-default-rtdb.firebaseio.com/users.json"
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);
  const showisValid = () => {
    const products = Object.keys(data);
    const isvalid = products.find((item) => {
      return (
        data[item].username.toLowerCase() == username.toLowerCase() &&
        data[item].password == password
      );
    });
    if (isvalid) {
      // for beautifull alert
      // refrence site : https://github.com/t4t5/sweetalert
      swal(`welcome : ${data[isvalid].username.toLowerCase()}`,"login success","success");

      // for redirect after login success
      setTimeout(() => {
        window.location = "/";
      }, 3000);

      props.loginValid();
    } else {
      swal("username or password invalid", "", "error");
    }
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
      login page :
      <div className="t">
        gmail : <input type="text" onChange={uname} />
      </div>
      <div className="t">
        password : <input type="password" onChange={pass} />
      </div>
      <div className="t">
        <button className="btn btn-primary" onClick={showisValid}>
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
