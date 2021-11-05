import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    background-color: #2b3618;
    border: 1px solid lime;
    width: 50vw;
    margin: 1em auto;
    opacity: 75%;
`

const StyledName = styled.h1`
    color: white;
`

const StyledH2 = styled.h2`
    color: white;
`

//~ Write your Character component here

const Character = (props) => {
    const { characters, films, actionFilms } = props;

    return (
        <div>
            {characters.map((res, index) => {
                return (
                    <CharacterCard key={index}>
                    <div>
                        <StyledName>{res.name}</StyledName>
                        <StyledH2>Gender: {res.gender}</StyledH2>
                        <StyledH2>Birth Year: {res.birth_year}</StyledH2>
                    </div>
                    <div>
                    {/* <StyledH2><a href={res.homeworld}>Home Planet</a></StyledH2> */}
                    <button onClick={() => actionFilms(films)}>{res.homeworld}</button>
                    </div>
                    </CharacterCard>
                )
            })}
        </div>
    )
}

export default Character;