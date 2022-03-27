const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i);

export default {
  years: range(0, 3000),
  months: range(0, 12),
  weeks: range(0, 52),
  days: range(0,366),
  hours: range(0,60),
  minutes: range(0,60),
  seconds: range(0,60)
};
