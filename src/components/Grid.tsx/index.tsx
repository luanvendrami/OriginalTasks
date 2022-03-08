import { Row } from "components/Rows";
import { ITask } from "interfaces";
import { ReactNode } from "react";
import { Container } from "./styled";

export * from "./styled";

type GridProps = {
  className?: string;
  children: ReactNode
};

export function NewGrid({ className, children }: GridProps) {
  return (
    <Container className={className}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Finalizado</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </Container>
  );
}
