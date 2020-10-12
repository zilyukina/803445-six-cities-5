export const getFormattedDate = (dateStr) => {
  const MONTHS_NAMES = {
    0: `January`,
    1: `February`,
    2: `March`,
    3: `April`,
    4: `May`,
    5: `June`,
    6: `July`,
    7: `August`,
    8: `September`,
    9: `October`,
    10: `November`,
    11: `December`
  };
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth();
  return `${year} ${MONTHS_NAMES[month]}`;
};
