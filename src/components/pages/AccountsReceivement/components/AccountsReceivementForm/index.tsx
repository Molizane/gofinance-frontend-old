import Button from "@/components/Button";
import Input from "@/components/Input";
import * as S from "./styles";

export default function AccountsReceivementForm() {
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
        <Input
          name="category"
          label="Categoria"
          placeholder="Informe a categoria"
        />
        <Input
          name="value"
          label="Valor"
          type="number"
          placeholder="Digite o valor"
        />
        <Input
          name="date"
          label="Data"
          type="date"
          placeholder="Digite a data"
        />
      </S.Inputs>
      <S.ButtonArea>
        <Button>Salvar</Button>
      </S.ButtonArea>
    </S.Container>
  );
}
