// ** MUI Imports
import { useState } from 'react'
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
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  Tab,
  TextField
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, border } from '@mui/system'

const AccountMaster = () => {
  // ** States
  const [value, setValue] = useState('account-settings')

  const handleTabsChange = (event, newValue) => {
    setValue(newValue)
  }

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  const handleChange = event => {
    setChecked(event.target.checked)
  }

  // ** State
  const [checked, setChecked] = useState(['wifi', 'location'])

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Account Master'></CardHeader>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <CardContent sx={{ pt: 0 }}>
                {/* <Typography sx={{ mb: 2 }}>Account</Typography> */}
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='Account' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
            <Grid item xs={6}>
              <CardContent sx={{ pt: 0 }}>
                {/* <Typography sx={{ mb: 2 }}>Account Sub Head</Typography> */}
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='Account Sub Head' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
            <Grid item xs={6}>
              <CardContent sx={{ pt: 0 }}>
                {/* <Typography sx={{ mb: 2 }}>Opening Bal</Typography> */}
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='Opening Bal' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth id='outlined-basic' label='' />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <TabContext value={value}>
            <TabList
              variant='scrollable'
              scrollButtons={false}
              onChange={handleTabsChange}
              sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
            >
              <Tab value='account-settings' label='Account Settings' />
              <Tab value='book-settings' label='Book Settings' />
            </TabList>
            <form>
              <CardContent>
                <TabPanel value='account-settings'>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                      <Box sx={{ position: 'relative' }}>
                        <Typography>
                          {/* Common Master */}
                          <Switch
                            sx={{ position: 'absolute', right: '0px', top: '-32px' }}
                            edge='end'
                            checked={checked.indexOf('wifi') !== -1}
                            onChange={handleToggle('wifi')}
                          />
                        </Typography>
                      </Box>
                      <TextField fullWidth placeholder='' label='Common Master' />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      {/* <Typography sx={{ mb: 2 }}>Credit Limit</Typography> */}
                      <TextField fullWidth placeholder='' label='Credit Limit' />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      {/* <Typography sx={{ mb: 2 }}>Currency</Typography> */}
                      <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-outlined-label'>Currency</InputLabel>
                        <Select
                          id='form-layouts-tabs-select'
                          labelId='form-layouts-tabs-select-label'
                          label='Currency'
                          defaultValue=''
                        >
                          <MenuItem value='Currency Name 1'>Currency Name 1</MenuItem>
                          <MenuItem value='Currency Name 2'>Currency Name 2</MenuItem>
                          <MenuItem value='Currency Name 3'>Currency Name 3</MenuItem>
                          <MenuItem value='Currency Name 4'>Currency Name 4</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid container spacing={5} sx={{ mt: 4 }}>
                    <Grid item xs={12} sm={6}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>GST No</Typography> */}
                              <TextField fullWidth placeholder='' label='GST No' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Type Of Dealer</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Type Of Dealer</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Type Of Dealer'
                                  defaultValue=''
                                >
                                  <MenuItem value='UNREGISTERD'>UNREGISTERD</MenuItem>
                                  <MenuItem value='REGISTERD'>REGISTERD</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Pan No</Typography> */}
                              <TextField fullWidth placeholder='' label='Pan No' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2, visibility: 'hidden' }}>Hidden Text</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'></InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label=''
                                  defaultValue=''
                                >
                                  <MenuItem value='Value1'>Value 1</MenuItem>
                                  <MenuItem value='Valu2'>Value 2</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>

                      <Card sx={{ mt: 5 }}>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={12}>
                              {/* <Typography sx={{ mb: 2 }}>Group</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Group</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Group'
                                  defaultValue=''
                                >
                                  <MenuItem value='Group1'>Group 1</MenuItem>
                                  <MenuItem value='Group2'>Group 2</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              {/* <Typography sx={{ mb: 2 }}>Address</Typography> */}
                              <TextField fullWidth rows={3} multiline id='textarea-outlined-static' label='Address' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>State</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>State</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='State'
                                  defaultValue=''
                                >
                                  <MenuItem value='Gujarat'>Gujarat</MenuItem>
                                  <MenuItem value='MP'>MP</MenuItem>
                                  <MenuItem value='MH'>MH</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Sez</Typography> */}
                              <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                  <TextField fullWidth placeholder='' label='Sez' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <TextField fullWidth placeholder='' />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>City</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>City</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='City'
                                  defaultValue=''
                                >
                                  <MenuItem value='Surat'>Surat</MenuItem>
                                  <MenuItem value='Baroda'>Baroda</MenuItem>
                                  <MenuItem value='Navsari'>Navsari</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Pin Code</Typography> */}
                              <TextField fullWidth placeholder='' label='Pin Code' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Country</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Country</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Country'
                                  defaultValue=''
                                >
                                  <MenuItem value='India'>India</MenuItem>
                                  <MenuItem value='Africa'>Africa</MenuItem>
                                  <MenuItem value='UK'>UK</MenuItem>
                                </Select>
                              </FormControl>
                              <Box sx={{ mt: 4 }}>
                                <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                                  Add New City
                                </Button>
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Distance</Typography> */}
                              <TextField fullWidth placeholder='' label='Distance' />
                              <Box sx={{ mt: 4 }}>
                                <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                                  Get Distance
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>

                      <Card sx={{ mt: 5 }}>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Cont Person</Typography> */}
                              <TextField fullWidth placeholder='' label='Cont Person' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Mobile No</Typography> */}
                              <TextField fullWidth placeholder='' label='Mobile No' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>WtsApp No</Typography> */}
                              <TextField fullWidth placeholder='' label='WtsApp No' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2, visibility: 'hidden' }}>Hidden Text</Typography> */}
                              <FormControlLabel
                                label='Auto Wapp'
                                control={<Checkbox checked={checked} name='controlled' />}
                              />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Telephone No</Typography> */}
                              <TextField fullWidth placeholder='' label='Telephone No' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Email</Typography> */}
                              <TextField fullWidth placeholder='' label='Email' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Fax</Typography> */}
                              <TextField fullWidth placeholder='' label='Fax' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Website</Typography> */}
                              <TextField fullWidth placeholder='' label='Website' />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={4}>
                              {/* <Typography sx={{ mb: 2 }}>Discount %</Typography> */}
                              <TextField fullWidth placeholder='' label='Discount' />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              {/* <Typography sx={{ mb: 2 }}>Grace Days</Typography> */}
                              <TextField fullWidth placeholder='' label='Grace Days' />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              {/* <Typography sx={{ mb: 2 }}>Interest %</Typography> */}
                              <TextField fullWidth placeholder='' label='Interest %' />
                            </Grid>

                            <Grid item xs={12} sm={8}>
                              {/* <Typography sx={{ mb: 2 }}>Broker Name</Typography> */}
                              <TextField fullWidth placeholder='' label='Broker Name' />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              {/* <Typography sx={{ mb: 2 }}>Percentage (%)</Typography> */}
                              <TextField fullWidth placeholder='' label='Percentage (%)' />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                              {/* <Typography sx={{ mb: 2 }}>Transport Name</Typography> */}
                              <TextField fullWidth placeholder='' label='Transport Name' />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                              {/* <Typography sx={{ mb: 2 }}>Vehicle No</Typography> */}
                              <TextField fullWidth placeholder='' label='Vehicle No' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Station</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Station</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Station'
                                  defaultValue=''
                                >
                                  <MenuItem value='Station Name 1'>Station Name 1</MenuItem>
                                  <MenuItem value='Station Name 2'>Station Name 2</MenuItem>
                                  <MenuItem value='Station Name 3'>Station Name 3</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Way Of Transit</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Way Of Transit</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Way Of Transit'
                                  defaultValue=''
                                >
                                  <MenuItem value='Road'>Road</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>TanNo</Typography> */}
                              <TextField fullWidth placeholder='' label='TanNo' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Haste</Typography> */}
                              <TextField fullWidth placeholder='' label='Haste' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>TDS %</Typography> */}
                              <TextField fullWidth placeholder='' label='TDS %' />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>

                      <Card sx={{ mt: 5 }}>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Bank Name</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Bank Name</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Bank Name'
                                  defaultValue=''
                                >
                                  <MenuItem value='SBI'>SBI</MenuItem>
                                  <MenuItem value='ICICI'>ICICI</MenuItem>
                                  <MenuItem value='AXIS'>AXIS</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>IFSC Code</Typography> */}
                              <TextField fullWidth placeholder='' label='IFSC Code' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Bank Ac No</Typography> */}
                              <TextField fullWidth placeholder='' label='Bank Ac No' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Branch</Typography> */}
                              <TextField fullWidth placeholder='' label='Branch' />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>

                      <Card sx={{ mt: 5 }}>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={12}>
                              {/* <Typography sx={{ mb: 2 }}>Salesman Name</Typography> */}
                              <TextField fullWidth placeholder='' label='Salesman Name' />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>

                <TabPanel value='book-settings'>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Inventory Maintain</Typography> */}
                              <TextField fullWidth placeholder='' label='Inventory Maintain' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Service</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Service</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Service'
                                  defaultValue=''
                                >
                                  <MenuItem value='Yes'>Yes</MenuItem>
                                  <MenuItem value='No'>No</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Types Of Supply</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Types Of Supply</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Types Of Supply'
                                  defaultValue=''
                                >
                                  <MenuItem value='Value 1'>Value 1</MenuItem>
                                  <MenuItem value='Value 2'>Value 2</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>SSE/HSN Code</Typography> */}
                              <TextField fullWidth placeholder='' label='SSE/HSN Code' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>GST%</Typography> */}
                              <TextField fullWidth placeholder='' label='GST%s' />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              {/* <Typography sx={{ mb: 2 }}>Set Voucher Sequence</Typography> */}
                              <TextField fullWidth placeholder='' label='Set Voucher Sequence' />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={12}>
                              {/* <Typography sx={{ mb: 2 }}>Process</Typography> */}
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-outlined-label'>Process</InputLabel>
                                <Select
                                  id='form-layouts-tabs-select'
                                  labelId='form-layouts-tabs-select-label'
                                  label='Process'
                                  defaultValue=''
                                >
                                  <MenuItem value='Value 1'>Value 1</MenuItem>
                                  <MenuItem value='Value 2'>Value 2</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show InAdd-Less?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want TCS Application?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Card>
                        <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show OrderNo?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>
                                  Do You Want To Sales Against Purchase?
                                </Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show ChallanNo?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show Transport?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show Haste?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show In GraceDays?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show Discount%?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show Agent?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Manual ChallanNo/OrderNo</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>ItemWise Discount</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Use Qty2 Column?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Use Gross Qty?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Use Gross Qty?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Use Qty2 as Packing Quanitity?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show In Cr. Note?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show In Dr. Note?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Use 2 Rates?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Use Neg. Qty?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Qty Focus Mandatory In POS?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want to Incl Rate?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want to Round Off TDS?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Show prv. Inv. data</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Show In Haste?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Show In Brocker?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Show In Trasport?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Use Barcode Mode?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Use Multiple Rate</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Invoice with Payment/Receipt</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Use Quantity Count</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Show HSN?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Use Batch/Vallal Pur./Sales?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Sales Against Production?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Purchase Challan Against PO?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Prod. Against Issue to Goods?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want Stock Alert?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Bill Rate & Amt. Changeable?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Use Auto Qty?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Unit Changable?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>
                                  Do You Want To Allow Create New Item?
                                </Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Discount Changable?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want Expiry Date Alert?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Cont. Entry with Same Party?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>
                                  Do You Want To Use Bardcode From Pur.?
                                </Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Use Ready GST 12%?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>
                                  Do You Want To Create Auto A/C Master?
                                </Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Show Remarks in Bill Items?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Show UOM in Sales/Purchase?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Negative Stock Intimation?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Sales Against JobWork?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Use Auto Print Sales Bill</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Do You Want To Show Salesman?</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  border: '1px solid #4c4e6438',
                                  padding: '5px 12px',
                                  borderRadius: '8px'
                                }}
                              >
                                <Typography sx={{ paddingRight: '15px' }}>Show Add Multi Images</Typography>
                                <Switch
                                  edge='end'
                                  checked={checked.indexOf('wifi') !== -1}
                                  onChange={handleToggle('wifi')}
                                />
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>
              </CardContent>
            </form>
          </TabContext>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <CardActions sx={{ pl: 0, pb: 0 }}>
                  <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                    Submit
                  </Button>
                  <Button type='reset' size='large' variant='outlined' color='secondary'>
                    Reset
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AccountMaster
