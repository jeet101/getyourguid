import "./searchBar.css";
export const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search_input"
        type="search"
        placeholder="Where are you going?"
      />
      <button className="search_button">Search</button>
    </div>
  );
};
