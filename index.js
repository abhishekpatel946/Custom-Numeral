/* eslint-disable no-undef */
const service = require('./utils');

// Custom Numeral handler function
const customNumeral = ({ value, digits = 2 }) => {
  try {
    value = value.toString();
    const numToStr = value ? value.toString() : '';

    // handle the decimals numbers only exclude the numbers like (-20.123)
    if (numToStr.indexOf('.') !== -1 && numToStr[0] !== '-') {
      // handle the decimals places which bigger than > 1.0
      if (Number(numToStr) > 0.9) {
        return service.nFormatter({ num: numToStr, digits });

        // handle the decimals places which are lesser than <= 1.0 & bigger than >= 0.01
      } else if (Number(numToStr) <= 0.9 && Number(numToStr) >= 0.01) {
        return Number(numToStr.slice(0, numToStr.indexOf('.') + 5))
          .toFixed(digits)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // handle the decimals places which are lessar than < 0.01
      } else if (Number(numToStr) < 0.01) {
        // get the first index of the value
        const firstIndexOf = service.getIndexOf(numToStr);
        const lastIndexOf = Math.min(numToStr.length, firstIndexOf + digits);
        return numToStr.substr(0, lastIndexOf);
      }

      // handle the negative values with decimals
    } else if (numToStr[0] === '-') {
      // handle the decimals places which bigger than > 1.0
      if (Math.abs(Number(numToStr)) > 0.9) {
        return '-' + service.nFormatter({ num: Math.abs(numToStr), digits });

        // handle the decimals places which are lesser than <= 1.0 & bigger than >= 0.01
      } else if (
        Math.abs(Number(numToStr)) <= 0.9 &&
        Math.abs(Number(numToStr)) >= 0.01
      ) {
        return Number(numToStr.slice(0, numToStr.indexOf('.') + 5))
          .toFixed(digits)
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
      return service.nFormatter({ num: numToStr, digits });
    }
  } catch (error) {
    return value;
  }
};

module.exports = {
  customNumeral,
};
