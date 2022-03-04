import styled from "styled-components";

export const Container = styled.tr`
  transition: filter 0.2s;
  &:hover {
    filter: brightness(98%);
  }
`;

export const Badge = styled.button`
    height: 2rem;
    border: none;
    border-radius: 0.25rem;
    cursor: default;

  span {
    display: inline-block;
    margin: auto;
    font-size: 1rem;
    color: var(--text-button);
    text-align: center;
  }

  &.buttonBadgeTrue {
    background-color: var(--grenLight);
  }

  &.buttonBadgeFalse {
    background-color: var(--red);
  }
`;
