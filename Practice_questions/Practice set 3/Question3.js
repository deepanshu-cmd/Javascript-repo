let i = 0;
while (++i < 5) console.log(i);
console.log('\n')
let j = 0;
while (j++ < 5) console.log(j);

for (let i = 0; i < 5; ++i) console.log(i);
for (let i = 0; i < 5; i++) console.log(i);
//* Both statements will give same answer as the value returned by the increment is not used here, so there’s no difference between i++ and ++i. 