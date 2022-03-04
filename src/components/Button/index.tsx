import { ITask } from "interfaces";
import { MouseEventHandler } from "react";
import { Container } from "./styled";

type ButtonProps = {
  className?: string;
  buttonName?: string;
  onClick?: MouseEventHandler;
};

export function Button({ className, buttonName, onClick }: ButtonProps) {
  return (
    <Container>
      <button onClick={onClick} className={className}>
        <span>{buttonName}</span>
      </button>
    </Container>
  );
}
  