import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useServices from "../../Hooks/useServices";

const MyItemsCards = ({ myitem }) => {
  const { name, _id, picture, detail, price, quantity, sname } = myitem;

  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you deleat ?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter(
            (serviceItem) => serviceItem._id !== id
          );
          setServices(remaining);
        });
    }
  };
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <h6>price:$ {price}</h6>
            <h6>quantity {quantity}</h6>
            <h6>Supplier Name : {sname} </h6>

            <p className="card-text"> Details: {detail}</p>

            <button
              className="btn btn-danger"
              onClick={() => handleDelete(myitem._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItemsCards;
