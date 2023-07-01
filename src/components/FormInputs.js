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
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredFatherName, setEnteredFatherName] = useState('');
  const [enteredMotherName, setEnteredMotherName] = useState('');
  const [enteredPassportNo, setEnteredPassportNo] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredBdate, setEnteredBdate] = useState('');
  const [enteredGender, setEnteredGender] = useState('');
  const [enteredDegree1, setEnteredDegree1] = useState('');
  const [enteredSchool1, setEnteredSchool1] = useState('');
  const [enteredYear1, setEnteredYear1] = useState('');
  const [enteredDegree2, setEnteredDegree2] = useState('');
  const [enteredSchool2, setEnteredSchool2] = useState('');
  const [enteredYear2, setEnteredYear2] = useState('');
  const [enteredDegree3, setEnteredDegree3] = useState('');
  const [enteredSchool3, setEnteredSchool3] = useState('');
  const [enteredYear3, setEnteredYear3] = useState('');
  const [enteredEmployer1, setEnteredEmployer1] = useState('');
  const [enteredEmployer2, setEnteredEmployer2] = useState('');
  const [enteredEmployer3, setEnteredEmployer3] = useState('');
  const [enteredJob1, setEnteredJob1] = useState('');
  const [enteredJob2, setEnteredJob2] = useState('');
  const [enteredJob3, setEnteredJob3] = useState('');
  const [enteredExpYear1, setEnteredExpYear1] = useState('');
  const [enteredExpYear2, setEnteredExpYear2] = useState('');
  const [enteredExpYear3, setEnteredExpYear3] = useState('');
  const [enteredEntryDate, setEnteredEntryDate] = useState('');
  const [enteredMaritalStatus, setEnteredMaritalStatus] = useState('');
  const [enteredNationality, setEnteredNationality] = useState([]);

  const nationalityChange = (event) => {
    const {
      target: { value },
    } = event;
    setEnteredNationality(typeof value === 'string' ? value.split(',') : value);
    uploadFormData(event);
  };
  const firstNameChange = (event) => {
    setEnteredFirstName(event.target.value);
    uploadFormData(event);
  };

  const lastNameChange = (event) => {
    setEnteredLastName(event.target.value);
    uploadFormData(event);
  };
  const fatherNameChange = (event) => {
    setEnteredFatherName(event.target.value);
    uploadFormData(event);
  };
  const motherNameChange = (event) => {
    setEnteredMotherName(event.target.value);
    // setEnteredFormData((prevState) => {
    //   return { ...prevState, enteredMotherName: event.target.value };
    // });
  };
  const passportNoChange = (event) => {
    setEnteredPassportNo(event.target.value);
    // setEnteredFormData((prevState) => {
    //   return { ...prevState, enteredPassportNo: event.target.value };
    // });
  };
  const addressChange = (event) => {
    setEnteredAddress(event.target.value);
    // setEnteredFormData((prevState) => {
    //   return { ...prevState, enteredAddress: event.target.value };
    // });
  };
  const emailChange = (event) => {
    setEnteredEmail(event.target.value);
    // setEnteredFormData((prevState) => {
    //   return { ...prevState, enteredEmail: event.target.value };
    // });
  };
  const genderChange = (event) => {
    setEnteredGender(event.target.value);
    // setEnteredFormData((prevState) => {
    //   return { ...prevState, enteredGender: event.target.value };
    // });
  };
  const maritalStatusChange = (event) => {
    setEnteredMaritalStatus(event.target.value);
    // setEnteredFormData((prevState) => {
    //   return { ...prevState, enteredMaritalStatus: event.target.value };
    // });
  };

  const degree1Change = (event) => {
    setEnteredDegree1(event.target.value);
  };
  const degree2Change = (event) => {
    setEnteredDegree2(event.target.value);
  };
  const degree3Change = (event) => {
    setEnteredDegree3(event.target.value);
  };
  const school1Change = (event) => {
    setEnteredSchool1(event.target.value);
  };
  const school2Change = (event) => {
    setEnteredSchool2(event.target.value);
  };
  const school3Change = (event) => {
    setEnteredSchool3(event.target.value);
  };
  const year1Change = (event) => {
    setEnteredYear1(event.target.value);
  };
  const year2Change = (event) => {
    setEnteredYear2(event.target.value);
  };
  const year3Change = (event) => {
    setEnteredYear3(event.target.value);
  };
  const bdateChange = (date) => {
    setEnteredBdate(date.format());
    // setEnteredFormData((prevState) => {
    //   return { ...prevState, enteredBdate: event.target.value };
    // });
  };

  const employer1Change = (event) => {
    setEnteredEmployer1(event.target.value);
  };
  const employer2Change = (event) => {
    setEnteredEmployer2(event.target.value);
  };
  const employer3Change = (event) => {
    setEnteredEmployer3(event.target.value);
  };
  const job1Change = (event) => {
    setEnteredJob1(event.target.value);
  };
  const job2Change = (event) => {
    setEnteredJob2(event.target.value);
  };
  const job3Change = (event) => {
    setEnteredJob3(event.target.value);
  };
  const expYear1Change = (event) => {
    setEnteredExpYear1(event.target.value);
  };
  const expYear2Change = (event) => {
    setEnteredExpYear2(event.target.value);
  };
  const expYear3Change = (event) => {
    setEnteredExpYear3(event.target.value);
  };
  const entryDateChange = (date) => {
    setEnteredEntryDate(date.format());
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const row1 = enteredDegree1 + ' ' + enteredSchool1 + ' ' + enteredYear1;
    const row2 = enteredDegree2 + ' ' + enteredSchool2 + ' ' + enteredYear2;
    const row3 = enteredDegree3 + ' ' + enteredSchool3 + ' ' + enteredYear3;

    const enteredEducation = [row1, row2, row3];

    const expRow1 =
      enteredEmployer1 + ' ' + enteredJob1 + ' ' + enteredExpYear1;
    const expRow2 =
      enteredEmployer2 + ' ' + enteredJob2 + ' ' + enteredExpYear2;
    const expRow3 =
      enteredEmployer3 + ' ' + enteredJob3 + ' ' + enteredExpYear3;

    const enteredExperience = [expRow1, expRow2, expRow3];
    const formData = {
      firstN: enteredFirstName,
      lastN: enteredLastName,
      fatherN: enteredFatherName,
      motherN: enteredMotherName,
      passportNo: enteredPassportNo,
      address: enteredAddress,
      email: enteredEmail,
      nationality: enteredNationality,
      gender: enteredGender,
      maritalstatus: enteredMaritalStatus,
      bdate: enteredBdate,
      entryDate: enteredEntryDate,
      education: enteredEducation,
      experience: enteredExperience,
    };

    props.onSaveForm(formData);
    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredFatherName('');
    setEnteredMotherName('');
    setEnteredPassportNo('');
    setEnteredEmail('');
    setEnteredAddress('');
    setEnteredNationality([]);
    setEnteredGender('');
    setEnteredMaritalStatus('');
    setEnteredBdate('');
    setEnteredEntryDate('');

    // setEnteredBdate('');
    //setEnteredFormData({});
  };
  const uploadFormData = (event) => {
    event.preventDefault();
    const row1 = enteredDegree1 + ' ' + enteredSchool1 + ' ' + enteredYear1;
    const row2 = enteredDegree2 + ' ' + enteredSchool2 + ' ' + enteredYear2;
    const row3 = enteredDegree3 + ' ' + enteredSchool3 + ' ' + enteredYear3;

    const enteredEducation = [row1, row2, row3];

    const expRow1 =
      enteredEmployer1 + ' ' + enteredJob1 + ' ' + enteredExpYear1;
    const expRow2 =
      enteredEmployer2 + ' ' + enteredJob2 + ' ' + enteredExpYear2;
    const expRow3 =
      enteredEmployer3 + ' ' + enteredJob3 + ' ' + enteredExpYear3;

    const enteredExperience = [expRow1, expRow2, expRow3];
    const formData = {
      firstN: enteredFirstName,
      lastN: enteredLastName,
      fatherN: enteredFatherName,
      motherN: enteredMotherName,
      passportNo: enteredPassportNo,
      address: enteredAddress,
      email: enteredEmail,
      nationality: enteredNationality,
      gender: enteredGender,
      maritalstatus: enteredMaritalStatus,
      bdate: enteredBdate,
      entryDate: enteredEntryDate,
      education: enteredEducation,
      experience: enteredExperience,
    };

    props.onSaveForm(formData);
  };
  return (
    <div>
      <Card onSubmit={submitHandler} style={{ padding: '10px' }}>
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
                <DatePicker onChange={bdateChange} label='Birth Date' />
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
                onChange={nationalityChange}
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
                  onChange={genderChange}
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                  onChange={genderChange}
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Other'
                  onChange={genderChange}
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
                  <TableRow>
                    <TableCell>
                      <TextField
                        onChange={degree1Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={school1Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={year1Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField
                        onChange={degree2Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={school2Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={year2Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField
                        onChange={degree3Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={school3Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={year3Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
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
                  <TableRow>
                    <TableCell>
                      <TextField
                        onChange={employer1Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField onChange={job1Change} size='small' fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={expYear1Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField
                        onChange={employer2Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField onChange={job2Change} size='small' fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={expYear2Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TextField
                        onChange={employer3Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField onChange={job3Change} size='small' fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={expYear3Change}
                        size='small'
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
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
                <DateField
                  onChange={entryDateChange}
                  size='small'
                  label='MM/DD/YYYY'
                />
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
                  onChange={maritalStatusChange}
                />
                <FormControlLabel
                  value='single'
                  control={<Radio />}
                  label='Single'
                  onChange={maritalStatusChange}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default FormInputs;
