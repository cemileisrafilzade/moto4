import React, { useState } from "react";

import "../../../sass/components/_moreOptions.scss";

import {
  yearOptions,
  typeOfFuel,
  fuelConsumption,
  gearBox,
  transmission,
  parkingSensor,
  speedControl,
  innerMaterial,
  airBags,
  seatNumbers,
  seller,
  ownNumbers,
} from "../../../constants/index";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";
import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

const MoreOptions = () => {
  const [clear, setClear] = useState(false);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setNewPromotionState({ name: target.name, value: target.value }));
  };

  return (
    <div className="more__options">
      <OptionInputSingle
        options={yearOptions}
        holder="İl"
        keyValue="year"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <input
        type="text"
        placeholder="Yürüş, km"
        name="distance"
        onChange={(e) => handleChange(e)}
        className="more__options__input"
      />
      <input
        type="text"
        placeholder="Həcm, (sm3)"
        name="volume"
        onChange={(e) => handleChange(e)}
        className="more__options__input"
      />
      <input
        type="text"
        placeholder="Güc, kW"
        name="power"
        onChange={(e) => handleChange(e)}
        className="more__options__input"
      />
      <OptionInputSingle
        options={typeOfFuel}
        holder="Yanacaq növü"
        keyValue="fuelType"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputSingle
        options={fuelConsumption}
        holder="Yanacaq sərfiyyatı"
        keyValue="fuelConsumption"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputSingle
        options={gearBox}
        holder="Sürətlər qutusu"
        keyValue="gearBox"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputSingle
        options={transmission}
        holder="Ötürücü"
        keyValue="transmission"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputMultiple
        options={parkingSensor}
        holder="Parking sensoru"
        keyValue="pankingSensor"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputMultiple
        options={speedControl}
        holder="Sürət kontrol düzənləməsi"
        keyValue="speedControl"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputSingle
        options={innerMaterial}
        holder="Daxili material"
        keyValue="innerMaterial"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputMultiple
        options={airBags}
        holder="Hava yastıqları"
        keyValue="airBags"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputSingle
        options={seatNumbers}
        holder="Oturacaq sayı"
        keyValue="seatNumbers"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputSingle
        options={seller}
        holder="Satıcı"
        keyValue="seller"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
      <OptionInputSingle
        options={ownNumbers}
        holder="Neçənsi sahibisiniz"
        keyValue="ownNumbers"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
      />
    </div>
  );
};

export default MoreOptions;
