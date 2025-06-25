// Patterns

// Fabric

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak(message) {
    console.log(`I am cat, I said: ${message}`);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  speak(message) {
    console.log(`I am dog, I said: ${message}`);
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`_________`);
  }
}

const animalData = {
  paws: 4,
  canMeow: true,
  name: 'Bruce',
};

class AnimalsFabric {
  static createdAnimals = {
    fish: [],
    cat: [],
    dog: [],
  };

  constructor(animalData) {
    const { paws, canMeow, name } = animalData;

    if (!paws || paws !== 4) {
      const fish = new Fish(name);
      AnimalsFabric.createdAnimals.fish.push(fish);

      return fish;
    }

    if (canMeow) {
      const cat = new Cat(name);
      AnimalsFabric.createdAnimals.cat.push(cat);

      return cat;
    }

    const dog = new Dog(name);
    AnimalsFabric.createdAnimals.dog.push(dog);

    return dog;
  }
}

const animal1 = new AnimalsFabric({ paws: 4, canMeow: true, name: 'Cat' });
const animal2 = new AnimalsFabric({ paws: 4, canMeow: false, name: 'Dog' });
const animal3 = new AnimalsFabric({ paws: 0, canMeow: false, name: 'Fish' });

const animal4 = new AnimalsFabric({ paws: 4, canMeow: true, name: 'Cat2' });

console.log(animal1, 'animal1');
console.log(animal2, 'animal2');
console.log(animal3, 'animal3');
console.log(animal4, 'animal4');

console.log(AnimalsFabric.createdAnimals, 'created animals');

// Завдання

// 1. Описати конструктори документів
// SignedDocument (content: string, signed: boolean)
// PrivateSignedDocument (content: string, signed: boolean, isPrivate: true)
// MultiPersonsSignedDocument (content: string, signed: boolean, signers: ["Oleg", "Igor"])

// *наслідуватися

// class SignedDocument {}

// class PrivateSignedDocument {}

// class MultiPersonsSignedDocument {}

// 2. Описати конструктор фабрики за шаблоном
// const documentData = {
//     content: "",
//     signed: true,
//     isPrivate: false,
//     signers: []
// }

// Якщо документ не приватний і не має signers - SignedDocument
// Якщо документ приватний і не має signers - PrivateSignedDocument
// Якщо документ має signers - MultiPersonsSignedDocument

// class DocumentsFabric {
//     constructor() {}
// }

class SignedDocument {
  constructor(content, signed) {
    this.content = content;
    this.signed = signed;
  }
}

class PrivateSignedDocument extends SignedDocument {
  constructor(content, signed, isPrivate = true) {
    super(content, signed);

    this.isPrivate = isPrivate;
  }
}

class MultiPersonsSignedDocument extends SignedDocument {
  constructor(content, signed, signers = []) {
    super(content, signed);

    this.signers = signers;
  }
}

// 2. Описати конструктор фабрики за шаблоном
// const documentData = {
//     content: "",
//     signed: true,
//     isPrivate: false,
//     signers: []
// }

// Якщо документ не приватний і не має signers - SignedDocument
// Якщо документ приватний і не має signers - PrivateSignedDocument
// Якщо документ має signers - MultiPersonsSignedDocument

class DocumentsFabric {
  static documentsData = {
    signedDoc: [],
    isPrivateSignedDoc: [],
    multiSignedDoc: [],
  };

  constructor(documentData) {
    const { content, signed, isPrivate, signers } = documentData;

    if (isPrivate) {
      const isPrivateDoc = new PrivateSignedDocument(
        content,
        signed,
        isPrivate
      );
      DocumentsFabric.documentsData.isPrivateSignedDoc.push(isPrivateDoc);

      return isPrivateDoc;
    }

    if (signers.length > 0) {
      const isMultiDoc = new MultiPersonsSignedDocument(
        content,
        signed,
        signers
      );
      DocumentsFabric.documentsData.multiSignedDoc.push(isMultiDoc);

      return isMultiDoc;
    }

    const signedDoc = new SignedDocument(content, signed);
    DocumentsFabric.documentsData.signedDoc.push(signedDoc);

    return signedDoc;
  }
}

const doc1 = new DocumentsFabric({
  content: 'smth',
  signed: true,
  isPrivate: false,
  signers: [],
});

console.log(doc1, 'doc1');

const doc2 = new DocumentsFabric({
  content: 'smth',
  signed: true,
  isPrivate: true,
  signers: [],
});

console.log(doc2, 'doc2');

const doc3 = new DocumentsFabric({
  content: 'smth',
  signed: true,
  isPrivate: false,
  signers: ['signer1', 'signer2'],
});

console.log(doc3, 'doc3');

// Middleware

class User {
  constructor(email, password, isLoggedIn = false) {
    this.email = email;
    this.password = password;
    this.isLoggedIn = isLoggedIn;
  }

  register() {
    this.isLoggedIn = true;
    console.log(`This user has been registered: ${this.email}`);
    // return this;
    return 0;
  }

  post(title) {
    console.log(`This user (${this.email}) has posted a post: ${title}`);
    // return this;
    return 1;
  }

  logout() {
    this.isLoggedIn = false;
    console.log(`This user ${this.email} has been logged out`);
    // return this;
    return 2;
  }
}

const users = [
  new User('email1@gmail.com', 'password', false),
  new User('email2@gmail.com', 'password2', false),
  new User('email3@gmail.com', 'password3', false),
  new User('email4@gmail.com', 'password4', false),
  new User('email5@gmail.com', 'password5', false),
];

users.forEach((user) => {
  const { register, post, logout } = user;

  const sequence = [register.bind(user), post.bind(user), logout.bind(user)];

  const results = sequence.map((fn, i) => {
    if (i === 1) {
      const result = fn('Post title');
      return result;
    }

    return fn();
  });

  console.log(results, 'results');
});

// Завдання:

// Описати конструктор Car
// Описати методи Car

// - fillup - додає бензин (fuel)
// - ride - додає дистанцію (distance)
// - stop - зупиняє (сonsole.log)

// Застосувати паттерн Middleware на масиві cars

// fillup -> ride -> stop
// *return this!

class Car {
  constructor(model, fuel, distance) {
    this.model = model;
    this.fuel = fuel;
    this.distance = distance;
  }

  fillup(fuel = 10, fuelType = 'A-95') {
    console.log(
      `The car ${this.model} has been filled with ${fuel}, type of the fuel: ${fuelType}`
    );
    this.fuel += fuel;

    return this.fuel;
  }

  ride(distance = 100) {
    console.log(`The car ${this.model} is riding for the distance ${distance}`);
    this.distance += distance;

    return this.distance;
  }

  stop() {
    console.log(`The car ${this.model} has been stopped`);

    return false;
  }
}

const cars = [
  new Car('Ford', 0, 0),
  new Car('Toyota', 0, 0),
  new Car('Dodge', 0, 0),
];

cars.forEach((car) => {
  console.log(`Processing car: ${car.model}...`);

  const { fillup, ride, stop } = car;

  const sequence = [
    fillup.bind(car, 15, 'A-92'),
    ride.bind(car, 200),
    stop.bind(car),
  ];

  // without an output result
  //   sequence.forEach((method) => {
  //     method();
  //   });

  // with results
  const finalResult = sequence.map((callback) => {
    const result = callback();
    return result;
  });

  console.log(finalResult, 'finalResult');
});

// Observer

class ObservablePattern {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(
      (observer) => observer.name !== fn.name
    );
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

class BreakAbleObserver extends ObservablePattern {
  notify(data) {
    for (const fn of this.observers) {
      try {
        fn(data);
      } catch (err) {
        break;
      }
    }
  }
}

const registrationObserver = new BreakAbleObserver();

const registerUserData = {
  email: 'emailgmail.com',
  password: 'password1',
};

function validateUserData(data) {
  if (data.password.length < 6) {
    console.log(`Password is too short`);
    throw new Error(`Password is too short`);
  }

  if (!data.email.includes('@') || !data.email.includes('.')) {
    console.log(`Email is invalid`);
    throw new Error(`Email is invalid`);
  }
}

function sendUserDataToTheServer(data) {
  console.log(`Data to send to server: ${data.email}, ${data.password}`);
}

registrationObserver.subscribe(validateUserData);
registrationObserver.subscribe(sendUserDataToTheServer);

// registrationObserver.unsubscribe(sendUserDataToTheServer);

registrationObserver.notify(registerUserData);

let counter = 0;
let sum = counter + 100;

const counterObserver = new ObservablePattern();

function logCounter(counter) {
  console.log(`Updated counter: ${counter}`);
}

function updateCounterHTML(counter) {
  const counterHTMLElement = document.querySelector('#counter');
  counterHTMLElement.textContent = counter;
}

function recalculateSum(counter) {
  sum = counter + 100;
  console.log(`New sum: ${sum}`);
}

counterObserver.subscribe(logCounter);
counterObserver.subscribe(updateCounterHTML);
counterObserver.subscribe(recalculateSum);

const increaseButton = document.querySelector('#counter-increase');
increaseButton.onclick = () => {
  counterObserver.notify(++counter);
};

const decreaseButton = document.querySelector('#counter-decrease');
decreaseButton.onclick = () => {
  counterObserver.notify(--counter);
};

function resetCounter() {
  counter = 0;
  updateCounterHTML(counter);
}

const resetButton = document.querySelector('#counter-reset');
resetButton.onclick = () => {
  resetCounter();
};
