import { useEffect, useState } from "react";
import * as S from "./styles";

export type ModalProps = {
  title?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  getValueOpen: (value: boolean) => void;
};

export default function Modal({
  title,
  children,
  isOpen,
  getValueOpen,
}: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
    getValueOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {isModalOpen && (
        <S.Wrapper>
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.CloseIcon
              onClick={() => {
                getValueOpen(false);
                setIsModalOpen(false);
              }}
            />
          </S.Header>
          <S.Content>{children}</S.Content>
        </S.Wrapper>
      )}
    </>
  );
}
