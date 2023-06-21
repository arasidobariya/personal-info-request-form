import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './FormInputs.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const FormInputs = () => {
  const [nationality, setNationality] = useState('');

  const handleChange = (event) => {
    setNationality(event.target.value);
  };

  return (
    <Card component='form' className='card'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='First Name'
            label='First Name'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='Last Name'
            label='Last Name'
            variant='outlined'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="Father's Full Name"
            label="Father's Full Name"
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="Mother's Full Name"
            label="Mother's Full Name"
            variant='outlined'
          />
        </Grid>
        <Grid item xs={8} sm={2}>
          <TextField
            fullwidth
            id='Passport No.'
            label='Passport No.'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='Address'
            label='Address'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth id='E-mail' label='E-mail' variant='outlined' />
        </Grid>
        <Grid item xs={8} sm={2}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label='Birth Date' margin='normal' />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item xs={8} sm={4}>
          <FormControl fullWidth margin='normal'>
            <InputLabel id='demo-simple-select-label'>Nationality</InputLabel>
            <Select
              value={nationality}
              label='nationality'
              onChange={handleChange}
            >
              <MenuItem value={1}>IND</MenuItem>
              <MenuItem value={2}>USA</MenuItem>
              <MenuItem value={3}>CAD</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin='normal'>
            <FormLabel>Please Select Gender</FormLabel>
            <RadioGroup row name='row-radio-buttons-group'>
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Degree</TableCell>
                  <TableCell align='center'>School</TableCell>
                  <TableCell align='center'>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <TextField />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <TextField />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <TextField />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FormInputs;
