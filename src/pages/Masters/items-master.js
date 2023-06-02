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

const ItemsMaster = () => {
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
          <CardHeader title='Item Master'></CardHeader>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={12}>
                        <Typography sx={{ mb: 2 }}>Item Name</Typography>
                        <Grid container spacing={6}>
                          <Grid item xs={12} md={8}>
                            <TextField fullWidth id='outlined-basic' label='' />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField fullWidth id='outlined-basic' label='' />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Typography sx={{ mb: 2 }}>Item Category</Typography>
                        <FormControl fullWidth>
                          <Select id='form-layouts-tabs-select' labelId='form-layouts-tabs-select-label'>
                            <MenuItem value='Category 1'>Category 1</MenuItem>
                            <MenuItem value='Category 2'>Category 2</MenuItem>
                            <MenuItem value='Category 3'>Category 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ mb: 2 }}>Quality</Typography>
                        <FormControl fullWidth>
                          <Select id='form-layouts-tabs-select' labelId='form-layouts-tabs-select-label'>
                            <MenuItem value='Quality 1'>Quality 1</MenuItem>
                            <MenuItem value='Quality 2'>Quality 2</MenuItem>
                            <MenuItem value='Quality 3'>Quality 3</MenuItem>
                          </Select>
                        </FormControl>
                        <Box sx={{ mt: 4 }}>
                          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                            Add New
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ mb: 2 }}>Unit</Typography>
                        <FormControl fullWidth>
                          <Select id='form-layouts-tabs-select' labelId='form-layouts-tabs-select-label'>
                            <MenuItem value='Pieces 1'>Pieces 1</MenuItem>
                            <MenuItem value='Pieces 2'>Pieces 2</MenuItem>
                            <MenuItem value='Pieces 3'>Pieces 3</MenuItem>
                          </Select>
                        </FormControl>
                        <Box sx={{ mt: 4 }}>
                          <Button
                            size='large'
                            type='submit'
                            sx={{ mr: 2 }}
                            variant='contained'
                            onClick={() => setShow(true)}
                          >
                            UOM Master
                          </Button>

                          <Dialog
                            fullWidth
                            open={show}
                            maxWidth='sm'
                            scroll='body'
                            onClose={() => setShow(false)}
                            onBackdropClick={() => setShow(false)}
                          >
                            <DialogContent
                              sx={{ pb: 6, px: { xs: 8, sm: 15 }, pt: { xs: 8, sm: 12.5 }, position: 'relative' }}
                            >
                              <IconButton
                                size='small'
                                onClick={() => setShow(false)}
                                sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                              >
                                <Icon icon='mdi:close' />
                              </IconButton>
                              <Box sx={{ mb: 8, textAlign: 'center' }}>
                                <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
                                  UOM
                                </Typography>
                              </Box>
                              <Grid container spacing={6}>
                                <Grid item xs={12} sm={12}>
                                  <Typography sx={{ mb: 2 }}>Unit Name</Typography>
                                  <FormControl fullWidth>
                                    <Select id='form-layouts-tabs-select' labelId='form-layouts-tabs-select-label'>
                                      <MenuItem value='Bags'>BAGS</MenuItem>
                                      <MenuItem value='Items 1'>Items 1</MenuItem>
                                      <MenuItem value='Items 2'>Items 2</MenuItem>
                                      <MenuItem value='Items 3'>Items 3</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                  <Typography sx={{ mb: 2 }}>Short Name</Typography>
                                  <TextField fullWidth placeholder='BAG' />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                  <Typography sx={{ mb: 2 }}>Qty</Typography>
                                  <FormControl fullWidth>
                                    <Select id='form-layouts-tabs-select' labelId='form-layouts-tabs-select-label'>
                                      <MenuItem value='none'>NONE</MenuItem>
                                      <MenuItem value='none'>NONE</MenuItem>
                                      <MenuItem value='none'>NONE</MenuItem>
                                      <MenuItem value='none'>NONE</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>
                              </Grid>
                            </DialogContent>
                            <DialogActions sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}>
                              <Button variant='contained' sx={{ mr: 2 }} onClick={() => setShow(false)}>
                                Save
                              </Button>
                              <Button variant='outlined' color='secondary' onClick={() => setShow(false)}>
                                Cancel
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Typography sx={{ mb: 2 }}>Descreption</Typography>
                        <TextField fullWidth rows={3} multiline id='textarea-outlined-static' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ mb: 2 }}>Inc. Sale Rate</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ mb: 2 }}>Sale Rate</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ mb: 2 }}>Pur. Rate</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ mb: 2 }}>MRP</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormControlLabel
                          label='Additional Information'
                          control={<Checkbox checked={checked} name='controlled' />}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <CardActions sx={{ pl: 0, pb: 0 }}>
                          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                            Submit
                          </Button>
                          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                            Print
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

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Grid container spacing={6}>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Qty 2</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Default Qty</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='1.00' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Discount1%</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Discount2%</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>IGST%</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='5' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>SGST/UGST%</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>CGST%</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>HSN Code</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='123456' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Packing Type</Typography>
                        <FormControl fullWidth>
                          <Select id='form-layouts-tabs-select' labelId='form-layouts-tabs-select-label'>
                            <MenuItem value='Packing 1'>Packing 1</MenuItem>
                            <MenuItem value='Packing 2'>Packing 2</MenuItem>
                            <MenuItem value='Packing 3'>Packing 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Assebmly Item</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='NO' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Print Name</Typography>
                        <TextField fullWidth id='outlined-basic' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Remarks 1</Typography>
                        <TextField fullWidth id='outlined-basic' />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>Warranty</Typography>
                        <FormControl fullWidth>
                          <Select id='form-layouts-tabs-select' labelId='form-layouts-tabs-select-label'>
                            <MenuItem value='Warranty 1'>Warranty 1</MenuItem>
                            <MenuItem value='Warranty 2'>Warranty 2</MenuItem>
                            <MenuItem value='Warranty 3'>Warranty 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mb: 2 }}>SKU_Barcode</Typography>
                        <TextField fullWidth id='outlined-basic' />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        {/* <Typography sx={{ mb: 2 }}>SKU_Barcode</Typography> */}
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
                            Generate
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                <Card sx={{ mt: 5 }}>
                  <CardHeader title='Opening Balance'></CardHeader>
                  <CardContent>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={4}>
                        <Typography sx={{ mb: 2 }}>Quanitity 1</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='000' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Typography sx={{ mb: 2 }}>Quanitity 3</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Typography sx={{ mb: 2 }}>Value</Typography>
                        <TextField fullWidth id='outlined-basic' placeholder='0.00' />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ItemsMaster
