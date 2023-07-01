import FamilyInfo from './FamilyInfo';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
const FormOutputs = ({ formData }) => {
  console.log(formData);
  return (
    <div>
      <PersonalInfo formData={formData} />
      <FamilyInfo formData={formData} />
      <Education education={formData.education} />
      <Experience experience={formData.experience} />
    </div>
  );
};

export default FormOutputs;
