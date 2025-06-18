// class [Static]

class EmailSender {
  static emailFrom = 'email@gmail.com';
  static authToken = 'asjak-sks13-sk2-dk4i';

  static send(to) {
    console.log(`Sending mail to the: ${to}`);
  }

  // constructor(emailFrom, authToken) {
  //     this.emailFrom = emailFrom;
  //     this.authToken = authToken;
  // }

  // send(to) {
  //     console.log(`Sending mail to the: ${to}`);
  // }
}

console.log(EmailSender.emailFrom, 'email from');
console.log(EmailSender.authToken, 'auth');

EmailSender.send('email1');
EmailSender.send('email2');

// const emailSender = new EmailSender("email@gmail.com", "asjak-sks13-sk2-dk4i");

// emailSender.send("customer-email1@gmail.com");

// Завдання
// Static
// створити статичний клас CommandLine
// Додати інформацію (дані):
// os = "Windows/Linux/MacOs"
// lastPrompt = "";
// Додати методи
// prompt(command) - змінювати параметр lastPrompt + console.log
// clear() - очищає параметр lastPrompt + console.log

class CommandLine {
  static os = 'MacOs';
  static lastPrompt = '';

  static prompt(prompt) {
    console.log(`[Prompt]: ${prompt}`);
    CommandLine.lastPrompt = prompt;
  }

  static clear() {
    console.log(`[Clear]`);
    CommandLine.lastPrompt = '';
  }
}

CommandLine.prompt('Hello');
CommandLine.clear();

CommandLine.prompt('Hello world!');

console.log(CommandLine.lastPrompt, 'command line last prompt');

class MarketingSender extends EmailSender {
  static emailFrom = 'marketing@gmail.com';

  static template(data) {
    const { customerName, customerEmail, customerId } = data;

    return `<div class="email-body" id="${customerId}">
        <div class="content">
            <h1>Dear ${customerName}</h1>
            <span>${customerEmail}</span>
        </div>
    </div>`;
  }

  static send(customers) {
    customers.forEach((customer) => {
      const template = MarketingSender.template(customer);

      console.log(
        `Sending a marketing mail to the: ${customer.customerEmail}...`
      );
      console.log(`Template: ${template}`);

      // You could use the methods of the inherited classes
      // super.send(email);
    });
  }
}

console.log(
  MarketingSender.emailFrom,
  MarketingSender.authToken,
  'Static data from the MarketingSender'
);

const customers = [
  {
    customerId: 1,
    customerName: 'John',
    customerEmail: 'customer-email1@gmail.com',
    supportCallingReason: 'general fail',
  },
  {
    customerId: 2,
    customerName: 'Ben',
    customerEmail: 'customer-email2@gmail.com',
    supportCallingReason: 'general fail',
  },
  {
    customerId: 3,
    customerName: 'Noah',
    customerEmail: 'customer-email3@gmail.com',
    supportCallingReason: 'failed to login',
  },
];

MarketingSender.send(customers);

// Завдання
// унаслідувати MarketingSender статично
// змінити: emailFrom, authToken
// змінити метод send(to, supportCallingReason) - вказати supportCallingReason  у новому методі
// змінити метод template() -  з урахуванням supportCallingReason
// додати статичний supportCallingReasonsCollector - який рахує різні причини для звернення

class SupportSender {
  static supportCallingReasonsCollector = {};

  static template(data) {
    const { customerId, customerName, supportCallingReason } = data;

    return `
        <div class="email-body" id="${customerId}">
        <div class="content">
            <h1>Support of ${customerName}</h1>
            <span>Reason: ${supportCallingReason}</span>
        </div>
    </div>`;
  }

  static send(customers) {
    customers.forEach((customer) => {
      const reason = customer.supportCallingReason;

      if (SupportSender.supportCallingReasonsCollector[reason]) {
        SupportSender.supportCallingReasonsCollector[reason]++;
      } else {
        SupportSender.supportCallingReasonsCollector[reason] = 1;
      }

      const template = SupportSender.template(customer);
      console.log(template, 'Support Sender Template');
    });
  }
}

SupportSender.send([...customers]);

console.log(
  SupportSender.supportCallingReasonsCollector,
  'supportCallingReasonsCollector'
);

// Завдання:
// описати клас (абстрактний) AutoService

// cars - машини клієнтів (екземпляри класу Car)
// repairedCars - машини, готові до видачі (відремонтовані)

// repair(vin) - знаходить машину у cars, забирає її у repairedCars
// onboard(car) - додає машину до cars
// outboard(car) - видає машину клієнту (забирає її з repairedCars)

class AutoService {
  static cars = [];
  static repairedCars = [];

  static repair(vin) {
    const repairCarIndex = AutoService.cars.findIndex((car) => car.vin === vin);

    if (repairCarIndex === -1) return null;

    const [repairedCar] = AutoService.cars.splice(repairCarIndex, 1);

    AutoService.repairedCars.push(repairedCar);

    return repairCarIndex;
  }

  static onboard(car) {
    AutoService.cars.push(car);
  }

  static outboard(car) {
    AutoService.repairedCars = AutoService.repairedCars.filter(
      (carToFilter) => carToFilter.vin !== car.vin
    );
  }
}

// Завдання
// Додати логіку створення екземплярів машини car(brand, model, color, price, vin)

class Car {
  constructor(brand, model, color, price, vin) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.vin = vin;
  }
}

const cars = [
  new Car('Ford', 'Mustang', 'Ruby', 20000, '1se3243243i43284'),
  new Car('Toyota', 'GT', 'Blue', 15000, '121094912923f2'),
  new Car('Subaru', 'BRZ', 'Black', 13000, '123029202020'),
];

cars.forEach((car) => {
  AutoService.onboard(car);
  console.log(`The car ${car.model}, ${car.brand} has been onboarded`);

  AutoService.repair(car.vin);
  console.log(`The car ${car.model}, ${car.brand} has been repaired`);

  AutoService.outboard(car);
  console.log(`The car ${car.model}, ${car.brand} has been outboard`);
});

// Автомобілі мають обслуговуватися на AutoService
// onboard -> repair -> outboard
