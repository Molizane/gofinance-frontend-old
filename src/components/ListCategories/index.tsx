import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as S from "./styles";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Bold } from "styled-icons/boxicons-regular";

function createData(id: Number, title: string, description: string) {
  return { id, title, description };
}

const rows = [createData(1, "Frozen yoghurt", "Cool!")];

const titles = ["Título", "Descrição", "Excluir"];

export default function ListCategories() {
  return (
    <S.Wrapper>
      <S.Button>
        <Button isFilter>Adicionar</Button>
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
          <Table sx={{ minWidth: 650 }} aria-label="list categories">
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
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
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
