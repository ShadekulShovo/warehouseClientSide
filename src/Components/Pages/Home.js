import React, { useEffect, useState } from "react";
import InventoryCard from "../Inventory/InventoryCard";
import "./Home.css";
import { StarIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Carousel } from "react-bootstrap";

import Slider from "react-slick";

const Home = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <dir className="col-md-6 d-flex align-items-center">
            <div>
              <h1>
                {" "}
                Introducing Our{" "}
                <span className="text-warning"> Electronics Mania </span>
              </h1>
              <h3>Here you can find all kinds of electronics products. </h3>
              <p>
                Supplying our customers with the new, top-notch electronics is
                our motto.
              </p>
              <button
                type="button"
                class="btn btn-outline-success btn-lg fs-3 fw-bold"
              >
                Learn More
              </button>
            </div>
          </dir>

          <div className="col-md-6 product">
            <div className="">
              <img
                src="https://img.freepik.com/free-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg?w=826"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-center my-5"> Inventory</h2>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center my-5">
            {inventory.map((inventor) => (
              <InventoryCard
                key={inventor._id}
                inventor={inventor}
              ></InventoryCard>
            ))}
          </div>
        </div>
      </section>

      <section className="container ">
        <h1 className="text-center">Why Choose us? </h1>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <QuestionMarkCircleIcon className="icon" />
                <h5 class="card-title">Best Quality</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class=" h-100">
              <div class="card-body">
                <QuestionMarkCircleIcon className="icon" />
                <h5 class="card-title">Budget Friendly</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <QuestionMarkCircleIcon className="icon" />
                <h5 class="card-title">Huge Collection</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <QuestionMarkCircleIcon className="icon" />
                <h5 class="card-title">Customer Satisfaction</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <h3 className="text-center mb-5"> Review & Testimony</h3>
        <Slider {...settings}>
          <div>
            <div class=" text-center d-none d-md-block">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="wpx-100 img-round mgb-20 mx-auto"
                alt=""
              />
              <h5>
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
              </h5>
              <p>Best Product .</p>
            </div>
          </div>
          <div>
            <div class=" text-center d-none d-md-block">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                className="wpx-100 img-round mgb-20 mx-auto"
                alt=""
              />
              <h5>
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
              </h5>
              <p>Best Product .</p>
            </div>
          </div>
          <div>
            <div class=" text-center d-none d-md-block">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                className="wpx-100 img-round mgb-20 mx-auto"
                alt=""
              />
              <h5>
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
              </h5>
              <p>Best Product .</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="container-fluid footer bg-dark">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3 bg-dark">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Category
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Inventory
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-muted bg-dark">
            © 2021 Electronics Mania, Inc
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
