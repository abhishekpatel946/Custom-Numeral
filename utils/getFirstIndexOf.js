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
