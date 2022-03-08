import { ITask } from "interfaces";
import { MouseEventHandler } from "react";
import { Container } from "./styled";

type ButtonProps = {
  className?: string;
  buttonName?: string;
  onClick?: MouseEventHandler
  id: string;
};

export function Button({ className, buttonName, onClick, id }: ButtonProps) {
  return (
    <Container>
      <button onClick={onClick} className={className} id={id}>
        <span>{buttonName}</span>
      </button>
    </Container>
  );
}
  