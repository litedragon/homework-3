function printWindowValues() {
  console.log(window);
}

function expTen(num) {
  var a = 1;
  for (var i = 0; i <= 9; i++) {
    a *= num;
  }
  return a;
}

function getFuncRes(func, arg) {
  func(arg);
}

printWindowValues();
console.log(expTen(2));
getFuncRes(console.log, "Hello World!");
