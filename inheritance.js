
class Parent {
    constructor(){
        this.fatherName="Abdullah"
    }
}

class Child extends Parent {
     constructor(name){
         super();
         this.name=name;
     }
     getFullName(){
        return this.name+ " " +this.fatherName;
     }
 }

 const baby=new Child("Jesad");
 const baby2=new Child("Jannat");
 console.log(baby.getFullName());
 console.log(baby2);