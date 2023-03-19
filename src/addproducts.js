import React, { useEffect, useState} from "react";
import swal from 'sweetalert';
import "./addproducts.css";
import axios from "axios";
function Addproducts() {

  useEffect(()=>{
    // if user don not login , redirect to  'localhost:3000/'
    let login = localStorage.getItem("login");
    if(!login){
      alert("you must sign in and login")
      window.location = '/';
    }
    // for scroll down after load component
    window.scrollTo(0, 820)
  },[])
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [linkpic, setLinkpic] = useState("");

  const sentIformationHttp = (data) => {
    axios
      .post(
        "https://anime-products-f8474-default-rtdb.firebaseio.com/products.json",
        data
      )
      .then((res) => {
        console.log(res.status);

        // beautifull alert
        swal("product added","","success")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submited = () => {
    const data = { name: name, description: description, linkpic: linkpic };
    sentIformationHttp(data);
  };
  const name1 = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const description1 = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };
  const linkpic1 = (event) => {
    setLinkpic(event.target.value);
    console.log(linkpic);
  };
  return (
    <div className="back">
      please add products :
      <div className="t">
        name anime : <input type="text" onChange={name1} />
      </div>
      <div className="t">
      description : <input type="text" onChange={description1}/>
      </div>
      <div className="t">
      link of pic : <input type="text" onChange={linkpic1}/>
      </div>
      <div className="t">
        <button className="btn btn-success" onClick={submited}>
          add
        </button>
      </div>
    </div>
  );
}

export default Addproducts;
