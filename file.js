function drawTriangle(amount, star) {
  let line = "";
  for (let i = 1; i <= amount; i++) {
    line += star;
    console.log(line);
  }
}
drawTriangle(5, "*");

function triangleDraw(amount, star) {
  let line = "";
  let i = 0;
  while (i <= amount) {
    i++;
    line += star;
    console.log(line);
  }
}
triangleDraw(5, "*");
