import "./Search.css"
import {TbSearch} from "react-icons/tb"

const Search = () => {
  return (
    <div className="wrap">
        <h1>KHARIIT</h1>
        <div className="search" />
            <input type="text" className="searchBar" placeholder="Enter the root letters in English or Arabic" />
           <button type="submit" className="searchButton" aria-label="search">
            <i><TbSearch/></i>
          </button>
        </div>
  )
}

export default Search