import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import {Container, Row} from 'reactstrap'
import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  height: auto;
  radius: 5%;
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;

  :hover{
    color: black;
    background-color: red;
  }
`

const CharacterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding-left: 75px;
  text-align: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [characterList, setCharacterList] = useState("");
const [nextPage, setNextPage] = useState("");
const [previousPage, setPreviousPage] = useState('');
const [currentPage, setPage] = useState('https://rickandmortyapi.com/api/character/?page=1')

const pageHandler = (direction)=>{
  if(direction==='next'){setPage(nextPage)
  }else if(direction==='prev'){
    if(!previousPage){

    }else{
      setPage(previousPage);
    }
  }
}

let allCharacters =[];
useEffect(()=>{
  axios.get(currentPage)
  .then(response=>{
    console.log(response)
    setCharacterList(response.data.results)
    setNextPage(response.data.info.next)
    setPreviousPage(response.data.info.prev)
  })
  .catch(err=>{console.log("Error", err)})

}, [currentPage])

if(characterList.length !==0){
  allCharacters =characterList.map((character)=>{
    return <Character key={character.id} name={character.name} episodes={character.episode.length} status={character.status} species={character.species}gender={character.gender}origin={character.origin} location={character.location} image={character.image}/>
  })
}

// console.log("characterList", characterList);
  return (
    <Container className="App">
      <h1 className="Header">Characters</h1>
      <CharacterRow>
      {allCharacters}
      </CharacterRow>
      <Button style={{left: '0'}} onClick={()=>{pageHandler('prev')}}>Previous</Button>
      <Button style={{right: '0'}} onClick={()=>{pageHandler('next')}}>Next</Button>
    </Container>
  );
}

export default App;
