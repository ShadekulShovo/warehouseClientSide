import React from "react";
import useServices from "../../Hooks/useServices";

const AllItems = ({ serviceItem }) => {
  const { name, _id, picture, detail, price } = serviceItem;

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
            <h5 className="card-title">{name}</h5>
            <h5>price:$ {price}</h5>
            <p className="card-text">{detail}</p>

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
