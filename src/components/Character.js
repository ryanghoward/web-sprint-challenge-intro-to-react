import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
    background-color: #2b3618;
    border: 1px solid lime;
    width: 50vw;
    margin: 1em auto;
    opacity: 75%;
`

const StyledName = styled.h1`
    color: white;
    font-size: 2em;
    text-decoration: underline yellow;
    transition: transform .7s ease-in-out;
    &:hover {
        transform: rotate(180deg);
    }

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
                    <CardStyles key={index}>
                        <div>
                            <StyledName>{res.name}</StyledName>
                            <StyledH2>Gender: {res.gender}</StyledH2>
                            <StyledH2>Birth Year: {res.birth_year}</StyledH2>
                        </div>
                    </CardStyles>
                )
            })}
        </div>
    )
}

export default Character;