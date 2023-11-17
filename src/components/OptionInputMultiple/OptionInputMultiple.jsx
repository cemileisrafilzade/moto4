import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function OptionInputMultiple({ options, holder }) {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      classes={{ popupIndicator: "custom-popup-indicator" }}
      sx={{
        minWidth: "235px",
        overflow: "hidden",
        marginLeft: "0",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          { borderColor: "#620985" },
        "& .MuiAutocomplete-inputRoot": { padding: "5px" },
        borderRadius: "8px",
        "& .MuiAutocomplete-tag": {
          display: "flex",
          alignItems: "center",
          gap: "8px",
        },
      }}
      getOptionLabel={(option) => option.title}
      value={selectedOptions}
      onChange={handleChange}
      renderOption={(props, option, { selected }) => (
        <li
          {...props}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          {option.title}
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8, color: selected ? "#620985" : "" }}
            checked={selected}
          />
        </li>
      )}
      style={{ width: 235 }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={holder}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        />
      )}
    />
  );
}
