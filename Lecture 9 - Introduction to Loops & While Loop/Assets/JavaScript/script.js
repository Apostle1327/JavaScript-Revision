let a = "1";
while (a <= 255) {
  console.log(`${a} \n`);
  a += 1;
}

let b = 1;
while (b <= 255) {
  console.log(`${b}\n`, ++b);
}

let c;

for (a = 1; a <= 32767; a++) {
  console.log(`${a} `);
}

let d;

for (d = 1; d++ <= 5; console.log(`${d} `)) {}

let e = 1,
  f = 1;

for (; f; console.log(`${e}${f}`)) {
  f = e++ <= 5;
}
