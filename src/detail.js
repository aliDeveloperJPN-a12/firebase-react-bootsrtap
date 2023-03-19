import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detail.css";
function Detail() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    // for scroll down after load component
    window.scrollTo(0, 820);

    console.log(window.location.hash.substring(1));
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
    var productFilter = data.find((item) => {
      return item.id == window.location.hash.substring(1);
    });
    console.log(productFilter.name);
  }

  return (
    <div className="t2">
      {/*خالی هست به صوذت زیر از شرط استفاده کردم productFilter چون دفعه اول  */}
      {/* <img src={productFilter ? productFilter.linkpic : "..."}></img>
    <div>{productFilter ? productFilter.name : "..."}</div>
    <div>{productFilter ? productFilter.description : "..."}</div> */}

      {/* ------------------------------------------------------------ */}
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">AnimeMAKET.ir</h3>
              <h6 className="card-subtitle">go to the best anime with US</h6>
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                  <div className="white-box text-center">
                    <img
                      src={productFilter ? productFilter.linkpic : "..."}
                      className="img-responsive t1"
                    />
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                  <h4 className="box-title mt-5">
                    {productFilter ? productFilter.name : "..."}
                  </h4>
                  <p>{productFilter ? productFilter.description : "..."}</p>
                  <button className="btn btn-primary btn-rounded">
                    watch episodes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
    </div>
  );
}

export default Detail;
