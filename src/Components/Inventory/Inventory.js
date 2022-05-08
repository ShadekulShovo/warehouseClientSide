import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://intense-fjord-15672.herokuapp.com/service${serviceId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);

  const handelUpdate = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;

    const items = { quantity };

    const url = `https://intense-fjord-15672.herokuapp.com/service${serviceId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Users added successfully!!");
        event.target.reset();
      });
  };

  return (
    <div>
      <h1>This is Inventory: {service.name} </h1>

      <div class="card mb-3 w-25 mx-auto">
        <img src={service.picture} alt="" />
        <div class="card-body">
          <h5 class="card-title">Name : {service.name}</h5>
          <p class="card-text">Details: {service.detail}</p>
          <p class="card-text">Quantity: {service.quantity}</p>
        </div>
      </div>

      <h5>service name: {service.quantity}</h5>
      <form onSubmit={handelUpdate}>
        <input
          type="number"
          name="quantity"
          placeholder="Update Quantity"
          required
        />
        <input type="submit" value="update Items" />
      </form>
    </div>
  );
};

export default Inventory;
