// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Select from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { CardHeader, Divider, Radio } from '@mui/material'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const advanceChallan = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [languages, setLanguages] = useState([])

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setLanguages(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Card>
      <CardHeader title='GST Challan' />
      <Divider sx={{ m: '0 !important' }} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Tax Applicable
              </Typography>
              <FormControlLabel value='checked' control={<Radio />} label='Comapany Deducatees' />
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <FormControlLabel value='checked' control={<Radio />} label='Non-Comapany Deducatees' />
            </FormControl>{' '}
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Type of Payment
              </Typography>
              <FormControlLabel value='checked' control={<Radio />} label='TDS/TCS Payable by TAX Payer' />
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <FormControlLabel value='checked' control={<Radio />} label='TDS/TCS  Regulare Assessment' />
            </FormControl>{' '}
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
              Nature of Payment
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='status-select'>Select Nature of Payment</InputLabel>
              <Select
                defaultValue='Select Nature of Payment'
                fullWidth
                labelId='status-select'
                label='Select Nature of Payment'
              >
                <MenuItem value='Status'>Status</MenuItem>
                <MenuItem value='Active'>Active</MenuItem>
                <MenuItem value='Inactive'>Inactive</MenuItem>
                <MenuItem value='Suspended'>Suspended</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item sm={6} xs={12}></Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Mode of Payment
              </Typography>
              <FormControlLabel value='checked' control={<Radio />} label='Net-Banking' />
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <FormControlLabel value='checked' control={<Radio />} label='Debit Card' />
            </FormControl>{' '}
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
              Bank
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='country-select'>Country</InputLabel>
              <Select fullWidth label='Bank' placeholder='UK' labelId='country-select' defaultValue='Select Bank'>
                <MenuItem value='Select Country'>Select Country</MenuItem>
                <MenuItem value='France'>France</MenuItem>
                <MenuItem value='Russia'>Russia</MenuItem>
                <MenuItem value='China'>China</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='US'>US</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
        <Button variant='contained' sx={{ mr: 2 }} onClick={() => setShow(false)}>
          Submit
        </Button>
        <Button variant='outlined' color='secondary' onClick={() => setShow(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Card>
  )
}

export default advanceChallan
