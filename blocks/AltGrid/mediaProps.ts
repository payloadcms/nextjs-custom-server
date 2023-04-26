import { base } from '../../css/base';

const largeFirstCol = {
  yDistance: 50,
  top: undefined,
};

const largeSecondCol = {
  yDistance: 150,
  top: base(-10),
};

const largeThirdCol = {
  yDistance: 100,
  top: base(-5),
};

const mediumOddCol = {
  yDistance: 0,
  top: undefined,
};

const mediumEvenCol = {
  yDistance: 0,
  top: base(3),
};

export default [
  {
    l: largeFirstCol,
    m: mediumOddCol,
  },
  {
    l: largeSecondCol,
    m: mediumEvenCol,
  },
  {
    l: largeThirdCol,
    m: mediumOddCol,
  },
  {
    l: largeFirstCol,
    m: mediumEvenCol,
  },
  {
    l: largeSecondCol,
    m: mediumOddCol,
  },
  {
    l: largeThirdCol,
    m: mediumEvenCol,
  },
  {
    l: largeFirstCol,
    m: mediumOddCol,
  },
  {
    l: largeSecondCol,
    m: mediumEvenCol,
  },
  {
    l: largeThirdCol,
    m: mediumOddCol,
  },
];
