import PropTypes from "prop-types";

import "../../sass/components/_currencyInput.scss";

const CurrencyInput = (props) => {
  return (
    <div className="currency__convertor__calc__content__body__item">
      <input
        type="text"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
        className="currency__convertor__calc__content__body__item__input"
      />
      <select
        value={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
        className="currency__convertor__calc__content__body__item__currency"
      >
        {props.currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
