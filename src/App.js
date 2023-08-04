import "./App.css"
import Search from "./components/Search/Search"
import NavBar from "./components/NavBar/NavBar"
import AddUpdateForm from "./components/AddUpdateForm/AddUpdateForm";
import React, { useState } from "react";
import axios from 'axios'
import Chart from "./components/Chart/Chart";
import Tree from "./components/Chart/Tree";


const baseUrl = process.env.REACT_APP_BACKEND
const treeData = {
  name: 'x-b-z',
  children: [
    {
      name: ['khabza', 'to bake'],
      children: [
        { name: ['khubzu', 'bread'] },
        { name: ['mahkbaz', 'bakery'] },
        { name: ['khibaaza', 'the art of baking'] },
        { name: ['khubaaz','baker'] },
      ],
    },
    
  ],
};
const App = () => {
  const [rootDisplay, setRootDisplay] = useState([]);
  const [allRootsDisplay, setAllRootsDisplay] = useState([])
  
  const onGetAll = () => {
    axios
    .get(`${baseUrl}/words`)
    .then((res) => {setRootDisplay(res.data); setAllRootsDisplay(res.data)})
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
    <h3>Tree Demo</h3>
    <Tree data={treeData} />
    <h3>Sunburst Demo</h3>
    <Chart data={treeData} />
    </div>
  )
}

export default App