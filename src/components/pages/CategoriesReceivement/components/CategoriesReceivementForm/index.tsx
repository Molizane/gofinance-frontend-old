import Button from "@/components/Button";
import Input from "@/components/Input";
import * as S from "./styles";

export default function CategoriesReceivementForm() {
  return (
    <S.Container>
      <S.Inputs>
        <Input
          name="title"
          label="Título"
          placeholder="Digite o título"
          maxLength={50}
        />
        <Input
          name="description"
          label="Descrição"
          placeholder="Digite a descrição"
          maxLength={500}
        />
      </S.Inputs>
      <S.ButtonArea>
        <Button>Salvar</Button>
      </S.ButtonArea>
    </S.Container>
  );
}
