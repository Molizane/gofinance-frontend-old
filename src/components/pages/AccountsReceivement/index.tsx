import { useState } from "react";
import ListAccounts from "@/components/ListAccounts";
import AccountsReceivementAdd from "./components/AccountsReceivementAdd";
import * as S from "./styles";

const AccountsReceivement = () => {
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
        <AccountsReceivementAdd getValueOpen={openModal} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  );
};

export default AccountsReceivement;
