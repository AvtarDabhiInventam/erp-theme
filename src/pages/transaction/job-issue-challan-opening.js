// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MaterialReactTable from 'material-react-table'
import { useCallback, useMemo, useState } from 'react'
import {
  Box,
  Button,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Icon,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { Delete, Edit } from '@mui/icons-material'
import HorizontalLayout from 'src/@core/layouts/HorizontalLayout'
import { useRouter } from 'next/router'

// import { data, states } from './makeData'

//50 us states array
export const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'Puerto Rico'
]

const data = [
  {
    id: '9s41rp',
    firstName: 'Kelvin',
    lastName: 'Langosh',
    email: 'Jerod14@hotmail.com',
    age: 19,
    state: 'Ohio'
  },
  {
    id: '08m6rx',
    firstName: 'Molly',
    lastName: 'Purdy',
    email: 'Hugh.Dach79@hotmail.com',
    age: 37,
    state: 'Rhode Island'
  },
  {
    id: '5ymtrc',
    firstName: 'Henry',
    lastName: 'Lynch',
    email: 'Camden.Macejkovic@yahoo.com',
    age: 20,
    state: 'California'
  },
  {
    id: 'ek5b97',
    firstName: 'Glenda',
    lastName: 'Douglas',
    email: 'Eric0@yahoo.com',
    age: 38,
    state: 'Montana'
  },
  {
    id: 'xxtydd',
    firstName: 'Leone',
    lastName: 'Williamson',
    email: 'Ericka_Mueller52@yahoo.com',
    age: 19,
    state: 'Colorado'
  },
  {
    id: 'wzxj9m',
    firstName: 'Mckenna',
    lastName: 'Friesen',
    email: 'Veda_Feeney@yahoo.com',
    age: 34,
    state: 'New York'
  },
  {
    id: '21dwtz',
    firstName: 'Wyman',
    lastName: 'Jast',
    email: 'Melvin.Pacocha@yahoo.com',
    age: 23,
    state: 'Montana'
  },
  {
    id: 'o8oe4k',
    firstName: 'Janick',
    lastName: 'Willms',
    email: 'Delfina12@gmail.com',
    age: 25,
    state: 'Nebraska'
  }
]

const JobIssueChallanOpening = () => {
  const router = useRouter()

  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [tableData, setTableData] = useState(() => data)
  const [validationErrors, setValidationErrors] = useState({})

  const handleCreateNewRow = values => {
    tableData.push(values)
    setTableData([...tableData])
  }

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values

      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData])
      exitEditingMode() //required to exit editing mode and close modal
    }
  }

  const handleCancelRowEdits = () => {
    setValidationErrors({})
  }

  const handleDeleteRow = useCallback(
    row => {
      if (!confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)) {
        return
      }

      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1)
      setTableData([...tableData])
    },
    [tableData]
  )

  const getCommonEditTextFieldProps = useCallback(
    cell => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: event => {
          const isValid =
            cell.column.id === 'email'
              ? validateEmail(event.target.value)
              : cell.column.id === 'age'
                ? validateAge(+event.target.value)
                : validateRequired(event.target.value)
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`
            })
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id]
            setValidationErrors({
              ...validationErrors
            })
          }
        }
      }
    },
    [validationErrors]
  )

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell)
        })
      },
      {
        accessorKey: 'email',
        header: 'Email',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'email'
        })
      },
      {
        accessorKey: 'age',
        header: 'Age',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'number'
        })
      },
      {
        accessorKey: 'state',
        header: 'State',
        muiTableBodyCellEditTextFieldProps: {
          select: true, //change to select for a dropdown
          children: states.map(state => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))
        }
      }
    ],
    [getCommonEditTextFieldProps]
  )

  // ** State
  const [role, setRole] = useState('')
  const [plan, setPlan] = useState('')
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [addUserOpen, setAddUserOpen] = useState(false)

  // ** Hooks
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.user)
  // useEffect(() => {
  //   dispatch(
  //     fetchData({
  //       role,
  //       status,
  //       q: value,
  //       currentPlan: plan
  //     })
  //   )
  // }, [dispatch, plan, role, status, value])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  const handleRoleChange = useCallback(e => {
    setRole(e.target.value)
  }, [])

  const handlePlanChange = useCallback(e => {
    setPlan(e.target.value)
  }, [])

  const handleStatusChange = useCallback(e => {
    setStatus(e.target.value)
  }, [])
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  // Modal
  // ** States
  const [show, setShow] = useState(false)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='JobIssueChallan List' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
          <CardActions sx={{ flexWrap: 'wrap', gap: '10px' }}>
            <Box>
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
                      Select Book
                    </Typography>
                  </Box>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={12}>
                      <TextField fullWidth placeholder='' label='Name' />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField fullWidth placeholder='' label='Purchase A/C' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth placeholder='' label='Purchase Book' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth placeholder='' label='Purchase Balance' />
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
            <Button size='large' type='submit' variant='contained' onClick={() => setShow(true)}>
              Add
            </Button>
            <Button size='large' type='submit' variant='contained'>
              Edit
            </Button>
            <Button size='large' type='submit' variant='contained'>
              Delete
            </Button>
            <Button size='large' type='submit' variant='contained'>
              Print
            </Button>
            <Button size='large' type='submit' variant='contained'>
              E Way
            </Button>
          </CardActions>
          <Divider />
          <MaterialReactTable
            displayColumnDefOptions={{
              'mrt-row-actions': {
                muiTableHeadCellProps: {
                  align: 'center'
                },
                size: 120
              }
            }}
            columns={columns}
            data={tableData}
            editingMode='modal' //default
            enableColumnOrdering
            enableEditing
            enableGrouping
            onEditingRowSave={handleSaveRowEdits}
            onEditingRowCancel={handleCancelRowEdits}
            renderRowActions={({ row, table }) => (
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip arrow placement='left' title='Edit'>
                  <IconButton onClick={() => table.setEditingRow(row)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement='right' title='Delete'>
                  <IconButton color='error' onClick={() => handleDeleteRow(row)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          />
          <CreateNewAccountModal
            columns={columns}
            open={createModalOpen}
            onClose={() => setCreateModalOpen(false)}
            onSubmit={handleCreateNewRow}
          />

          <CardContent sx={{ marginBottom: '15px', marginTop: '15px' }}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={9}>
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
                  <FormControl fullWidth>
                    <Select
                      defaultValue=''
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                    >
                      <MenuItem value='Value'>Value</MenuItem>
                      <MenuItem value='Value'>Value</MenuItem>
                      <MenuItem value='Value'>Value</MenuItem>
                      <MenuItem value='Value'>Value</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField fullWidth label='From BillNo' placeholder='' />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField fullWidth label='To BillNo' placeholder='' />
                  </FormControl>
                  <Button size='large' type='submit' variant='contained'>
                    Ok
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ mr: 4 }}>Sum:</Typography>
                  <FormControl fullWidth>
                    <TextField fullWidth placeholder='548.00' />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = ''

      return acc
    }, {})
  )

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values)
    onClose()
  }

  return (
    <Dialog open={open}>
      <DialogTitle textAlign='center'>Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={e => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem'
            }}
          >
            {columns.map(column => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={e => setValues({ ...values, [e.target.name]: e.target.value })}
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color='secondary' onClick={handleSubmit} variant='contained'>
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const validateRequired = value => !!value.length

const validateEmail = email =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
const validateAge = age => age >= 18 && age <= 50

export default JobIssueChallanOpening
