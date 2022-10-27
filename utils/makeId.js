export const makeId = (Length) => {
  const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < Length; i += 1) {
    result += randomLetters.charAt(Math.floor(Math.random() * randomLetters.length));
  }
  return result;
};
