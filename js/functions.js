const isStringLess = (checkingString, numberOfCharacters) => {
  if (checkingString.length <= numberOfCharacters) {
    return true;
  }

  return false;
};

const isPalindrome = (userString) => {
  const amountCharacters = userString.length;
  let newUserString = '';

  for (let i = amountCharacters - 1; i >= 0; i--) {
    newUserString += userString[i];
  }

  return userString.toUpperCase().replace(/ /g, '') === newUserString.toUpperCase().replace(/ /g, '');
};

const getNumbers = (userString) => {
  if (!isNaN(userString)) {
    if (Number.isInteger(userString) && userString > 0) {
      return userString;
    }

    return NaN;
  } else {
    let newUserString = '';
    const withoutSpacesUserString = userString.replace(/ /g, '');

    for (let i = 0; i <= withoutSpacesUserString.length - 1; i++) {
      newUserString += (!isNaN(withoutSpacesUserString[i])) ? withoutSpacesUserString[i] : '' ;
    }

    if (Number.isInteger(userString) && userString > 0) {
      return userString;
    }

    const numberUserString = Number(newUserString)

    return numberUserString && numberUserString > 0 ? numberUserString : NaN;
  }
};
