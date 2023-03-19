import React, { useState, useEffect } from "react";
import axios from "axios";
import "./products.css";
import Cards from "./cards";
function Products() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://anime-products-f8474-default-rtdb.firebaseio.com/products.json"
      )
      .then((res) => {
        const products1 = Object.keys(res.data);
        const prod = []
        products1.map((item) => {
          prod.push({name : res.data[item].name , description: res.data[item].description , linkpic: res.data[item].linkpic , id:item });
        });
        setData(prod)
      });
  }, []);

  


  if (data) {
    var products = data
    var showProducts = products.map((item) => {
      return <Cards name={item.name} description={item.description} linkpic={item.linkpic} id={item.id}/>;
    });
  }






  return <div className="flexbos-wrap">{showProducts}</div>;
}

export default Products;
