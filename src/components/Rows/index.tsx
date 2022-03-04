import { Button } from "components/Button";
import { ITask } from "interfaces";
import { Badge, Container } from "./styled";

type row = ITask;

export function Row({ id, title, description, finished, created_at }: row) {
  return (
    <Container key={id}>
      <td>{title}</td>
      <td>{description}</td>
      <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(created_at))}</td>
      <td>
        <Badge className={finished ? "buttonBadgeTrue" : "buttonBadgeFalse"}>
        <span>{finished ? "Finalizado" : "Pendente"}</span>
        </Badge>
      </td>
      <td width={400}>
        <Button className="button1" buttonName="Primeiro" />
        <Button className="button2" buttonName="Segundo" />
        <Button className="button3" buttonName="Terceiro" />
        <Button className="button4" buttonName="Quarto" />
      </td>
    </Container>
  );
}
