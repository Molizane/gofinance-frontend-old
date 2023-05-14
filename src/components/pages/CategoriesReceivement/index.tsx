import { useState } from "react";
import ListCategories from "@/components/ListCategories";
import CategoriesReceivementAdd from "./components/CategoriesReceivementAdd";
import * as S from "./styles";

const CategoriesReceivement = () => {
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
        <CategoriesReceivementAdd
          getValueOpen={openModal}
          isOpen={modalIsOpen}
        />
      </S.ModalArea>
    </>
  );
};

export default CategoriesReceivement;
