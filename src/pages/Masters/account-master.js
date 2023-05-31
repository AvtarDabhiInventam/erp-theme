// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions, TextField } from '@mui/material'

const AccountMaster = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Account Master'></CardHeader>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <CardContent sx={{ pt: 0 }}>
                <Typography sx={{ mb: 2 }}>Account:</Typography>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
            <Grid item xs={6}>
              <CardContent sx={{ pt: 0 }}>
                <Typography sx={{ mb: 2 }}>Account Sub Head:</Typography>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
            <Grid item xs={6}>
              <CardContent sx={{ pt: 0 }}>
                <Typography sx={{ mb: 2 }}>Opening Bal:</Typography>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
            <Grid item xs={6}>
              <CardContent sx={{ pt: 0 }}>
                <Typography sx={{ mb: 2, visibility: 'hidden' }}>Button</Typography>
                <CardActions sx={{ pl: 0 }}>
                  <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                    Submit
                  </Button>
                  <Button type='reset' size='large' variant='outlined' color='secondary'>
                    Reset
                  </Button>
                </CardActions>
              </CardContent>
            </Grid>
          </Grid>









        </Card>
      </Grid>

      {/* <Grid item xs={12}>
        <Card>
          <CardHeader title='ACL and JWT 🔒'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are implemented in the starter-kit as well.
            </Typography>
            <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  )
}

export default AccountMaster
