const { forEach, map } = require("./index");
const test = (desc, fn) => {
  console.log("---", desc);
  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

test("The foreach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });
  if (sum !== 7) throw new Error("Expected summing array be 6");
});

test("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * value;
  });

  if (result[0] !== 1)
    throw new Error(`result 0 must be 1 but found ${result[0]}`);
  if (result[1] !== 4)
    throw new Error(`result 1 must be 4 but found ${result[1]}`);
  if (result[2] !== 9)
    throw new Error(`result 2 must be 9 but found ${result[2]}`);
});
