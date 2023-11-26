import React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import "../../../sass/components/_price.scss";

const Price = () => {
  return (
    <div className="new__promotion__price">
      <div className="new__promotion__price__inputs">
        <input
          type="number"
          className="new__promotion__price__inputs__amount"
          placeholder="Qiymət"
        />
        <select className="new__promotion__price__inputs__currency">
          <option value="AZN">AZN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="all"
          className="new__promotion__price__radios"
        >
          <FormControlLabel
            value="all"
            control={
              <Radio
                sx={{ color: "#620985", "&.Mui-checked": { color: "#620985" } }}
              />
            }
            label="Hamısı"
            className="new__promotion__price__radios__label"
          />
          <FormControlLabel
            value="credit"
            control={
              <Radio
                sx={{ color: "#620985", "&.Mui-checked": { color: "#620985" } }}
              />
            }
            label="Kredit"
            className="new__promotion__price__radios__label"
          />
          <FormControlLabel
            value="barter"
            control={
              <Radio
                sx={{ color: "#620985", "&.Mui-checked": { color: "#620985" } }}
              />
            }
            label="Barter"
            className="new__promotion__price__radios__label"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Price;
