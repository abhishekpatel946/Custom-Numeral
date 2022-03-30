// import { GLOBALS } from './utils/globals';
// import getIndexOf from './utils/getFirstIndexOf';
// import nFormatter from './utils/nFormatter';

export const getIndexOf = (strArr) => {
  let firstIndexOf;

  // return the first index of the string
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '0' && strArr[i] !== '.') {
      firstIndexOf = strArr.indexOf(strArr[i]);
      return firstIndexOf;
    }
  }
};

export const GLOBALS = {};
GLOBALS.DIGITS_AFTER_DECIMAL = 2;

export const nFormatter = (num, digits = GLOBALS.DIGITS_AFTER_DECIMAL) => {
  // Support currencies upto
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });

  return item
    ? Number(
        (num / item.value).toFixed(digits).replace(rx, '$1')
      ).toLocaleString() + item.symbol
    : num > 0
    ? Number(num).toFixed(digits)
    : '0';
};

// Custom Numeral handler function
const customNumeral = (value) => {
  try {
    value = value.toString();
    const numToStr = value ? value.toString() : '';

    // handle the decimals numbers only exclude the numbers like (-20.123)
    if (numToStr.indexOf('.') !== -1 && numToStr[0] !== '-') {
      // handle the decimals places which bigger than > 1.0
      if (Number(numToStr) > 0.9) {
        return nFormatter(numToStr);

        // handle the decimals places which are lesser than <= 1.0 & bigger than >= 0.01
      } else if (Number(numToStr) <= 0.9 && Number(numToStr) >= 0.01) {
        return Number(numToStr.slice(0, numToStr.indexOf('.') + 5))
          .toFixed(GLOBALS.DIGITS_AFTER_DECIMAL)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // handle the decimals places which are lessar than < 0.01
      } else if (Number(numToStr) < 0.01) {
        // get the first index of the value
        const firstIndexOf = getIndexOf(numToStr);
        const lastIndexOf = Math.min(numToStr.length, firstIndexOf + 2);
        return numToStr.substr(0, lastIndexOf);
      }

      // handle the negative values with decimals
    } else if (numToStr[0] === '-') {
      // handle the decimals places which bigger than > 1.0
      if (Math.abs(Number(numToStr)) > 0.9) {
        return '-' + nFormatter(Math.abs(numToStr));

        // handle the decimals places which are lesser than <= 1.0 & bigger than >= 0.01
      } else if (
        Math.abs(Number(numToStr)) <= 0.9 &&
        Math.abs(Number(numToStr)) >= 0.01
      ) {
        return Number(numToStr.slice(0, numToStr.indexOf('.') + 5))
          .toFixed(GLOBALS.DIGITS_AFTER_DECIMAL)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // handle the decimals places which are lessar than < 0.01
      } else if (Math.abs(Number(numToStr)) < 0.01) {
        const stringLength = numToStr.length;
        return `-0.00...${numToStr[stringLength - 2]}${
          numToStr[stringLength - 1]
        }`;
      }

      // handle the big absolute values and seperate with comma's
    } else {
      return nFormatter(numToStr);
    }
  } catch {
    return value;
  }
};

export default customNumeral;
