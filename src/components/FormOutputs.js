const FormOutputs = ({ formData }) => {
  console.log({ formData });
  return (
    <div style={{ flex: '0.4' }}>
      <h2>{formData}</h2>
    </div>
  );
};

export default FormOutputs;
