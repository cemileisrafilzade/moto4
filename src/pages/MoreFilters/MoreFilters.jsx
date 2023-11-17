import React from "react";
import styles from "./styles.module.scss";
import {
  Autocomplete,
  Breadcrumbs,
  Checkbox,
  Radio,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@fluentui/react";
import { brands, models } from "../../mockData/mock";
import ShowRoom from "../../components/showRoom/ShowRoom";

function MoreFilters() {
  return (
    <div className={styles.container}>
      <Breadcrumbs
        className={styles.nav}
        separator={<Icon iconName="ChevronRightMed" />}
        aria-label="breadcrumb"
      >
        <Link to="/">Ana səhifə</Link>
        <Link>Axtarışım</Link>
      </Breadcrumbs>
      <h1>Ətraflı axtarış</h1>
      <h2>Təməl məlumatlar</h2>
      <div className={styles.baseInfo}>
        <div className={styles.inputs}>

        <Autocomplete
          className={styles.autocomplete}
          options={brands}
          renderInput={(params) => <TextField {...params} label="Marka" />}
        />
        <Autocomplete
          className={styles.autocomplete}
          multiple
          disableCloseOnSelect
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                // icon={icon}
                // checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          options={models}
          sx={{ color: "red" }}
          renderInput={(params) => <TextField {...params} label="Model" />}
        />
        </div>

        <FormControl className={styles.radioGroup}>
          <RadioGroup>

        
            <FormControlLabel control={  <Radio
              sx={{
                color: "#bbbbbb",
                "&.Mui-checked": {
                  color: "#620985",
                },
              }}
              />} value="all" label="Hamısı" />
         
          
          
            <FormControlLabel control={  <Radio
              sx={{
                color: "#bbbbbb",
                "&.Mui-checked": {
                  color: "#620985",
                },
              }}
              />} value="new" label="Yeni"/>
         
          
         
            <FormControlLabel control={  <Radio
              sx={{
                color: "#bbbbbb",
                "&.Mui-checked": {
                  color: "#620985",
                },
              }}
              />} value="old" label="Sürülmüş"/>
         
              </RadioGroup>
        </FormControl>
      </div>

      <h3>Avtomobil salonu</h3>
      <ShowRoom/>
    </div>
  );
}

export default MoreFilters;
