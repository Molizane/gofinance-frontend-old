import { useRouter } from "next/dist/client/router";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { MdOutlineAttachMoney,  MdMoneyOff } from "react-icons/md";
import * as S from "./styles";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const router = useRouter();

  return (
    <S.Container>
      <S.Header>
        <S.Link>
          <S.Logo
            src="/img/logo-finance.svg"
            onClick={() => router.replace("/")}
          />
        </S.Link>
        <S.Links>
          <S.Link onClick={() => router.replace("/categories-receivement")}>
            <RiMoneyDollarCircleLine size={30} />
          </S.Link>
          <S.Link onClick={() => router.replace("/categories-debit")}>
            <GrMoney size={30} />
          </S.Link>
          <S.Link onClick={() => router.replace("/accounts-receivement")}>
            <MdOutlineAttachMoney size={30} />
          </S.Link>
          <S.Link onClick={() => router.replace("/accounts-debit")}>
            <MdMoneyOff size={30} />
          </S.Link>
        </S.Links>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.Container>
  );
};

export default DefaultLayout;
