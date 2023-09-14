function myFn()
{
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

function randInt25(){
  var size = 27;
  var arr1 = [0,1,2,3,4,5,6,7,8]
  // while(arr.length < 27)
  var ind = []
  for(var j=0;j<arr1.length;j++)
  {
    var arr2 = shuffleArray(arr1)
    for(var i=0;i<3;i++)
    {
      var b = j+""+arr2[i]
      console.log(j+""+arr2[i])
      ind.push(j+""+arr2[i])
      var loc = "_"+b
      console.log(typeof(loc))
      document.getElementById(loc).innerHTML = board[j][arr2[i]]
    }
  }
}

function shuffleArray(array) 
{
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

var a = randInt25()
}