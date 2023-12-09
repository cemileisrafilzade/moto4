import React, { useState } from "react";

import "../../../sass/components/_contact.scss";

import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";

import { cityOptions } from "../../../constants";

export const INITIAL_DATA = {
  city: "",
};

const Contact = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const [clear, setClear] = useState(false);

  const handleChange = ({ target }) => {
    setData((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="contact">
      <div className="contact__title">Əlaqə</div>
      <div className="contact__content">
        <input
          type="text"
          placeholder="Ad"
          className="contact__content__item"
        />
        <input
          type="text"
          placeholder="Soyad"
          className="contact__content__item"
        />
        <OptionInputSingle
          options={cityOptions}
          holder="Şəhər"
          keyValue="city"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
        />
        <select className="contact__content__select">
          <option value="(050)">(050)</option>
          <option value="(055)">(055)</option>
          <option value="(070)">(070)</option>
        </select>
        <input
          type="number"
          placeholder="Mobil nömrə"
          className="contact__content__phone"
        />
        <input
          type="mail"
          placeholder="E-mail"
          className="contact__content__item"
        />
      </div>
    </div>
  );
};

export default Contact;
