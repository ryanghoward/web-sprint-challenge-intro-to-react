import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    background-color: black;
    border: 1px solid red;
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
                <CharacterCard key={index}>
                    <StyledName>{res.name}</StyledName>
                    <StyledH2>{res.gender}</StyledH2>
                </CharacterCard>
            })}
        </div>
    )
}

export default Character;