import React from "react";
import Compact from "../../assets/carTypes/Compact car side view silhouette 1.svg";
import Luxury from "../../assets/carTypes/Luxury car side view silhouette 1.svg";
import SUV from "../../assets/carTypes/Suv car side view silhouette 1.svg";
import Pickup from "../../assets/carTypes/Pickup car side view silhouette 1.svg";
import Sedan from "../../assets/carTypes/Sedan car side view silhouette 1.svg";
import Hatchback from "../../assets/carTypes/Hatchback side view silhouette 1.svg";
import Convertible from "../../assets/carTypes/Convertible car side view silhouette 1.svg";
import Van from "../../assets/carTypes/Van side view silhouette 1.svg";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import styles from "./styles.module.scss";
function ShowRoom() {
  const data = [
    { name: "SUV", image: SUV, id: 1 },
    { name: "Compact Car", image: Compact, id: 2 },
    { name: "Luxury Car", image: Luxury, id: 3 },
    { name: "Sedan", image: Sedan, id: 4 },
    { name: "Hatchback", image: Hatchback, id: 5 },
    { name: "Convertible", image: Convertible, id: 6 },
    { name: "Pickup", image: Pickup, id: 7 },
    { name: "Van", image: Van, id: 8 },
  ];

  return (
    <FormGroup className={styles.container}>
      {data.map((item) => {
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
