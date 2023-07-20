import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import * as S from "./styles";
import { useState } from "react";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  onCloseNewTransactionModal,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onCloseNewTransactionModal}
      >
        <img src={closeImg} alt="fechar modal" />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type == "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type == "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="saida" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
