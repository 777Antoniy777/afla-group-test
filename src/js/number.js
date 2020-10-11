const inputNumber = document.querySelector('input[id="license-count"]');

const handleInputNumberChange = (evt) => {
  const target = evt.target;
  const value = target.value;

  if (+value < 0) {
    target.value = 0;
  }
};

inputNumber.addEventListener('change', handleInputNumberChange);

export {inputNumber};