// import "./Search.css"
import RootDisplay from "../RootDisplay/RootDisplay"
import {TbSearch} from "react-icons/tb"
import { useState } from "react";

const initialSearchData = {data: ''}

const Search = props => {

  const [searchData, setSearchData] = useState(initialSearchData)

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    props.handleSearch(searchData);
    setSearchData(initialSearchData);
  };

  
  
  return (
    <div className="wrap">
        <h1>KHARIIT</h1>
        <div className="search" />
        <input value={searchData.data} onChange={handleChange} type="text" id="data" name="data" className="searchBar" placeholder="Enter the root letters in English or Arabic" />
           <button onClick={handleSearchSubmit} type="submit" className="searchButton" aria-label="search">
            <i><TbSearch/></i>
          </button>
          <button onClick={() => props.onGetAll()} className="getAll">See all roots</button>
        <section className="display">
            {props.rootDisplay.map((word) => (
            <RootDisplay 
          arabicRoot={word.letters}
          engLetters={word.engLetters}
          onDelete={props.onDelete}
          wordId={word.id}
          key={word.id}
          />))
            }
          </section>
          </div>
  )
}

export default Search