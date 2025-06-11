// class

//es-6

// Inheritance
// Polymorphism
// Incapsulation
// Abstractivity

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

class AdminUser extends User {
  constructor(email, password, isAdmin = true) {
    super(email, password);

    this.isAdmin = isAdmin;
  }
}

const admin = new AdminUser('admin-mail@gmail.com', 'password', true);

admin.changeEmail('new-admin-user-email@gmail.com');
console.log(admin, 'admin');

const user = new User('email@gmail.com', 'password');

user.changeEmail('changed-email@gmail.com');

console.log(user, 'user');

// Завдання:
// створити клас Car (price, color, speed)
// додати метод changeColor(newColor), changePrice(price)

// Завдання:
// створити клас SportCar (наслідується від Car)
// Додати поле isSport
// Додати метод ride() - виводить в консоль параметр speed (The car is riding with speed ${speed})

// Створити екземпляр sportCar

class Car {
  constructor(price, color, speed) {
    this.price = price;
    this.color = color;
    this.speed = speed;
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const car1 = new Car(12000, 'red', 200);

console.log(car1, 'car1');

class SportCar extends Car {
  constructor(price, color, speed, isSport = true) {
    super(price, color, speed);

    this.isSport = isSport;
  }

  ride() {
    console.log(`This car is riding with speed ${this.speed}`);
  }
}

const sportCar = new SportCar(60000, 'black', 400, true);
console.log(sportCar, 'sportCar');

class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I am animal, named ${this.name}`);
  }

  sleep() {
    console.log(`The animal, named ${this.name} is sleeping. Zzzz`);
  }

  walk(distance) {
    console.log(
      `The animal, named ${this.name} is walking. The distance is :${distance}m`
    );
  }
}

const animal = new Animal('Lion');

animal.sayHello();

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  // Polimorphic
  sayHello() {
    console.log(`Haw-haw, I am a dog, named ${this.name}`);
  }

  sleep() {
    console.log(`The dog, named ${this.name} is sleeping. ZZZZZZZ`);
  }
}

const dog = new Dog('Bruno');
dog.sayHello();
dog.sleep();
dog.walk();

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.sleepTimes = 0;
  }
  // Polimorphic
  sayHello() {
    console.log(`Meow-meow, I am a cat, named ${this.name}`);
  }

  sleep() {
    console.log(`The cat, named ${this.name} is sleeping. ZZZZZ`);
    this.sleepTimes = this.sleepTimes + 1;
  }
}

const cat = new Cat('Felix');
cat.sayHello();

cat.sleep();
cat.sleep();
cat.sleep();
cat.walk();

console.log(cat.sleepTimes, 'sleepTimes');

class Fish extends Animal {
    constructor(name) {
        super(name);
    }

    walk (distance) {
        // throw new Error('The fish can not walk!');
        this.swim(distance);
    }

    swim(distance) {
        console.log(`The fish, named ${this.name} is swimming! Distance: ${distance}`)
    }

    sayHello() {
        console.log("bll-bll-bll-bll");
    }
}

const fish = new Fish("Bruce");

fish.walk(100);
fish.sayHello();

console.log("Log after error");


// Завдання
// Device
// Додати метод on(включити), off(виключити), update(оновити) - console.log
// Додати метод changePrice(price)

// Tablet
// Унаслідувати Device 
// змінити метод update - "The tablet is updating ..."

// IPad
// Унаслідувати Tablet
// Змінити методи off, on - "The Ipad is on/off"


// Phone
// Унаслідувати Device 
// Додати новий метод call(phoneNumber) - console.log()


class Device {
    constructor(brand, price) {}
}


class Tablet extends Device {}

class IPad extends Tablet {}

class Phone extends Device {}