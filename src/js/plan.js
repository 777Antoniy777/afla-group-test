import {inputNumber} from "./number";

const radioButtonsWrapper = document.querySelector('.license__radio-buttons-wrapper');
let planValue;

const handleRadioButtonChange = (evt) => {
  const target = evt.target;
  
  if (!target.closest('input')) return false;

  planValue = target.dataset.value;
  inputNumber.value

  console.log(planValue)

};

// Selected plan: #3

radioButtonsWrapper.addEventListener('change', handleRadioButtonChange);
