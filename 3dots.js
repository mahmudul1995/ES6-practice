const ages=[12,34,56,23];
const ages2=[12,34,56,22];
const ages3=[90,45,64];

const allAges=ages.concat(ages2).concat(ages3);
const allAges2=[...ages,...ages2,5,...ages3];
// console.log(allAges2);
const business=650;
const minister=450;
const sochib=250;
const takaPoisa=[650,450,250];
const maximum=Math.max(...takaPoisa);
console.log(maximum);