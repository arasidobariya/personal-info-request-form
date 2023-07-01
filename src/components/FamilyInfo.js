import { Card, Typography, Box, Grid } from '@mui/material';
const commonStyles = {
  borderColor: 'text.primary',
  width: '130px',
  height: '35px',
};
const FamilyInfo = ({ formData }) => {
  return (
    <Card sx={{ m: 2, p: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Typography variant='h5' gutterBottom>
            Family Information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant='body1' gutterBottom fullwidth>
            Father's Name
          </Typography>
        </Grid>
        <Grid item xs={8} sm={6} md={3}>
          <Box fullwidth sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
            {formData.fatherN}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography fullwidth variant='body1' gutterBottom>
            Nationality
          </Typography>
        </Grid>
        <Grid item xs={8} sm={6} md={3}>
          <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
            {formData.nationality}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant='body1' gutterBottom>
            Mother's Name
          </Typography>
        </Grid>
        <Grid item xs={8} sm={6} md={3}>
          <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
            {formData.motherN}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='body1' gutterBottom>
            Nationality
          </Typography>
        </Grid>
        <Grid item xs={8} sm={6} md={3}>
          <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
            {formData.nationality}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FamilyInfo;
