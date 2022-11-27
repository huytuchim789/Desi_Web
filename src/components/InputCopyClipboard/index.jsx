import { useState } from 'react'
import { IconButton, Snackbar, TextField } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Copy from 'images/ic_copy.svg'
import { Stack } from '@mui/system'
const CopyToClipboardButton = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('http://desibusiness.vn/viec-lam...')
  const handleClick = () => {
    setOpen(true)
    navigator.clipboard.writeText(value)
  }

  return (
    <>
      <Stack
        direction="row"
        sx={{ width: '100%' }}
        alignItems="center"
        spacing="10px"
      >
        <TextField
          id="outlined-name"
          hiddenLabel
          value={value}
          disabled
          sx={{ background: '#DFE3E8', borderRadius: '4px', width: '85%' }}
        />
        {/* <ContentCopyIcon /> */}
        <img
          src={Copy}
          onClick={handleClick}
          style={{ cursor: 'pointer', color: '#637381' }}
          alt=""
        />
      </Stack>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  )
}

export default CopyToClipboardButton
