import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Character from './components/Character';

const StyledHeader = styled.h1`
  font-size: 5em;
  color: #c0362c;
  transition: transform .4s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect (() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        // console.log(res.data);
        return setCharacterData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      {/* <StyledHeader className="Header">R E A C T W A R Z</StyledHeader> */}
      <StyledHeader><img src="https://see.fontimg.com/api/renderfont4/z0e0/eyJyIjoiZnMiLCJoIjo0MywidyI6MTAwMCwiZnMiOjQzLCJmZ2MiOiIjQjNBQTBFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UmVhY3QgV2Fycw/star-jedi-logo-doubleline1.png" alt="Star Wars fonts"/></StyledHeader>
      <Character className='Characters' characters={characterData} />
    </div>
  );
}

export default App;
