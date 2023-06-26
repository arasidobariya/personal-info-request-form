import FormInputs from './FormInputs';
import FormOutputs from './FormOutputs';
import { useState } from 'react';
const InputOutput = () => {
  const [formData, setFormData] = useState({});

  return (
    <div
      style={{ display: 'flex', gap: '20px', padding: '10px', margin: '5px' }}
    >
      <FormInputs onSaveForm={setFormData} />
      <FormOutputs formData={formData} />
    </div>
  );
};
export default InputOutput;
