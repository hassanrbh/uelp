export const MagicUsername = (first, last) => {
  const first_letter = first.slice(0, 1).toUpperCase();
  const last_name_letter = last.slice(0, 1).toUpperCase();
  return first_letter + first.slice(1) + ' ' + last_name_letter + '.';
};
