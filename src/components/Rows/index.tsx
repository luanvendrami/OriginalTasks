import { Button } from "components/Button";
import { NewModal } from "components/Modal";
import { ITask } from "interfaces";
import { ReactNode, useState } from "react";
import { Badge, Container } from "./styled";

type row = {
  dados: ITask;
  children: ReactNode;
};

export function Row({ dados, children }: row) {
  return <Container key={dados.id}>{children}</Container>;
}
