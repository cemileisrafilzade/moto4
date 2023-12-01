import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Rating,
  TextField,
} from "@mui/material";
import { Icon } from "@fluentui/react";
import { Link } from "react-router-dom";
import {
  accessories,
  brands,
  cities,
  externalColors,
  fuelTypes,
  models,
  //  showRoom,
  transmissions,
  years,
} from "../../../mockData/mock";
import { carTypes, filterTabOne } from "../../../constants";
import DoubleInputs from "./DoubleInputs";
import MultiSelectAccordion from "./MultiSelectAccordion";
function SearchBar() {
  const [initial, setInitial] = useState(true);
  const [brandname, setBrandname] = useState("");
  const [model, setModel] = useState([]);
  const [city, setCity] = useState("");
  const [fuelType, setFuelType] = useState([]);
  const [showRoom, setShowRoom] = useState([]);
  const [transmission, setTransmission] = useState([]);
  const [accesory, setAccesory] = useState([]);
  const handleChangeBrand = (e) => {
    setBrandname(e.target.innerText);
    setInitial(true);
  };
  const handleChangeModel = (e, newValue) => {
    console.log(newValue);
    setModel([...newValue]);
  };
  const handleChangeCity = (e) => {
    setCity(e.target.innerText);
    setInitial(true);
  };
  const handleChangeFuelType = (e, newValue) => {
    setFuelType([...newValue]);
  };
  const handleChangeShowRoom = (e, newValue) => {
    setShowRoom([...newValue]);
  };
  const handleChangeTransmission = (e, newValue) => {
    setTransmission([...newValue]);
  };
  const handleChangeAccesory = (e, newVal) => {
    setAccesory(newVal);
  };
  return (
    <div className={styles.wrapper}>
      <h1>Ətraflı axtarış</h1>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Marka</h2>
        </AccordionSummary>
        <AccordionDetails>
          {initial ? (
            <p>
              {brandname}
              <span>
                <Link onClick={() => setInitial(false)}>Dəyiş</Link>
              </span>
            </p>
          ) : (
            <Autocomplete
              onChange={(e) => handleChangeBrand(e)}
              className={styles.autocomplete}
              options={brands}
              renderInput={(params) => <TextField {...params} label="Axtar" />}
            />
          )}
        </AccordionDetails>
      </Accordion>

      {/* /////////////////////// */}
     <MultiSelectAccordion models={models}/>
      {/* ///////////////////////////////////////////////////// */}
      <div className={styles.hr} />
      <Accordion
        //  expanded= {true}
        className={styles.accordion}
      >
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Vəziyyəti</h2>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className={styles.radioGroup}>
            <RadioGroup defaultValue="all">
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
                value="all"
                label="Hamısı"
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
                value="new"
                label="Yeni"
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
                value="old"
                label="Sürülmüş"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <div className={styles.hr} />
      <h2>Qiymət</h2>
      <DoubleInputs l1="Min" l2="Max" />

      <h2>Yürüyüş</h2>
      <DoubleInputs l1="Min" l2="Max" />
      <h2>İl</h2>

      <div className={styles.doubleSelects}>
        <Autocomplete
          options={years}
          className={styles.first}
          renderInput={(params) => <TextField {...params} label="Min" />}
        />
        <Autocomplete
          className={styles.second}
          options={years}
          renderInput={(params) => <TextField {...params} label="Max" />}
        />
      </div>
      <h2>Güc, kW</h2>
      <DoubleInputs l1="Min" l2="Max" />
      <h2>
        Həcm,
        <sup className={styles.sup}> sm3</sup>
      </h2>
      <DoubleInputs l1="Min" l2="Max" />
      <div className={styles.hr} />
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Xarici rəngi</h2>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup className={`${styles.flexInputs} ${styles.colors}`}>
            {externalColors.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: item.color,
                      },
                      "&.Mui-checked": {
                        "& .MuiSvgIcon-root": {
                          backgroundColor: "transparent",
                        },
                      },
                    }}
                  />
                }
                // label={item.name}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <div className={styles.hr} />
      {/* /////////////////////////////////////////// */}
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Şəhər</h2>
        </AccordionSummary>
        <AccordionDetails>
          {initial ? (
            <p>
              {city}
              <span>
                <Link onClick={() => setInitial(false)}>Dəyiş</Link>
              </span>
            </p>
          ) : (
            <Autocomplete
              onChange={(e) => handleChangeCity(e)}
              className={styles.autocomplete}
              options={cities}
              renderInput={(params) => <TextField {...params} label="Axtar" />}
            />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Yanacaq növü</h2>
        </AccordionSummary>

        <AccordionDetails>
          {initial ? (
            <p>
              {fuelType.map((item) => (
                <>{item} , </>
              ))}
              <span>
                <Link onClick={() => setInitial(false)}>Dəyiş</Link>
              </span>
            </p>
          ) : (
            <Autocomplete
              className={styles.autocomplete}
              multiple
              onChange={(e, value) => handleChangeFuelType(e, value)}
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
              options={fuelTypes}
              sx={{ color: "red" }}
              renderInput={(params) => <TextField {...params} label="Axtar" />}
            />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Avtomobil növü</h2>
        </AccordionSummary>
        <AccordionDetails>
          {initial ? (
            <p>
              {showRoom.map((item) => (
                <>{item.name} , </>
              ))}
              <span>
                <Link onClick={() => setInitial(false)}>Dəyiş</Link>
              </span>
            </p>
          ) : (
            <Autocomplete
              className={styles.autocomplete}
              multiple
              onChange={(e, newValue) => handleChangeShowRoom(e, newValue)}
              disableCloseOnSelect
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    // icon={icon}
                    // checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.name}
                </li>
              )}
              options={carTypes}
              getOptionLabel={(option) => option.name}
              sx={{ color: "red" }}
              renderInput={(params) => <TextField {...params} label="Axtar" />}
            />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Transmissiya</h2>
        </AccordionSummary>
        <AccordionDetails>
          {initial ? (
            <p>
              {transmission.map((item) => (
                <>{item} , </>
              ))}
              <span>
                <Link onClick={() => setInitial(false)}>Dəyiş</Link>
              </span>
            </p>
          ) : (
            <Autocomplete
              className={styles.autocomplete}
              multiple
              onChange={(e, newVal) => handleChangeTransmission(e, newVal)}
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
              options={transmissions}
              sx={{ color: "red" }}
              renderInput={(params) => <TextField {...params} label="Axtar" />}
            />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Avtomobil təchizatları</h2>
        </AccordionSummary>
        <AccordionDetails>
          {initial ? (
            <p>
              {accesory.map((item) => (
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
              onChange={(e, newVal) => handleChangeAccesory(e, newVal)}
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
              options={accessories}
              sx={{ color: "red" }}
              renderInput={(params) => <TextField {...params} label="Axtar" />}
            />
          )}
        </AccordionDetails>
      </Accordion>

      <div className={styles.hr} />
      {/* /////////////////////////// */}
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Satıcı</h2>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className={styles.radioGroup}>
            <RadioGroup defaultValue="all">
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
                value="all"
                label="Hamısı"
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
                value="seller"
                label="Satıcı"
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
                value="private"
                label="Şəxsi satıcı"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Satıcı reytinqi</h2>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className={styles.radioGroup}>
            <RadioGroup
            // value="all"
            >
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
                value="all"
                label={
                  <Rating
                    className={styles.ratings}
                    name="size-medium"
                    value={3}
                    readOnly
                  />
                }
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
                value="seller"
                label={
                  <Rating
                    className={styles.ratings}
                    name="size-medium"
                    value={4}
                    readOnly
                  />
                }
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
                value="private"
                label={
                  <Rating
                    className={styles.ratings}
                    name="size-medium"
                    value={5}
                    readOnly
                  />
                }
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SearchBar;
