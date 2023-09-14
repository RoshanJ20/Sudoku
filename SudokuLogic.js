const base = 3;
const side = base * base;

// Function for the baseline valid solution pattern
function pattern(r, c) {
  return (base * (r % base) + Math.floor(r / base) + c) % side;
}

// Function to shuffle an array
function shuffle(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const rBase = [...Array(base).keys()];
const rows = shuffle(rBase).flatMap((g) =>
  shuffle(rBase).map((r) => g * base + r)
);
const cols = shuffle(rBase).flatMap((g) =>
  shuffle(rBase).map((c) => g * base + c)
);
const nums = shuffle([...Array(base * base).keys()].map((x) => x + 1));

// Generate the Sudoku board using the randomized baseline pattern
const board = rows.map((r) => cols.map((c) => nums[pattern(r, c)]));

// Print the board
for (const line of board) {
  console.log(line);
}