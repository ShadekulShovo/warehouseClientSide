import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const InventoryCard = ({ inventor }) => {
  const { name, _id, picture, detail, price } = inventor;
  const navigate = useNavigate();

  const navigateToServiceDetail = (_id) => {
    navigate(`/inventory/${_id}`);
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

            {/* <Link to="/inventory">
                        
                        
                        
                        </Link>  */}

            <Button
              variant="primary"
              onClick={() => navigateToServiceDetail(_id)}
            >
              Update Inventory
            </Button>

            {/* onClick={() => navigateToServiceDetail(_id)}   */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
