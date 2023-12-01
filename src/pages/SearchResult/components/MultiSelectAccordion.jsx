import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Checkbox,  TextField } from '@mui/material';
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';
import { Icon } from '@fluentui/react';
function MultiSelectAccordion({models}) {
    const [initial, setInitial] = useState(true);
    const [model, setModel] = useState([]);

    const handleChangeModel = (e, newValue) => {
        console.log(newValue);
        setModel([...newValue]);
      };
  return (
    <Accordion className={styles.accordion}>
    <AccordionSummary
      onClick={() => {
        setInitial(true);
      }}
      expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
    >
      <h2>Model</h2>
    </AccordionSummary>
    <AccordionDetails>
      {initial ? (
        <p>
          {model.map((item) => (
            <>{item} ,</>
          ))}
          <span>
            <Link onClick={() => setInitial(false)}>Dəyiş</Link>
          </span>
        </p>
      ) : (
        <Autocomplete
          className={styles.autocomplete}
          multiple
          onChange={(e, value) => handleChangeModel(e, value)}
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
          renderInput={(params) => <TextField {...params} label="Axtar" />}
        />
      )}
    </AccordionDetails>
  </Accordion>
  )
}

export default MultiSelectAccordion