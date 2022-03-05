import { Button } from "components/Button";
import { NewModal } from "components/Modal";
import { ITask } from "interfaces";
import { useState } from "react";
import { Badge, Container } from "./styled";

type row = {
  dados: ITask
};

export function Row({ dados }: row) {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewModal(){
  setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewModal(){
  setIsNewTransactionModalOpen(false);
  }

  return (
    <Container key={dados.id}>
      <td>{dados.title}</td>
      <td>{dados.description}</td>  
      <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(dados.created_at))}</td>
      <td>
        <Badge className={dados.finished ? "buttonBadgeTrue" : "buttonBadgeFalse"}>
        <span>{dados.finished ? "Finalizado" : "Pendente"}</span>
        </Badge>
      </td>
      <td width={400}>
        <Button className="button1" buttonName="Primeiro" onClick={handleOpenNewModal} />
        <NewModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewModal} dados={dados} value={1}/>
        <Button className="button2" buttonName="Segundo"  onClick={handleOpenNewModal}  />
        <NewModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewModal} dados={dados} value={2}/>
        <Button className="button3" buttonName="Terceiro" />
        <Button className="button4" buttonName="Quarto" />
      </td>
      
    </Container>
  );
}
