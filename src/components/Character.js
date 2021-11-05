import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    background-color: #2b3618;
    border: 1px solid lime;
    width: 50vw;
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
    const { characters } = props;

    return (
        <div>
            {characters.map((res, index) => {
                return (
                    <CharacterCard key={index}>
                    <StyledName>{res.name}</StyledName>
                    <StyledH2>{res.gender}</StyledH2>
                    </CharacterCard>
                )
            })}
        </div>
    )
}

export default Character;