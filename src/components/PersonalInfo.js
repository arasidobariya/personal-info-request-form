import { Card, Typography, Box, Grid } from '@mui/material';
const commonStyles = {
  borderColor: 'text.primary',
  width: '150px',
  height: '35px',
};
const PersonalInfo = ({ formData }) => {
  return (
    <Card sx={{ m: 2, p: 2 }}>
      <Typography variant='h6' gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={1}>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                First Name
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.firstN}
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                Last Name
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.lastN}
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                Gender
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.gender}
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                E-mail
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.email}
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                Nationality
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.nationality}
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                Marital Status
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.maritalstatus}
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                BirthDay
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.bdate}
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                Address
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.address}
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant='body1' gutterBottom>
                Passport No.
              </Typography>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>
                {formData.passportNo}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              border: 1,
              borderColor: 'text.primary',
              width: '150px',
              height: '150px',
            }}
          >
            image
          </Box>
          <Box sx={{ ...commonStyles, border: 1, flex: '0.5' }}>signature</Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PersonalInfo;
