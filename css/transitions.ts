const slow = 600;
const defaultMS = 300;
const fast = 100;

export default {
  slow,
  default: defaultMS,
  fast,
  modal: 400,
  page: 500,
  linear: `${defaultMS}ms linear`,
  ease: `${defaultMS}ms ease`,
  fastEase: `${fast}ms ease`,
  parallax: 'transform 400ms cubic-bezier(0, 0, 0.2, 1) 0s',
};
