import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./Data_5";

export default function Shope({ box, setBox }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (category) => {
    const element = data.filter((product) => product.Category === category);
    setBox(element);
  };

  const handlePrice = (min, max) => {
    const element = data
      .filter((product) => {
        const price = parseFloat(product.price.replace("$", ""));
        return price >= min && price <= max;
      })
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      });
    setBox(element);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = box.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <div className="div_1 img-fluid">
        <span className="span">
          <center className="fs-3 justify-content-center d-flex align-items-center" style={{ height: "200px" }}>
            <h1 className="font-bold">Shop</h1>
          </center>
        </span>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="d-flex gap-4 flex-wrap">
          <div className="dropdown mb-3">
            <button
              className="dropdown-toggle btn btn-primary text-dark"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Product category
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" onClick={() => handleSort("Serum")} href="#!">
                  Serum
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handleSort("shampoo")} href="#!">
                  Shampoo
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => setBox(data)} href="#!">
                  No filter
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown mb-3">
            <button
              className="dropdown-toggle btn btn-primary text-dark"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Product price
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <li>
                <a className="dropdown-item" onClick={() => handlePrice(0, 40)} href="#!">
                  $1 – $40
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handlePrice(41, 70)} href="#!">
                  $41 – $70
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => setBox(data)} href="#!">
                  No filter
                </a>
              </li>
            </ul>
          </div>

          <div className="w-100 mb-3">
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearch}
              className="form-control"
            />
          </div>
        </div>

        <div className="mt-6 row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col">
              <Link to={"/Shope/" + product._id} className="card text-dark text-decoration-none">
                <img src={product.img} alt={product.img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
