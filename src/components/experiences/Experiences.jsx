import "./experiences.css";
import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
export const Experiences = () => {
  return (
    <div className="experiences-container">
      <div className="experiences-hading">
        <h1>Our favorite experiences worldwide</h1>
      </div>
      <div className="experiences-carosol">
        <div className="carousel-container">
          <Carousel
            style={{
              width: "91%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
            focusOnSelect={true}
            itemsToShow={4}
          >
            <div className="carousel-div">
              <img src="https://cdn.getyourguide.com/img/tour/60d04e4533d6a.jpeg/98.jpg" />
              <div className="carousel-contect">
                <h3>
                  Las Vegas: Antelope Canyon & Horseshoe Bend Tour with Pickup
                </h3>
                <p>Small group</p>
                <p>Duration 14 hours</p>
                <h3>From $ 3,663</h3>
              </div>
            </div>
            <div className="carousel-div">
              <img src="https://cdn.getyourguide.com/img/tour/5f8fef8cee832.jpeg/98.jpg" />
              <div className="carousel-contect">
                <h3>
                  From Miami: Key West Full-Day Trip with Snorkeling and
                  Transfer
                </h3>
                <p>Small group</p>
                <p>Duration 14 hours</p>
                <h3>From $ 3,663</h3>
              </div>
            </div>
            <div className="carousel-div">
              <img src="https://cdn.getyourguide.com/img/tour/459ac8be6adc7182.jpeg/98.jpg" />
              <div className="carousel-contect">
                <h3>Rome: Street Food Tour with Local Guide</h3>
                <p>Small group</p>
                <p>Duration 14 hours</p>
                <h3>From $ 3,663</h3>
              </div>
            </div>
            <div className="carousel-div">
              <img src="https://cdn.getyourguide.com/img/tour/60649b1dac3f1.jpeg/98.jpg" />
              <div className="carousel-contect">
                <h3>New York City: Champagne and Cheese Pairing Cruise</h3>
                <p>Small group</p>
                <p>Duration 14 hours</p>
                <h3>From $ 3,663</h3>
              </div>
            </div>
            <div className="carousel-div">
              <img src="https://cdn.getyourguide.com/img/tour/5dee237e800f2.jpeg/98.jpg" />
              <div className="carousel-contect">
                <h3>
                  Berlin: The Feuerle Collection - Art Museum Entrance Ticket
                </h3>
                <p>Small group</p>
                <p>Duration 14 hours</p>
                <h3>From $ 3,663</h3>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
