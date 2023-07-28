import "./App.css"
import Search from "./components/Search/Search"
import NavBar from "./components/NavBar/NavBar"
import React, { useState, useEffect } from "react";
import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND

const App = () => {
  const [rootDisplay, setRootDisplay] = useState([]);
  const onGetAll = () => {
    axios
      .get(`${baseUrl}/words`)
      .then((res) => setRootDisplay(res.data))
      .catch((err) => console.error(err));

  }
  
  return (
    <div>
    <NavBar />
    <Search />
    </div>
  )
}

export default App