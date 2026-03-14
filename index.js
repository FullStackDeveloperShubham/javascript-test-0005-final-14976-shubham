let count = 1;

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += count + " ";
    count++;
  }

  console.log(row.trim());
}

//  JAVASCRIPT TEST 0002 = solution 
let number = 5;

for (let i = 1; i <= number; i++) {
  let row = "";

  for (let j = 1; j <= number - i; j++) {
    row += " ";
  }

  row += "*";

  if (i > 1) {
    for (let j = 1; j <= 2 * i - 3; j++) {
      row += " ";
    }
    row += "*";
  }

  console.log(row);
}

for (let i = number - 1; i >= 2; i--) {
  let row = "";

  for (let j = 1; j <= number - i; j++) {
    row += " ";
  }

  row += "*";

  if (i > 1) {
    for (let j = 1; j <= 2 * i - 3; j++) {
      row += " ";
    }
    row += "*";
  }

  console.log(row);
}

// ### JAVASCRIPT TEST 0003
let n = 6;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 === 0) {
      row += "1 ";
    } else {
      row += "0 ";
    }
  }

  console.log(row.trim());
}

// ###  JAVASCRIPT TEST 0004
let digit = 4;
let size = 2 * digit - 1;

for (let i = 0; i < size; i++) {
  let row = "";

  for (let j = 0; j < size; j++) {

    let top = i;
    let left = j;
    let bottom = size - 1 - i;
    let right = size - 1 - j;

    let minDistance = Math.min(top, left, bottom, right);

    row += (digit - minDistance) + " ";
  }

  console.log(row.trim());
}