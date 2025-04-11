function setup() {
    createCanvas(500, 500);
    background(17);
    stroke(255);
    drawCircleMidpoint(width / 2, height / 2, 100);
  }
  
  function drawPixel(x, y) {
    point(x, y);
  }
  
  function plotCirclePoints(xc, yc, x, y) {
    drawPixel(xc + x, yc + y);
    drawPixel(xc - x, yc + y);
    drawPixel(xc + x, yc - y);
    drawPixel(xc - x, yc - y);
    drawPixel(xc + y, yc + x);
    drawPixel(xc - y, yc + x);
    drawPixel(xc + y, yc - x);
    drawPixel(xc - y, yc - x);
  }
  
  function drawCircleMidpoint(xc, yc, r) {
    let x = 0;
    let y = r;
    let p = 1 - r;
  
    plotCirclePoints(xc, yc, x, y);
  
    while (x < y) {
      x++;
      if (p < 0) {
        p += 2 * x + 1;
      } else {
        y--;
        p += 2 * (x - y) + 1;
      }
      plotCirclePoints(xc, yc, x, y);
    }
  }
  