var base  = 3
var side  = base*base

function pattern(r,c){
    return (base*(r%base)+Math.floor(r/base)+c)%side
}

function shuffleArray(array) 
{
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
  return sample(array, array.length)
}

var rBase = range(base)
for(let r = 0;r<rBase;r++)
{
    for(let g = 0; g<rBase;g++)
    {
        
    }
}