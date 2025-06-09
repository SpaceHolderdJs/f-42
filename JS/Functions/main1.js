// this - context of the function

function main() {
  console.log(this, 'this');
  console.log(window, 'window');
}

main();

const user = {
  email: 'email@gmail.com',
  age: 25,
  password: 'password',

  getEmail: function () {
    console.log(this.email, 'getEmail');
    return this.email;
  },

  setEmail: function (newEmail) {
    this.email = newEmail;
  },

  birthday: function () {
    console.log(`Happy birthday to a user ${this.email}!`);
    this.age = this.age + 1;
  },

  // !!! Arrow functions are not supporting THIS
  sayHello: () => {
    console.log(this, 'this from arrow function');
    console.log(`Hello from ${this.email}`);
  },
};

user.getEmail();
user.setEmail('newEmail@gmail.com');
user.getEmail();

user.birthday();

console.log(user, 'user after the updates');

user.sayHello();

const ATM = {
  cashAmount: 0,
  operations: 0,
  lastOperation: null,
  cards: [],

  loadCash: function (loadedCash) {
    this.cashAmount = this.cashAmount + loadedCash;
    alert(`ATM has received the cash amount: ${loadedCash}.
    Total amount is: ${this.cashAmount}`);
  },

  rememberCard: function (card) {
    this.cards.push(card.number);
  },

  chargeCashOperation: function (card) {
    const cashToBeCharged = +prompt(
      `Please enter an amount of the cash you need`
    );

    if (this.cashAmount >= cashToBeCharged) {
      if (card.balance < cashToBeCharged) {
        alert(`Your card has not enough balance for this operation`);
        return;
      }

      this.cashAmount = this.cashAmount - cashToBeCharged;
      card.balance = card.balance - this.cashAmount;

      alert(`Please take your cash: ${cashToBeCharged}`);
    } else {
      alert(`This ATM has not enough cash for this operation`);
      return;
    }
  },

  discoverCardBalanceOperation: function (card) {
    alert(`The balance of the card ${card.number} is ${card.balance}`);
  },

  selectOperation: function (card) {
    const operation = prompt(
      'Please select an operation (check-balance, charge-cash, exit)'
    )
      .toLowerCase()
      .trim();

    switch (operation) {
      case 'charge-cash': {
        this.chargeCashOperation(card);
        this.operations = this.operations + 1;
        return 1;
      }

      case 'check-balance': {
        this.discoverCardBalanceOperation(card);
        this.operations = this.operations + 1;
        return 1;
      }

      case 'exit': {
        alert('The session is ended');
        return 0;
      }

      default: {
        alert('Invalid operation, finishing the session');
        return 1;
      }
    }
  },

  uploadCreditCard: function (card) {
    // validatePIN
    const userPIN = +prompt(`Please enter the PIN for the card ${card.number}`);

    if (userPIN !== card.PIN) {
      alert('The PIN is wrong, please take you card');
      return card;
    }

    this.rememberCard(card);

    while (true) {
      const operationResult = this.selectOperation(card);

      if (operationResult === 0) {
        break;
      }
    }
  },
};

// ATM.loadCash(10000);

// ATM.uploadCreditCard({
//   PIN: 1111,
//   balance: 1200,
//   number: '4444 1111 2222 3333',
// });

console.log(ATM, 'ATM');

const car = {
  fuel: 50,
  distance: 0,
  maxSpeed: 200,
  capacity: 5,
  passengers: 1,

  // d - відстань яку треба проїхати
  ride: function (d) {
    if (this.passengers === 0) {
      console.error("The car would not ride, it's empty");
      return;
    }

    if (this.fuel === 0) {
      console.error('The car would not ride without fuel');
      return;
    }

    console.log(
      `The car is riding! Passengers: ${this.passengers}. Fuel: ${this.fuel}. Distance to ride: ${d}`
    );

    this.distance = this.distance + d;
  },

  // passengers - кількість пасажирів, що увійшли
  onboard: function (passengers) {
    if (passengers > this.capacity - this.passengers) {
      console.error(
        `The car could not fit more than ${this.capacity} passengers!`
      );
      return;
    }

    console.log(`${passengers} passengers have been onboarded successfully`);
    this.passengers = this.passengers + passengers;
  },

  // passengers - кількість пасажирів, що вийшли
  outboard: function (passengers) {
    if (this.passengers < passengers) {
      console.error(
        `This amount of passengers could not leave the car (too much of them)`
      );
      return;
    }

    console.log(`${passengers} passengers just leaved the car`);
    this.passengers = this.passengers - passengers;
  },

  // Завдання:
  // реалізувати правила

  // - ride:
  // машина рушає лише з хочаб 1 пасажиром (passengers)
  // машина рушає лише коли є бензин (fuel)
  // машина записує до дистанції параметр (d)

  // - onboard:
  // машина може прийняти пасажирів не більше ніж (capacity)

  // - outboard:
  // з машини не може вийти більше людей, ніж у ній було (passengers)

  // onboard та outboard впливають на кількість пасажирів у машині (passengers)
};

car.onboard(5);

car.ride(50);

car.outboard(2);
