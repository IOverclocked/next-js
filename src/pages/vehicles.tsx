import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface IProps {
  list: {
    id: number,
    brand: string,
    model: string,
    ownerId: number
  }[]
}

export default function Vehicles({ list }: IProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Model</TableCell>
            <TableCell align="center">Owner Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(({ id, brand, model, ownerId}) => (
            <TableRow key={id}>
              <TableCell align="center">{id}</TableCell>
              <TableCell align="center">{brand}</TableCell>
              <TableCell align="center">{model}</TableCell>
              <TableCell align="center">{ownerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

Vehicles.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/vehicles');
  const json = await res.json();
  return {
    list: json
  }
}
