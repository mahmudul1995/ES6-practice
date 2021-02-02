class Student {
    constructor(sId,sName){
        this.Id=sId;
        this.Name = sName;
        this.school='Oxford School';

    }
}

const student=new Student(12,'shuvo');
const student2=new Student(22,'mahiya');
const student3=new Student(29,'Bappi');
console.log(student,student2,student3);