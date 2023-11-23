import React from "react";

import { carTypes } from "../../constants";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import styles from "./styles.module.scss";
function ShowRoom() {
  return (
    <FormGroup className={styles.container}>
      {carTypes.map((item) => {
        return (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                sx={{
                  color: "#bbbbbb",
                  "&.Mui-checked": {
                    color: "#620985",
                  },
                }}
              />
            }
            label={
              <div className={styles.label}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            }
          />
        );
      })}
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#bbbbbb",
              "&.Mui-checked": {
                color: "#620985",
              },
            }}
          />
        }
        label={<p>Digərləri</p>}
      />
    </FormGroup>
  );
}

export default ShowRoom;
