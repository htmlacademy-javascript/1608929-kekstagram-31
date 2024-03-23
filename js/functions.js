const isStringLess = (checkingString, numberOfCharacters) => {
  if (checkingString.length <= numberOfCharacters) {
    return true;
  }

  return false;
};

const isPalindrome = (checkingString) => {
  const amountCharacters = checkingString.length;
  let newCheckingString = '';

  for (let i = amountCharacters - 1; i >= 0; i--) {
    newCheckingString += checkingString[i];
  }

  return checkingString.toUpperCase().replace(/ /g, '') === newCheckingString.toUpperCase().replace(/ /g, '');
};
