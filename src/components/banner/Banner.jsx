import { SearchBar } from "../searchBar/SearchBar";
import "./banner.css";
export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-contener">
        <div className="banner-Search-bar">
          <SearchBar />
        </div>
        <div className="banner-content">
          <h1>
            Escape the tourist traps with unforgettable travel experiences
          </h1>
        </div>
      </div>
    </div>
  );
};
