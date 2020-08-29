const assert = require("assert");
const {forEach, map} = require("./index");
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

    assert.strictEqual(sum, 8, "sum must be 6 ")

    // if (sum !== 7) throw new Error("Expected summing array be 6");
});

test("The map function", () => {
    const result = map([1, 2, 3], (value) => {
        return value * value;
    });
    assert.deepStrictEqual(result, [2, 4, 6])
    // assert.strictEqual(result[0], 1)
    // assert.strictEqual(result[1], 4)
    // assert.strictEqual(result[2], 9)

});
