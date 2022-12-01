import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { Chip, tableCellClasses, Tooltip } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import { ACCEPTED, REJECTED, WAITING } from 'utilities/constant'
import styles from './../CustomTable/table.module.css'
const columns = [
  { id: 'title', label: 'Tiêu đề việc làm', minWidth: 120, maxWidth: 130 },
  { id: 'hr', label: 'Nhà tuyển dụng', minWidth: 100 },
  {
    id: 'deadline',
    label: 'Hạn nộp hồ sơ',
    minWidth: 100,
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'date',
    label: 'Ngày ứng tuyển',
    minWidth: 100,
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'status',
    label: 'Trạng thái',
    minWidth: 120,
    format: (value) => {
      switch (value) {
        case 'wait':
          return <Chip label="Chờ phản hồi" sx={{ background: WAITING }}></Chip>
        case 'reject':
          return <Chip label="Bị từ chối " sx={{ background: REJECTED }}></Chip>
        case 'accept':
          return <Chip label="Đã nhận" sx={{ background: ACCEPTED }}></Chip>

        default:
          break
      }
    },
  },
]

// const rows = [
//   createData("India", "IN", 1324171354, 3287263),
//   createData("China", "CN", 1403500365, 9596961),
//   createData("Italy", "IT", 60483973, 301340),
//   createData("United States", "US", 327167434, 9833520),
//   createData("Canada", "CA", 37602103, 9984670),
//   createData("Australia", "AU", 25475400, 7692024),
//   createData("Germany", "DE", 83019200, 357578),
//   createData("Ireland", "IE", 4857000, 70273),
//   createData("Mexico", "MX", 126577691, 1972550),
//   createData("Japan", "JP", 126317000, 377973),
//   createData("France", "FR", 67022000, 640679),
//   createData("United Kingdom", "GB", 67545757, 242495),
//   createData("Russia", "RU", 146793744, 17098246),
//   createData("Nigeria", "NG", 200962417, 923768),
//   createData("Brazil", "BR", 210147125, 8515767)
// ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

export default function CustomTable({ datas }) {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={`${classes.root} ${styles.table}`}>
      <TableContainer className={classes.container}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none',
            },
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell align="center" key="email"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format ? column.format(value) : value}
                          </TableCell>
                        )
                      })}
                      <TableCell key="email" align="center">
                        <Tooltip
                          title="Liên hệ với nhà tuyển dụng"
                          placement="top"
                        >
                          <MailIcon
                            sx={{ color: '#637381', cursor: 'pointer' }}
                          />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
        component="div"
        count={datas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trong trang:"
      />
    </Paper>
  )
}
