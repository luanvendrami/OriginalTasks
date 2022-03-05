import { ITask } from "interfaces";
import Modal from "react-modal";
import { Container, Textarea } from "./styled";
import fechar from "../../assents/x.svg";
import { useState } from "react";

interface NewTransactionModalprops {
  isOpen: boolean;
  onRequestClose: () => void;
  dados?: ITask;
  value: number;
}
export function NewModal({
  isOpen,
  onRequestClose,
  dados,
  value,
}: NewTransactionModalprops) {

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={fechar} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Título</h2>
        <Textarea
          className="textAreaTitle"
          value={dados?.title}
          disabled={true}
        />
        <br />
        <h2>Descrição</h2>
        <Textarea
          className="textAreaBody"
          value={dados?.description}
          disabled={true}
        />
      </Container>
    </Modal>
  );
}
