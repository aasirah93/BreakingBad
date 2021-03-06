import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import Search from './components/Search'
import Pagination from './components/Pagination'
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {fetch("https://www.breakingbadapi.com/api/characters")
  .then(res => res.json())
  .then(
    (result) => {
      
      setItems(result);
      setIsLoading(false);
     
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    
  )}

  useEffect(() => {
    fetchData()
  }, [])
  console.log(items)



  return (
    <div className='container'>
      <Header/>
      <Search/>
      <Pagination/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
