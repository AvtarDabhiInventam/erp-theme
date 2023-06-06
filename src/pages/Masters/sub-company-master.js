// ** MUI Imports
import { Fragment, useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import {
  Button,
  CardActions,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Link,
  IconButton,
  ListItem,
  List,
  InputLabel,
  Chip,
  DialogActions,
  DialogContent,
  Dialog
} from '@mui/material'
import { Box } from '@mui/system'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'
import { useRouter } from 'next/router'

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 250
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const SubCompanyMaster = () => {
  const router = useRouter()

  // ** State
  const [files, setFiles] = useState([])

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
    } else {
      return <Icon icon='mdi:file-document-outline' />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map(file => (
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon icon='mdi:close' fontSize={20} />
      </IconButton>
    </ListItem>
  ))

  const handleLinkClick = event => {
    event.preventDefault()
  }

  const handleRemoveAllFiles = () => {
    setFiles([])
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

  // Modal
  // ** States
  const [show, setShow] = useState(false)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sub Company Master'></CardHeader>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={12}>
                        <TextField fullWidth id='outlined-basic' label='Sub Company/Branch Name' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='outlined-basic' label='GST No' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-outlined-label'>Type of Dealer</InputLabel>
                          <Select
                            id='form-layouts-tabs-select'
                            labelId='form-layouts-tabs-select-label'
                            label='Type of Dealer'
                            defaultValue=''
                          >
                            <MenuItem value='Dealer 1'>Dealer 1</MenuItem>
                            <MenuItem value='Dealer 2'>Dealer 2</MenuItem>
                            <MenuItem value='Dealer 3'>Dealer 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-outlined-label'>CompanyType</InputLabel>
                          <Select
                            id='form-layouts-tabs-select'
                            labelId='form-layouts-tabs-select-label'
                            label='CompanyType'
                            defaultValue=''
                          >
                            <MenuItem value='CompanyType 1'>CompanyType 1</MenuItem>
                            <MenuItem value='CompanyType 2'>CompanyType 2</MenuItem>
                            <MenuItem value='CompanyType 3'>CompanyType 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField fullWidth rows={3} multiline id='textarea-outlined-static' label='Address' />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-outlined-label'>Country</InputLabel>
                          <Select
                            id='form-layouts-tabs-select'
                            labelId='form-layouts-tabs-select-label'
                            label='Country'
                            defaultValue=''
                          >
                            <MenuItem value='India'>India</MenuItem>
                            <MenuItem value='UK'>UK</MenuItem>
                            <MenuItem value='US'>US</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-outlined-label'>State/Region</InputLabel>
                          <Select
                            id='form-layouts-tabs-select'
                            labelId='form-layouts-tabs-select-label'
                            label='State/Region'
                            defaultValue=''
                          >
                            <MenuItem value='Gujarat'>Gujarat</MenuItem>
                            <MenuItem value='MP'>MP</MenuItem>
                            <MenuItem value='MH'>MH</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='No' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-outlined-label'>City</InputLabel>
                          <Select
                            id='form-layouts-tabs-select'
                            labelId='form-layouts-tabs-select-label'
                            label='City'
                            defaultValue=''
                          >
                            <MenuItem value='Surat'>Surat</MenuItem>
                            <MenuItem value='Bharuch'>Bharuch</MenuItem>
                            <MenuItem value='Navsari'>Navsari</MenuItem>
                          </Select>
                        </FormControl>
                        <Box sx={{ mt: 4 }}>
                          <Button
                            size='large'
                            type='submit'
                            sx={{ mr: 2 }}
                            variant='contained'
                            onClick={() => router.push('/Masters/quality-master-profile')}
                          >
                            Add New City
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='outlined-basic' label='Pin Code' />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormControlLabel
                          label='Has Export Business'
                          control={<Checkbox checked={checked} name='controlled' />}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='outlined-basic' label='Telephone No' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='outlined-basic' label='Phone No' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='outlined-basic' label='Mobile No' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='outlined-basic' label='WhatsApp No' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='outlined-basic' label='Contact Person' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='outlined-basic' label='Email' />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormControlLabel
                          label='Cess Applicable'
                          control={<Checkbox checked={checked} name='controlled' />}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <DropzoneWrapper>
                          <Fragment>
                            <div {...getRootProps({ className: 'dropzone' })}>
                              <input {...getInputProps()} />
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: ['column', 'column', 'row'],
                                  alignItems: 'center'
                                }}
                              >
                                <Img width={300} alt='Upload img' src='/images/misc/upload.png' />
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: ['center', 'center', 'inherit']
                                  }}
                                >
                                  <HeadingTypography variant='h5'>
                                    Drop files here or click to upload.
                                  </HeadingTypography>
                                  <Typography color='textSecondary'>
                                    Drop files here or click{' '}
                                    <Link href='/' onClick={handleLinkClick}>
                                      browse
                                    </Link>{' '}
                                    thorough your machine
                                  </Typography>
                                </Box>
                              </Box>
                            </div>
                            {files.length ? (
                              <Fragment>
                                <List>{fileList}</List>
                                <div className='buttons'>
                                  <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                                    Remove All
                                  </Button>
                                  <Button variant='contained'>Upload Files</Button>
                                </div>
                              </Fragment>
                            ) : null}
                          </Fragment>
                        </DropzoneWrapper>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <CardActions sx={{ pl: 0, pb: 0 }}>
                          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                            Browse
                          </Button>
                          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                            Clear
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='PanNo' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='ID' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='Password' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='GSTNo' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='ID' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='Password' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='TanNo' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='ID' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='Password' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='AccountNo' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='BankName' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='Branch' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='IFSC Code' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='IEC Code' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='Corporation Registration No' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='Company Registration No' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='AadharNo' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField fullWidth id='outlined-basic' label='Other' />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12}>
                <CardActions sx={{ pl: 0, pb: 0 }}>
                  <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                    Submit
                  </Button>
                  <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                    Delete
                  </Button>
                  <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                    Cancel
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

export default SubCompanyMaster
