import { Row } from "components/Rows";
import { ITask } from "interfaces";
import { Container } from "./styled";

export * from "./styled";

type GridProps = {
  className?: string;
  dados?: ITask[];
};

export function NewGrid({ className, dados }: GridProps) {
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
          {dados?.map((item) => {
            return(
              <Row key={item.id} dados={item}/>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
