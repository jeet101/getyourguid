import "./destinations.css";
export const Destinations = () => {
  const items = [
    {
      url: "https://cdn.getyourguide.com/img/location/5ffeb52eae59a.jpeg/88.webp",
      text: "New York City",
    },
    {
      url: "https://cdn.getyourguide.com/img/location/5ffeb52eae59a.jpeg/88.webp",
      text: "New York City",
    },
    {
      url: "https://cdn.getyourguide.com/img/location/5ffeb52eae59a.jpeg/88.webp",
      text: "New York City",
    },
    {
      url: "https://cdn.getyourguide.com/img/location/5ffeb52eae59a.jpeg/88.webp",
      text: "New York City",
    },
    {
      url: "https://cdn.getyourguide.com/img/location/5ffeb52eae59a.jpeg/88.webp",
      text: "New York City",
    },
    {
      url: "https://cdn.getyourguide.com/img/location/5ffeb52eae59a.jpeg/88.webp",
      text: "New York City",
    },
  ];
  return (
    <>
      <div className="experiences-hading">
        <h1>Get beneath the surface of these destinations</h1>
      </div>
      <div className="Destinations-container">
        {items.map((e) => (
          <div className="Destinations-card">
            <img src={e.url} />
            <p>{e.text}</p>
          </div>
        ))}
      </div>
      ;
    </>
  );
};
