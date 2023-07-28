import "./App.css"
import Search from "./components/Search/Search"
import NavBar from "./components/NavBar/NavBar"
import React, { useState } from "react";
import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND

const App = () => {
  const [rootDisplay, setRootDisplay] = useState([]);
  

  
  const onGetAll = () => {
    axios
    .get(`${baseUrl}/words`)
    .then((res) => setRootDisplay(res.data))
    .catch((err) => console.error(err));
  };

  const onDelete = (id) => {
    axios
      .delete(`${baseUrl}/words/${id}`)
      .then((res) => {
        setRootDisplay((prev) => prev.filter((root) => root.id !== id))
      })
      .catch((err) => console.error(err))
    };
  
  
  return (
    <div>
    <NavBar />
    <Search rootDisplay={rootDisplay} onGetAll={onGetAll} onDelete={onDelete} />
    </div>
  )
}

export default App