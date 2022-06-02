import React from 'react'
import { Grid,TextField,InputAdornment,IconButton } from '@material-ui/core'
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

const Input = ({half,name,label,handleChange,type,autoFocus,handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half? 6 :12} >
        <TextField 
        name={name} 
        label={label} 
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'Password' ? {endAdornment:(
            <InputAdornment position='end' >
            <IconButton onClick={handleShowPassword} >
                {type === 'password' ? <Visibility/> :<VisibilityOff/>}
            </IconButton>
            </InputAdornment>
        )
        } : null}

        />
    </Grid>
  )
}

export default Input
