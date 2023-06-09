import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@/components/Button";
import Input from "@/components/Input";
import * as S from "./styles";

export type ListAccountsProps = {
  openModal: (value: boolean) => void;
};

function createData(
  id: Number,
  title: string,
  description: number,
  category: number,
  value: number,
  date: number
) {
  return { id, title, description, category, value, date };
}

const rows = [createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0)];

const titles = ["Título", "Descrição", "Categoria", "Valor", "Data", "Excluir"];

export default function ListAccounts({ openModal }: ListAccountsProps) {
  return (
    <S.Wrapper>
      <S.Button>
        <Button isFilter onClick={() => openModal(true)}>
          Adicionar
        </Button>
      </S.Button>
      <S.FiltersAndDataTable>
        <S.Filters>
          <S.Filter>
            <Input
              label="Data inicial"
              type="date"
              name="initialDate"
              isFilter
            ></Input>
          </S.Filter>
          <S.Filter>
            <Input
              label="Data final"
              type="date"
              name="finalDate"
              isFilter
            ></Input>
          </S.Filter>
          <S.Filter>
            <Input
              label="Título"
              type="text"
              placeholder="Título"
              name="title"
              isFilter
            ></Input>
          </S.Filter>
          <S.Filter>
            <Input
              label="Descrição"
              type="text"
              placeholder="Descrição"
              name="description"
              isFilter
            ></Input>
          </S.Filter>
        </S.Filters>
        <TableContainer component={Paper} sx={{ mt: 1 }}>
          <Table sx={{ minWidth: 650 }} aria-label="list accounts">
            <TableHead>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    fontSize: 15,
                    fontWeight: "bold",
                  },
                }}
              >
                {titles.map((title, index) => (
                  <TableCell key={index.toString()}>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                      fontSize: 15,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell>
                    <S.IconDelete size={30} onClick={(ev) => console.log(ev)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </S.FiltersAndDataTable>
    </S.Wrapper>
  );
}
