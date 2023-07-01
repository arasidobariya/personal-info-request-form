import FormInputs from './FormInputs';
import FormOutputs from './FormOutputs';
import { useState } from 'react';
import { Grid } from '@mui/material';
const InputOutput = () => {
  const [formData, setFormData] = useState({});

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <FormInputs onSaveForm={setFormData} />
        </Grid>
        <Grid item sm={12} md={6}>
          <FormOutputs formData={formData} />
        </Grid>
      </Grid>
    </div>
  );
};
export default InputOutput;
