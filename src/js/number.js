import {priceValue, planValue, planPrice} from "./plan";

const inputNumber = document.querySelector('input[id="license-count"]');

const handleInputNumberChange = (evt) => {
  const target = evt.target;
  const value = target.value;
  let totalPrice;

  if (+value < 0) {
    target.value = 0;
    priceValue.textContent = ` $0`;
  }

  if (planValue && +value >= 0) {
    totalPrice = +planPrice.textContent * value;
    priceValue.textContent = ` $${totalPrice}`;
  }
};

inputNumber.addEventListener('change', handleInputNumberChange);

export {inputNumber};
