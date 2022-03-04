import styled from "styled-components";

export const Container = styled.div`
  padding: 0.3rem;
  margin: 1rem 0;
  display: inline-flex;

  button {
    height: 2rem;
    border: none;
    border-radius: 0.25rem;
    align-items: center;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(98%);
    }

    span {
      display: inline-block;
      margin: auto;
      font-size: 1rem;
      color: var(--text-button);
      text-align: center;
    }

    &.button1{
      background-color: var(--green);
    }

    &.button2{
      background-color: var(--blue);
    }

    &.button3{
      background-color: var(--red);
    }

    &.button4{
      background-color: var(--orange);
    }

    
  }

`
;
