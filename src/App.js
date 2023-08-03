import "./App.css"
import Search from "./components/Search/Search"
import NavBar from "./components/NavBar/NavBar"
import AddUpdateForm from "./components/AddUpdateForm/AddUpdateForm";
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

  const handleWordSubmit = (userFormData) => {
      axios
        .post(`${baseUrl}/words`, {letters: userFormData.letters, engLetters: userFormData.engLetters })
        .then((res) => console.log("success"))
        .catch((err) => console.error(err))
    }

  const handleSearch = userSearchData => {
    let param = '';
    const english = /^[A-Za-z0-9]*$/;
    if (english.test(userSearchData.data[0])) {
      param = 'en_letters?engLetters=';}
    else {param = 'ar_letters?letters='}
    axios
      .get(`${baseUrl}/words/${param}${userSearchData.data}`)
      .then((res) => setRootDisplay(res.data))
      .catch((err)=>console.error(err))
  }

  return (
    <div>
    {/* <NavBar /> */}
    <Search rootDisplay={rootDisplay} onGetAll={onGetAll} onDelete={onDelete} handleSearch={handleSearch} />
    <AddUpdateForm handleWordSubmit={handleWordSubmit}/>
    </div>
  )
}

export default App