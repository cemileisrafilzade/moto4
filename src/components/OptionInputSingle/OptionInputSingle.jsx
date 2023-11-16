import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import "../../sass/components/_optionInput.scss";

export default function OptionInputSingle({ options, holder, isYear }) {
  return (
    <Autocomplete
      id="highlights-demo"
      classes={{ popupIndicator: "custom-popup-indicator" }}
      sx={{
        minWidth: `${isYear ? "117px" : "235px"}`,
        marginLeft: "0",
        margin: `${isYear && "0"}`,
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          { borderColor: "#620985" },
        "& .MuiAutocomplete-inputRoot": { padding: "5px" },
        borderRadius: "8px",
      }}
      options={options}
      getOptionLabel={(option) => option.title}
      blurOnSelect={false}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            backgroundColor: "#fff",
            borderTopLeftRadius: `${isYear && holder === "İl,Min" && "8px"}`,
            borderBottomLeftRadius: `${isYear && holder === "İl,Min" && "8px"}`,
            borderTopRightRadius: `${isYear && holder === "Max" && "8px"}`,
            borderBottomRightRadius: `${isYear && holder === "Max" && "8px"}`,
            borderRadius: `${!isYear && "8px"}`,
          }}
          placeholder={holder}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue, { insideWords: true });
        const parts = parse(option.title, matches);

        return (
          <li {...props} style={{ padding: "5px", fontSize: "16px" }}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}