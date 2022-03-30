/* eslint-disable no-undef */

const nFormatter = ({ num, digits }) => {
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

const getIndexOf = (strArr) => {
  let firstIndexOf;

  // return the first index of the string
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '0' && strArr[i] !== '.') {
      firstIndexOf = strArr.indexOf(strArr[i]);
      return firstIndexOf;
    }
  }
};

module.exports = {
  nFormatter,
  getIndexOf,
};
