export const getFormattedDate = (dateStr) => {
  const MONTHS_NAMES = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
  ];
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth();
  return `${year} ${MONTHS_NAMES[month]}`;
};
