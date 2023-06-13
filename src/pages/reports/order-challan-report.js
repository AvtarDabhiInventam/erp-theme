// ** MUI Imports
import { forwardRef, useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import {
  Button,
  CardActions,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  Tab,
  TextField
} from '@mui/material'
import { DatePicker, TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, border } from '@mui/system'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const OrderChallanReport = () => {
  // ** States
  const [date, setDate] = useState(null)
  const [language, setLanguage] = useState([])

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password

  return (
    <Card>
      <CardHeader title='OrderChallan Report' />
      <form onSubmit={e => e.preventDefault()}>
        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'></InputLabel>
                <Select
                  label=''
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Sales Order'>Sales Order</MenuItem>
                  <MenuItem value='Sales Challan'>Sales Challan</MenuItem>
                  <MenuItem value='Purchase Challan'>Purchase Challan</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'></InputLabel>
                <Select
                  label=''
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Register'>Register</MenuItem>
                  <MenuItem value='ItemWise'>ItemWise</MenuItem>
                  <MenuItem value='Pending Order'>Pending Order</MenuItem>
                  <MenuItem value='Closed Order'>Closed Order</MenuItem>
                  <MenuItem value='Order Details'>Order Details</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>

        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Company</InputLabel>
                <Select
                  label='Company'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Sub-Company</InputLabel>
                <Select
                  label='Sub-Company'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Account Name' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Book Name' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Item Name' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Filter</InputLabel>
                <Select
                  label='Filter'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Filter'>Filter</MenuItem>
                  <MenuItem value='Filter'>Filter</MenuItem>
                  <MenuItem value='Filter'>Filter</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'></InputLabel>
                <Select
                  label=''
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Filter'>Filter</MenuItem>
                  <MenuItem value='Filter'>Filter</MenuItem>
                  <MenuItem value='Filter'>Filter</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Direct Date Filter</InputLabel>
                <Select
                  label='Direct Date Filter'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Filter'>Filter</MenuItem>
                  <MenuItem value='Filter'>Filter</MenuItem>
                  <MenuItem value='Filter'>Filter</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='From Date' placeholder='01-04-2023' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='To Date' placeholder='31-03-2024' />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ m: '0 !important' }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button type='reset' size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default OrderChallanReport
