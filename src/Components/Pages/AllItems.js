import React from "react";
import useServices from "../../Hooks/useServices";

const AllItems = ({ serviceItem }) => {
  const { name, _id, picture, detail, price, quantity, sname } = serviceItem;

  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you deleat ?");
    if (proceed) {
      const url = `https://intense-fjord-15672.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(data);
            const remaining = services.filter(
              (serviceItem) => serviceItem._id !== id
            );
            setServices(remaining);
          }
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
            <h6>Price: $ {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Supplier Name : {sname} </h6>
            <p className="card-text">Details: {detail}</p>

            <button
              className="btn btn-danger"
              onClick={() => handleDelete(serviceItem._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
