function compose(f, g) {
  // Compose the two functions here!
}

let add = function(a) {
  return a + 1;
};
let id = function(a) {
  return a;
};
let divide = function(a) {
  return a / 2;
};

console.log(
  compose(
    add,
    id
  )
);
console.log(
  compose(
    add,
    divide
  )
);
