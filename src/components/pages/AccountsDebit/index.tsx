import { useState } from "react";
import ListAccounts from "@/components/ListAccounts";
import AccountsDebitAdd from "./components/AccountsDebitAdd";
import * as S from "./styles";

const AccountsDebit = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (value: boolean) => {
    setModalIsOpen(value);
  };

  return (
    <>
      <S.Wrapper>
        <ListAccounts openModal={openModal} />
      </S.Wrapper>
      <S.ModalArea>
        <AccountsDebitAdd getValueOpen={openModal} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  );
};

export default AccountsDebit;
