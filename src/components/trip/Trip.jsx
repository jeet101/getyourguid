import "./trip.css";
export const Trip = () => {
  return (
    <div className="trip-containar">
      <h2>Get inspired for your next trip</h2>
      <div className="trip-cards">
        <a
          href="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt9ae8a84111c22b5c/610d2fb45d80fd1b92ab88a6/NYC_Day-01.jpg?width=704&heigth=704&format=webp"
          className="trip-card"
        >
          <div className="trip-card-img">
            <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt97d281f70edf02e3/6225cbf62f117523f14ad6e4/NYC_Day-01_(1)_copy.png" />
          </div>
          <button className="trip-card-btn">Itinerary</button>
          <div className="trip-card-content">
            <p>48 hours in New York</p>
          </div>
        </a>
        <a
          href="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt9ae8a84111c22b5c/610d2fb45d80fd1b92ab88a6/NYC_Day-01.jpg?width=704&heigth=704&format=webp"
          className="trip-card"
        >
          <div className="trip-card-img">
            <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt97d281f70edf02e3/6225cbf62f117523f14ad6e4/NYC_Day-01_(1)_copy.png" />
          </div>
          <button className="trip-card-btn">Itinerary</button>
          <div className="trip-card-content">
            <p>48 hours in Chicago</p>
          </div>
        </a>
        <a
          href="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt9ae8a84111c22b5c/610d2fb45d80fd1b92ab88a6/NYC_Day-01.jpg?width=704&heigth=704&format=webp"
          className="trip-card"
        >
          <div className="trip-card-img">
            <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt97d281f70edf02e3/6225cbf62f117523f14ad6e4/NYC_Day-01_(1)_copy.png" />
          </div>
          <button className="trip-card-btn">Itinerary</button>
          <div className="trip-card-content">
            <p>48 hours in Las Vegas</p>
          </div>
        </a>
      </div>
    </div>
  );
};
