// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let drawing = []
let i=1
let j = 1

while (j<6) {
    drawing.push(`${"*".repeat(i)}`)
    j++
    i++
};
console.log(drawing.join("\n"))

let drawing_2=[]
let z = 1

for(x=1; x<6;x++) {
    if (z<6){
        drawing_2.push(`${"*".repeat(z)}`)
        z++
    };
};
console.log(drawing_2.join("\n"))
