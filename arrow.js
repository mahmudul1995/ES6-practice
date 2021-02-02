// function doubleIt(num){
//     return num*3;
// }
// const doubleIt = function (num){
//     return num*3;
// }
//console.log(doubleIt);

// const doubleIt=num=>num*3;
// const result= doubleIt(3);
// const give5=()=>6;
// const add= (x,y) =>x+y;
// const result=add(3,4)
// const result2=give5()
// console.log(result2);

const doMath=(x,y) =>{
    const sum=x+y;
    const difference=x-y;
    const result=sum*difference;
    return result;
}
const result=doMath(6,4);
console.log(result);