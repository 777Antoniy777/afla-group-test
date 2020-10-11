import {inputNumber} from "./number";

const radioButtonsWrapper = document.querySelector('.license__radio-buttons-wrapper');
const priceValue = document.querySelector('.license__price span');
const planChoice = document.querySelector('.license__plan-choice');
let planValue;
let planPrice;

const handleRadioButtonChange = (evt) => {
  const target = evt.target;
  planPrice = target.closest('div').querySelector('.license__plan-description span');
  let totalPrice;

  if (!target.closest('input')) return false;

  planValue = target.dataset.value;
  totalPrice = +planPrice.textContent * inputNumber.value;

  priceValue.textContent = ` $${totalPrice}`;
  planChoice.textContent = `Selected plan: #${planValue}`;
};

radioButtonsWrapper.addEventListener('change', handleRadioButtonChange);

export {priceValue, planValue, planPrice};
