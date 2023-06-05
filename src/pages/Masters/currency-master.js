// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const CurrencyMaster = () => {
  return (
    <Card>
      <CardHeader title='Currency Master' />
      <Divider sx={{ m: '0 !important' }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Currency Name' placeholder='' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Currency Rate' placeholder='' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Symbol' placeholder='' />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ m: '0 !important' }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Edit
          </Button>
          <Button type='reset' size='large' color='secondary' variant='outlined'>
            Delete
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default CurrencyMaster
