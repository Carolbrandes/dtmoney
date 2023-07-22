import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import * as S from "./styles";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  onCloseNewTransactionModal,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    onCloseNewTransactionModal();
  }

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

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

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

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
