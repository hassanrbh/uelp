export const CapitalizeAddressWithNumbers = (address) => {
  const words = address.split(' ');
  const newAddress = [];
  words.forEach((word) => {
    if (typeof word === 'string') {
      newAddress.push(word.slice(0, 1).toUpperCase() + word.slice(1));
    }
  });
  return newAddress.join(' ');
};
