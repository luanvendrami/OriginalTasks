import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const Textarea = styled.textarea`
  &.textAreaTitle {
    display: block;
    font-size: 1rem;
    height: 1rem;
    min-height: 2rem;
    overflow: hidden;
    padding: 0 0.5rem;
    margin: 0 0 2rem;
    resize: none;
    width: 100%;
  }

  &.textAreaBody {
    display: block;
    font-size: 1rem;
    height: 3rem;
    min-height: 6rem;
    overflow: hidden;
    padding: 0 0.5rem;
    margin: 0 0 2rem;
    resize: none;
    width: 100%;
  }
`;
