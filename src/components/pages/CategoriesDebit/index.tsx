import { useState } from "react";
import ListCategories from "@/components/ListCategories";
import CategoriesDebitAdd from "./components/CategoriesDebitAdd";
import * as S from "./styles";

const CategoriesDebit = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (value: boolean) => {
    setModalIsOpen(value);
  };

  return (
    <>
      <S.Wrapper>
        <ListCategories openModal={openModal} />
      </S.Wrapper>
      <S.ModalArea>
        <CategoriesDebitAdd getValueOpen={openModal} isOpen={modalIsOpen} />
      </S.ModalArea>
    </>
  );
};

export default CategoriesDebit;
