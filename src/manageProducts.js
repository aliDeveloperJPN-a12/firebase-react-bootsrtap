import React, { useEffect, useState } from "react";
import axios from "axios";
import "./manageProducts.css";
function ManageProducts() {
  useEffect(() => {
    // if user don not login , redirect to  'localhost:3000/'
    let login = localStorage.getItem("login");
    if (!login) {
      alert("you must sign in and login")
      window.location = "/";
    }
    // for scroll down after load component
    window.scrollTo(0, 820);
  }, []);

  // for delete product by custom id of firebase database
  const deleteproducts = (id) => {
    console.log(id);
    axios
      .delete(
        `https://anime-products-f8474-default-rtdb.firebaseio.com/products/${id}.json`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("delete done");
    window.location = "/manage";
  };
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://anime-products-f8474-default-rtdb.firebaseio.com/products.json"
      )
      .then((res) => {
        const products1 = Object.keys(res.data);
        const prod = [];
        products1.map((item) => {
          prod.push({
            name: res.data[item].name,
            description: res.data[item].description,
            linkpic: res.data[item].linkpic,
            id: item,
          });
        });
        setData(prod);
      });
  }, []);

  if (data) {
    var products = data;
    var showProducts = products.map((item) => {
      return (
        <div className="border-style">
          <div>{item.name}</div>
          <div>{item.description}</div>
          <button
            className="btn btn-danger"
            onClick={() => deleteproducts(item.id)}
          >
            delete
          </button>
        </div>
      );
    });
  }

  return <div>{showProducts}</div>;
}

export default ManageProducts;
