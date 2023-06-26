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
import Typography from '@mui/material/Typography';
import { DateField } from '@mui/x-date-pickers/DateField';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const countries = ['CAD', 'IND', 'USA'];

const FormInputs = (props) => {
  let educationraws = new Array(3).fill('');
  let educationcolumn = new Array(3).fill('');

  let experienceTableRaws = new Array(3).fill('');
  let experienceTableColumn = new Array(3).fill('');

  // const [enteredFirstName, setEnteredFirstName] = useState('');
  // const [enteredLastName, setEnteredLastName] = useState('');
  // const [enteredFatherName, setEnteredFatherName] = useState('');
  // const [enteredMotherName, setEnteredMotherName] = useState('');
  // const [enteredPassportNo, setEnteredPassportNo] = useState('');
  // const [enteredAddress, setEnteredAddress] = useState('');
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredBdate, setEnteredBdate] = useState('');
  // const [enteredGender, setEnteredGender] = useState('');
  // const [enteredEducation, setEnteredEducation] = useState('');
  // const [enteredExperience, setEnteredExperience] = useState('');
  // const [enteredEntryDate, setEnteredEntryDate] = useState('');
  // const [enteredMaritalStatus, setEnteredMaritalStatus] = useState('');
  const [enteredNationality, setEnteredNationality] = useState([]);
  const [enteredFormData, setEnteredFormData] = useState({
    enteredFirstName: '',
    enteredLastName: '',
    enteredFatherName: '',
    enteredMotherName: '',
    enteredPassportNo: '',
    enteredAddress: '',
    enteredEmail: '',
    enteredBdate: '',
    enteredGender: '',
    enteredEducation: '',
    enteredExperience: '',
    enteredEntryDate: '',
    enteredMaritalStatus: '',
    enteredNationality: '',
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEnteredNationality(typeof value === 'string' ? value.split(',') : value);
  };
  const firstNameChange = (event) => {
    //setEnteredFirstName(event.target.value);
    setEnteredFormData((prevState) => {
      return { ...prevState, enteredFirstName: event.target.value };
    });
  };

  const lastNameChange = (event) => {
    //setEnteredLastName(event.target.value);
    setEnteredFormData((prevState) => {
      return { ...prevState, enteredLastName: event.target.value };
    });
  };
  const fatherNameChange = (event) => {
    //setEnteredFatherName(event.target.value);
    setEnteredFormData((prevState) => {
      return { ...prevState, enteredFatherName: event.target.value };
    });
  };
  const motherNameChange = (event) => {
    //setEnteredMotherName(event.target.value);
    setEnteredFormData((prevState) => {
      return { ...prevState, enteredMotherName: event.target.value };
    });
  };
  const passportNoChange = (event) => {
    //setEnteredPassportNo(event.target.value);
    setEnteredFormData((prevState) => {
      return { ...prevState, enteredPassportNo: event.target.value };
    });
  };
  const addressChange = (event) => {
    //setEnteredAddress(event.target.value);
    setEnteredFormData((prevState) => {
      return { ...prevState, enteredAddress: event.target.value };
    });
  };
  const emailChange = (event) => {
    //setEnteredEmail(event.target.value);
    setEnteredFormData((prevState) => {
      return { ...prevState, enteredEmail: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // const formData = {
    //   firstN: enteredFirstName,
    //   lastN: enteredLastName,
    //   fatherN: enteredFatherName,
    //   motherN: enteredMotherName,
    //   passportNo: enteredPassportNo,
    //   address: enteredAddress,
    //   email: enteredEmail,
    //   nationality: enteredNationality,
    // };

    props.onSaveForm(enteredFormData);
    // setEnteredFirstName('');
    // setEnteredLastName('');
    // setEnteredFatherName('');
    // setEnteredMotherName('');
    // setEnteredPassportNo('');
    // setEnteredEmail('');
    // setEnteredAddress('');
    setEnteredFormData({});
  };

  return (
    <div style={{ flex: '0.6' }}>
      <Card
        component='form'
        style={{ padding: '10px' }}
        onSubmit={submitHandler}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='First Name'
              label='First Name'
              size='small'
              fullWidth
              onChange={firstNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='Last Name'
              label='Last Name'
              size='small'
              fullWidth
              onChange={lastNameChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="Father's Full Name"
              label="Father's Full Name"
              size='small'
              fullWidth
              onChange={fatherNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="Mother's Full Name"
              label="Mother's Full Name"
              size='small'
              fullWidth
              onChange={motherNameChange}
            />
          </Grid>
          <Grid item xs={8} sm={2}>
            <TextField
              id='Passport No.'
              label='Passport No.'
              size='small'
              fullWidth
              onChange={passportNoChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='Address'
              label='Address'
              size='small'
              fullWidth
              onChange={addressChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id='E-mail'
              label='E-mail'
              size='small'
              fullWidth
              onChange={emailChange}
            />
          </Grid>
          <Grid item xs={8} sm={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer size='small' components={['DatePicker']}>
                <DatePicker label='Birth Date' />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={8} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='demo-multiple-checkbox-label' size='small'>
                Select Nationality
              </InputLabel>
              <Select
                labelId='demo-multiple-checkbox-label'
                id='demo-multiple-checkbox'
                multiple
                value={enteredNationality}
                onChange={handleChange}
                input={<OutlinedInput label='Nationality' />}
                renderValue={(selected) => selected.join(', ')}
              >
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    <Checkbox
                      checked={enteredNationality.indexOf(country) > -1}
                    />
                    <ListItemText primary={country} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel>Please Select Gender</FormLabel>
              <RadioGroup row name='row-radio-buttons-group'>
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Other'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant='body1' gutterBottom>
              Education Details
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Degree</TableCell>
                    <TableCell align='left'>School</TableCell>
                    <TableCell align='left'>Year</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {educationraws.map((raw) => {
                    return (
                      <TableRow>
                        {educationcolumn.map((column) => {
                          return (
                            <TableCell>
                              <TextField size='small' fullWidth />
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant='body1' gutterBottom>
              Experience Detail
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Employer Name</TableCell>
                    <TableCell align='left'>Job Position</TableCell>
                    <TableCell align='left'>Year</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {experienceTableRaws.map((expRaw) => {
                    return (
                      <TableRow>
                        {experienceTableColumn.map((expColumn) => {
                          return (
                            <TableCell>
                              <TextField size='small' fullWidth />
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography variant='body1' gutterBottom></Typography>
            When did you first enter in Canada?
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                sx={{ padding: '0', margin: '0' }}
                components={['DateField']}
              >
                <DateField size='small' label='MM/DD/YYYY' />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={8} sx={{ display: 'flex' }}>
            <FormControl fullWidth>
              <FormLabel>Marital Status</FormLabel>
              <RadioGroup row name='row-radio-buttons-group'>
                <FormControlLabel
                  value='married'
                  control={<Radio />}
                  label='Married'
                />
                <FormControlLabel
                  value='single'
                  control={<Radio />}
                  label='Single'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <button type='submit'>Submit</button>
        </Grid>
      </Card>
    </div>
  );
};

export default FormInputs;
