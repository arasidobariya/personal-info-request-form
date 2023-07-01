import {
  Card,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Typography,
} from '@mui/material';

const Experience = ({ experience }) => {
  return (
    <Card sx={{ m: 2, p: 2 }}>
      <Typography variant='h5' gutterBottom>
        Experience
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employer Name</TableCell>
            <TableCell>Job Position</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {experience &&
            experience.map((exp, index) => {
              var split = exp.split(' ');
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
export default Experience;
