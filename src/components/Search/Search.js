import React from "react";
import "./a.css";

function Search({ location, handleSelectChange, handleSearch }) {
  return (
    <div className="search">
      <select value={location} onChange={handleSelectChange}>
        <option value="">Select Location</option>
        <option value="tunisia">Tunisia</option>
        <option value="france">France</option>
        <option value="germany">Germany</option>
        <option value="italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Colombia">Colombia</option>
        <option value="Russia">Russia</option>
      </select>
      <button onClick={handleSearch} disabled={!location}>
        Search
      </button>
    </div>
  );
}

export default Search;
