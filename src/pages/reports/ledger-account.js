// ** MUI Imports
import { forwardRef, useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import {
  Box,
  Button,
  CardActions,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Tooltip,
  Collapse,
  Dialog,
  DialogContent,
  DialogActions
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import Repeater from 'src/@core/components/repeater'
import { format } from 'date-fns'

const MUITableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: 0,
  padding: `${theme.spacing(1, 0)} !important`
}))

const CustomSelectItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.success.main,
  backgroundColor: 'transparent !important',
  '&:hover': { backgroundColor: `${alpha(theme.palette.success.main, 0.1)} !important` }
}))

const RepeatingContent = styled(Grid)(({ theme }) => ({
  paddingRight: 0,
  display: 'flex',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  '& .col-title': {
    top: '-1.5rem',
    position: 'absolute'
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.secondary
  },
  [theme.breakpoints.down('lg')]: {
    '& .col-title': {
      top: '0',
      position: 'relative'
    }
  }
}))

const RepeaterWrapper = styled(CardContent)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(5.5),
  '& .repeater-wrapper + .repeater-wrapper': {
    marginTop: theme.spacing(12)
  }
}))

const InvoiceAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: theme.spacing(2, 1),
  borderLeft: `1px solid ${theme.palette.divider}`
}))

const ledgerAccount = ({ popperPlacement }, props) => {
  const { clients, invoiceNumber, selectedClient, setSelectedClient, toggleAddCustomerDrawer } = props

  // ** States
  const [date, setDate] = useState(null)
  const [language, setLanguage] = useState([])
  const [selected, setSelected] = useState('')
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(1)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())

  // ** Deletes form
  const deleteForm = e => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-wrapper').remove()
  }

  const handleInvoiceChange = event => {
    setSelected(event.target.value)
    if (clients !== undefined) {
      setSelectedClient(clients.filter(i => i.name === event.target.value)[0])
    }
  }

  const handleAddNewCustomer = () => {
    toggleAddCustomerDrawer()
  }

  const CalcWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:not(:last-of-type)': {
      marginBottom: theme.spacing(2)
    }
  }))

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Receipt' />
      <Divider sx={{ m: '0 !important' }} />
      <CardActions sx={{ mt: 0 }}>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={() => setShow(true)}>
          Add
        </Button>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
          Edit
        </Button>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
          Cancel
        </Button>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
          Delete
        </Button>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
          Print
        </Button>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
          Email
        </Button>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
          Cash Puchase
        </Button>
      </CardActions>
      {/* Modal Start */}
      <Dialog
        fullWidth
        open={show}
        maxWidth='sm'
        scroll='body'
        onClose={() => setShow(false)}
        onBackdropClick={() => setShow(false)}
      >
        <DialogContent sx={{ pb: 6, px: { xs: 8, sm: 15 }, pt: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
              Create New Master Data
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              {/* <Typography sx={{ mb: 2 }}>GST</Typography> */}
              <TextField fullWidth placeholder='' label='Value' />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mr: 2 }} onClick={() => setShow(false)}>
            Save
          </Button>
          <Button variant='contained' sx={{ mr: 2 }} onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button type='reset' size='large' color='secondary' variant='outlined'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* Modal End */}
      <form onSubmit={e => e.preventDefault()}>
        <CardContent sx={{ marginBottom: '20px' }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Company Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Account' placeholder='Account' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Amount' placeholder='Amount' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Voucher Adjust' placeholder='Voucher Adjust' />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Date' placeholder='Date' />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Voucher No' placeholder='Voucher No' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='CHQ No' placeholder='CHQ No' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField fullWidth label='Slip No' placeholder='Slip No' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>CHQ Bank</InputLabel>
                <Select
                  label='Country'
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
          </Grid>
        </CardContent>
        <RepeaterWrapper>
          <Repeater count={count}>
            {i => {
              const Tag = i === 0 ? Box : Collapse

              return (
                <Tag key={i} className='repeater-wrapper' {...(i !== 0 ? { in: true } : {})}>
                  <Grid container>
                    <RepeatingContent item xs={12}>
                      <Grid container sx={{ py: 4, width: '100%', pr: { lg: 0, xs: 4 }, flexWrap: 'nowrap' }}>
                        <Grid item lg={2} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            Type
                          </Typography>
                          <TextField fullWidth multiline size='small' defaultValue='' />
                        </Grid>
                        <Grid item lg={2} md={3} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            Voucher No
                          </Typography>
                          <TextField
                            size='small'
                            type='number'
                            placeholder='24'
                            defaultValue='24'
                            InputProps={{ inputProps: { min: 0 } }}
                          />
                        </Grid>
                        <Grid item lg={2} md={2} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            Bal Amt
                          </Typography>
                          <TextField
                            size='small'
                            type='number'
                            placeholder='1'
                            defaultValue='1'
                            InputProps={{ inputProps: { min: 0 } }}
                          />
                        </Grid>
                        <Grid item lg={2} md={1} xs={12} sx={{ px: 4, my: { lg: 0 }, mt: 2 }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            TDS%
                          </Typography>
                          <TextField
                            size='small'
                            type='number'
                            placeholder='1'
                            defaultValue='1'
                            InputProps={{ inputProps: { min: 0 } }}
                          />
                        </Grid>
                        <Grid item lg={2} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            TDS Amt
                          </Typography>
                          <TextField fullWidth multiline size='small' defaultValue='' />
                        </Grid>
                        <Grid item lg={2} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            Add less%
                          </Typography>
                          <TextField fullWidth multiline size='small' defaultValue='' />
                        </Grid>
                        <Grid item lg={2} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            Add less%
                          </Typography>
                          <TextField fullWidth multiline size='small' defaultValue='' />
                        </Grid>
                        <Grid item lg={2} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            Add less%
                          </Typography>
                          <TextField fullWidth multiline size='small' defaultValue='' />
                        </Grid>
                        <Grid item lg={2} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                          <Typography
                            variant='subtitle2'
                            className='col-title'
                            sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                          >
                            Add less AMT%
                          </Typography>
                          <TextField fullWidth multiline size='small' defaultValue='' />
                        </Grid>
                      </Grid>
                      <InvoiceAction>
                        <IconButton size='small' onClick={deleteForm}>
                          <Icon icon='mdi:close' fontSize={20} />
                        </IconButton>
                      </InvoiceAction>
                    </RepeatingContent>
                  </Grid>
                </Tag>
              )
            }}
          </Repeater>

          <Grid container sx={{ mt: 4.75 }}>
            <Grid item xs={12} sx={{ px: 0 }}>
              <Button
                size='small'
                variant='contained'
                startIcon={<Icon icon='mdi:plus' fontSize={20} />}
                onClick={() => setCount(count + 1)}
              >
                Add Item
              </Button>
            </Grid>
          </Grid>
        </RepeaterWrapper>

        <Divider />

        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={9} sx={{ order: { sm: 1, xs: 2 } }}>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Balance Amount:
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    0.00
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Chq Amount:
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    0.00
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
              <CalcWrapper>
                <Typography variant='body2'>Taxable:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  $180
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>CGST:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  $0
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>SGST:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  0%
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>IGST:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  0%
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>CESS:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  0%
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>TCS:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  0%
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>TAX:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  0%
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>Round Off:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  0%
                </Typography>
              </CalcWrapper>
              <Divider
                sx={{ mt: theme => `${theme.spacing(6)} !important`, mb: theme => `${theme.spacing(1.5)} !important` }}
              />
              <CalcWrapper>
                <Typography variant='body2'>NetAmount:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                  $1690
                </Typography>
              </CalcWrapper>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button type='reset' size='large' color='secondary' variant='outlined'>
            Reset
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default ledgerAccount
