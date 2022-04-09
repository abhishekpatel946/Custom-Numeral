# Custom Numeral

![NodeJS Workflow](https://github.com/abhishekpatel946/Custom-Numeral/actions/workflows/nodejs.yml/badge.svg)
[![GitHub release](https://img.shields.io/static/v1?label=Release&message=Beta&color=blue)](https://github.com/abhishekpatel946/Custom-Numeral/releases/)
[![repo size](https://img.shields.io/github/repo-size/abhishekpatel946/Custom-Numeral.svg)](https://github.com/abhishekpatel946/Custom-Numeral/archive/master.zip)
[![Open Source? Yes](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/abhishekpatel946/)
![visitors](https://visitor-badge.glitch.me/badge?page_id=abhishekpatel946/Custom-Numeral.abhishekpatel946/Custom-Numeral?color=2bbc8a)
[![Apache GNU](https://img.shields.io/github/license/abhishekpatel946/Custom-Numeral.svg)](https://github.com/abhishekpatel946/Custom-Numeral/blob/main/LICENSE)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/abhishekpatel946/Custom-Numeral/discussions)


A javascript library for formatting and manipulating numbers fully custmizable.

## Description

An in-depth paragraph about your project and overview of use.


## Getting Started

### Dependencies

* A javascript library for formatting and manipulating numbers fully custmizable.
* Support upto currencies [`K, M, B, T`] formatted.
* Customizable with decimal digits.
* Support the positive and negative values upto long numbers.
* Simple solutions for long numbers in javascript.

### Installing

```bash
npm i custom-numeral
```

### Executing program

* Import in files as usual packages like:

```javascript
const customNumeral = require("custom-numeral")
```

* How to handle big-numbers in javascript.
* `value` take a big-number as string to handle. **required**
* `digits` take a number that specifies digits after decimal. By default it will take 2 if not passed **Optional**


Without customNumeral the problem with big-numbers in javascript.

```javascript
1000000049054700000000 as number

1.0000000490547e+21
```

After using customNumeral, it will handle the big-number and converted into currencies with comma saperated.

```javascript
customNumeral({value: '1000000049054700000000'})

1,000,000,049.05T 
```

Handle the decimals values very well if values are so long.

```javascript
customNumeral({value: '00.0000049054700000000'})

-74,378,149.05T 
```

Handle the negative values as well
```javascript
customNumeral({value: '-743781490547'})

-743.78B 
```

```javascript
customNumeral({value: '0.00124567'})

0.0012  
```

Handle the nagatives values with decimal.

```javascript
customNumeral({value: '-049.054700000000'})

-49.05 
```

if we pass digits, then we can handle the digits after decimals like

```javascript
customNumeral({value: '0.00124567', digits: 6})

0.001245  
```

## Help

Any advise for common problems or issues.

Create an issue using click this [link](https://github.com/abhishekpatel946/Custom-Numeral/issues/new)

## Authors

Contributors names and contact info

@abhishekpatel946  
[Github](https://github.com/abhishekpatel946/)

## Features Version History

* 1.4.x
  * Fixing the initial issues.
  * Implement features that are suggested by the community.
  
* 1.3.0
  * Support the upto trillions in currencies.
  * Handle the postive and negative numbers very well.
  * Digits after decimal are customizable.

### Publish

* NOTE: Change the verison before publishing the package.

```bash
npm login
npm whoami
npm publish
```


## License

This project is licensed under the [Apache License 2.0] License - see the LICENSE.md file for details.