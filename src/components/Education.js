import {
  Card,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Typography,
} from '@mui/material';

const Education = ({ education }) => {
  return (
    <Card sx={{ m: 2, p: 2 }}>
      <Typography variant='h5' gutterBottom>
        Education
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Degree</TableCell>
            <TableCell>School</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {education &&
            education.map((ed, index) => {
              var split = ed.split(' ');
              return (
                <TableRow key={index}>
                  <TableCell>{split[0]}</TableCell>
                  <TableCell>{split[1]}</TableCell>
                  <TableCell>{split[2]}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </Card>
  );
};
export default Education;
