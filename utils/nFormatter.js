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
