import React from 'react';
import TextField from '@mui/material/TextField';

export default function InputField({label = 'label', value='Marry Doe', onFocus, onChange}) {
  return (
    <TextField 
      label={label} 
      value={value} 
      variant="outlined" 
      fullWidth 
      size='small'
      style={{marginTop: '22px'}}
      onFocus={onFocus}
      onChange={onChange}
      sx={{
          '& .MuiInputBase-root': {
            fontSize: '12px',      // input text size
            opacity: 1,
          },
          '& .MuiInputLabel-root': {
            fontSize: '16px',      // label font size
            color: '#6C25FF',
          },
      }}
    />
  )
}
