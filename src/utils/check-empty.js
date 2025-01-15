export const checkEmpty = (value) => {
  if (value.trim()) {
    return true;
  }
  return false;
};
