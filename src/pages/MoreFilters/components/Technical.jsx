import React from 'react'
import styles from '../styles.module.scss'
import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material'
import { fuelConsumption } from '../../../mockData/mock'
function Technical() {
  return (
    <section>
    <h2>Texniki məlumatlar</h2>
    <h3>Yanacaq növü</h3>
    <FormGroup className={styles.flexInputs}>
      <FormControlLabel
        control={
          <Checkbox
          sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Benzin"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Dizel"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Elektrik"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Hibrid"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Plug-in hibrid"
      />
    </FormGroup>
    <h3>Transmissiya</h3>
    <FormGroup className={styles.flexInputs}>
      <FormControlLabel
        control={
          <Checkbox
          sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Mexaniki"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Avtomat"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Avtomat(Robot)"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Avtomat(Variator)"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#BBBBBB",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label="Reduktor"
      />
    </FormGroup>

    <div className={styles.technicalInputs}>
        <div className={styles.doubleInputs}>
          <TextField
            className={styles.first}
            id="outlined-basic"
            type="number"
            label="Güc, Min"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="number"
            label="Max"
            variant="outlined"
          />
        </div>
        <div className={styles.doubleInputs}>
          <TextField
            className={styles.first}
            id="outlined-basic"
            type="number"
            label="Həcm, Min"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="number"
            label="Max"
            variant="outlined"
          />
        </div>
        <Autocomplete
        className={styles.autocomplete}
        options={fuelConsumption}
        renderInput={(params) => (
          <TextField {...params} label="Yanacaq sərfiyyatı" />
        )}
      />{" "}
      </div>

    <h3>Ötürücü</h3>
    
    <FormControl className={styles.radioGroup}>
        <RadioGroup>
          <FormControlLabel
            control={
              <Radio
                sx={{
                  color: "#bbbbbb",
                  "&.Mui-checked": {
                    color: "#620985",
                  },
                }}
              />
            }
            value="front"
            label="Ön"
          />

          <FormControlLabel
            control={
              <Radio
                sx={{
                  color: "#bbbbbb",
                  "&.Mui-checked": {
                    color: "#620985",
                  },
                }}
              />
            }
            value="back"
            label="Arxa"
          />

          <FormControlLabel
            control={
              <Radio
                sx={{
                  color: "#bbbbbb",
                  "&.Mui-checked": {
                    color: "#620985",
                  },
                }}
              />
            }
            value="full"
            label="Tam"
          />
        </RadioGroup>
      </FormControl>
  </section>
  )
}

export default Technical