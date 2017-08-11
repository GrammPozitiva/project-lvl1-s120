const generateNumber = (min = 0, max = 30) => Math.floor(min + (Math.random() * ((max + 1) - min)));
export default generateNumber;
