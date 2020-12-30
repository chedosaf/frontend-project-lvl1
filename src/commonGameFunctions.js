const generateRandomNumber = (min, max) => Math.floor(Math.random() * (Math.floor(max)
  - Math.ceil(min))) + Math.ceil(min);

const nod = (a, b) => {
  if (b > a) return nod(b, a);
  if (!b) return a;
  return nod(b, a % b);
};

export { generateRandomNumber, nod };
