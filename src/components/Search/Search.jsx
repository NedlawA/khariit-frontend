import "./Search.css"
import RootDisplay from "../RootDisplay/RootDisplay"
import {TbSearch} from "react-icons/tb"

const Search = props => {
  return (
    <div className="wrap">
        <h1>KHARIIT</h1>
        <div className="search" />
            <input type="text" className="searchBar" placeholder="Enter the root letters in English or Arabic" />
           <button type="submit" className="searchButton" aria-label="search">
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
          />))
            }
          </section>
        </div>
  )
}

export default Search