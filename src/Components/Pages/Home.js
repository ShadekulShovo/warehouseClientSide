import React, { useEffect, useState } from "react";
import InventoryCard from "../Inventory/InventoryCard";
import "./Home.css";
import {
  BeakerIcon,
  ChipIcon,
  CubeIcon,
  GlobeIcon,
  MenuIcon,
} from "@heroicons/react/solid";
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
              <h1> Wellcome To Our Electronics House</h1>
              <h2>Here you can find all kinds of electronics products. </h2>
              <p>
                Supplying our customers with the new, top-notch electronics is
                our motto.
              </p>

              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for.{" "}
              </p>
              <button type="button" class="btn btn-primary btn-lg">
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

      <section className="container">
        <h1 className="text-center">Other Services </h1>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <ChipIcon className="icon" />
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class=" h-100">
              <div class="card-body">
                <CubeIcon className="icon" />
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <GlobeIcon className="icon" />
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <MenuIcon className="icon" />
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h3 className="text-center mb-5"> Our customer Review</h3>
        <Slider {...settings}>
          <div>
            <div class=" text-center d-none d-md-block">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="wpx-100 img-round mgb-20 mx-auto"
                alt=""
              />
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div>
            <div class=" text-center d-none d-md-block">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="wpx-100 img-round mgb-20 mx-auto"
                alt=""
              />
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div>
            <div class=" text-center d-none d-md-block">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                className="wpx-100 img-round mgb-20 mx-auto"
                alt=""
              />
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
