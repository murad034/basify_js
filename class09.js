class Person{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    print(){
        console.log(`The name is ${this.name}`);
        console.log(`The height is ${this.height}`);
    }
}

class Student extends Person{
    constructor(name, height, age, weight){
        super(name, height);

        this.age = age;
        this.weight = weight;
    }

    show(){
        this.print();
        console.log(`The age is ${this.age}`);
        console.log(`The weigth is ${this.weight}`);
        throw '1';
    }
}

try{
    const p1 = new Person("Murad", 5.9);
    //p1.print();
    
    const s1 = new Student("Rafiq", 4.9, 27, 89);
    s1.show();
}catch(error){
    console.log('recevied catch');
    //console.log(error.message);
}finally{
    console.log("hey finally block");
}
