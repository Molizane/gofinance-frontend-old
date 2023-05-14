import { AiOutlineCloseCircle } from "react-icons/ai";
import styled, { css } from "styled-components";

export const Wrapper = styled.div.attrs({
  "data-testid": "WrapperCard",
})`
  height: 100%;
  width: 70vw;

  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
  `}

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  margin-top: 10px;
  padding-top: 5px;

  border-radius: 7px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 10px 10px;

  align-items: top;
  padding-right: 3px;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: ${theme.colors.black};
    display: flex;
    align-items: flex-start;
  `}
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: ${theme.colors.black};
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 25px;
    cursor: pointer;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;
