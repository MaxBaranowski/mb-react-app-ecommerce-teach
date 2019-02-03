import styled from "styled-components";

export const ButtonCart = styled.button`
    text-transform: capitalize;
    font-size: 1.43rem;
    background: transparent;
    border: .05rem solid var(--main-light-blue-color);
    color: var(--main-light-blue-color);
    border-radius: .5rem;
    paddding: .2rem .5rem;
    cursor: pointer;
    margin: .2rem .5rem;
    transition: all .1s ease-in-out;
        &:hover{
            color: var(--main-yellow-color);
            border-color: var(--main-yellow-color);
        }
        &:focus{
            outline: none;
        }
`;