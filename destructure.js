const person={neme:"Ali",age:23,job:"student",phone:'01823'}
const {job, phone,age}=person;
// const job=person.job;
// const phone=person.phone;
console.log(job,phone);

const friends =['ali','jesad','Eakub','salman'];
const [chotoFriend,...nextFriend] = friends
console.log(nextFriend);