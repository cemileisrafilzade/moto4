import React from 'react'
import styles from './styles.module.scss'
import { TextField } from '@mui/material'
function DoubleInputs({l1,l2}) {
  return (
    <div className={styles.doubleInputs}>
    <TextField
      className={styles.first}
      id="outlined-basic"
      type="number"
      label={l1}
      variant="outlined"
    />
    <TextField
      id="outlined-basic"
      type="number"
      label={l2}
      variant="outlined"
    />
  </div>
  )
}

export default DoubleInputs