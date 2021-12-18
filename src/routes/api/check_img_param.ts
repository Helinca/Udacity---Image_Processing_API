// Checking if width or height positiv numbers
function checkNumParam(value: string): number {
  const num = Number(value);
  if (num && num >= 0) {
    return parseInt(value);
  } else {
    return 0;
  }
}

export default checkNumParam;
