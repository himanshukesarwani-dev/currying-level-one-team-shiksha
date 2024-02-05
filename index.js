function beautifyInputs(char) {
  return function (...args) {
    return args.join(char);
  };
}

let beautifyInputsWithSpace = beautifyInputs(" ");
let beautifyInputsWithComma = beautifyInputs(",");
let beautifyInputsWithDash = beautifyInputs("-");
let beautifyInputsWithDot = beautifyInputs(".");
let beautifyInputsWithUnderscore = beautifyInputs("_");

if (
  beautifyInputsWithComma("a", "b", "c", "d") === "a,b,c,d" &&
  beautifyInputsWithDash("a", "b", "c", "d") === "a-b-c-d" &&
  beautifyInputsWithDot("a", "b", "c", "d") === "a.b.c.d"
) {
  console.log("This developer can curry level 1!");
}
