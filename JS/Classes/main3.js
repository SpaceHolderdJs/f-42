// Incapsulation
// Abstraction
// Inheritance
// Polymorphism

// Incapsulation

class Club {
  #passPhrase = 'hey';

  constructor(members) {
    this.members = members;

    this.#addMember('Igor');
  }

  #addMember(member) {
    this.members.push(member);
  }

  getPassPhrase() {
    return this.#passPhrase;
  }
}

const club = new Club(['John', 'Anna']);
console.log(club, 'club');

console.log(club.members, 'members of the club');

console.log(club.getPassPhrase(), 'pass phrase');

class SuperClub extends Club {
  #passPhrase = 'super-passphrase';

  constructor(members) {
    super(members);
  }

  getPassPhrase() {
    return this.#passPhrase;
  }
}

const superClub = new SuperClub(['SuperMember1', 'SuperMember2']);

console.log(superClub, 'superClub');
console.log(superClub.getPassPhrase(), 'pass phrase of the super club');

// console.log(club.#passPhrase, "pass phrase")

// club.#addMember("Oleg");

// Завдання:

// додати приватне поле connections до серверу (#)
// додати публічний метод connect(сonnectionId) - додавати до приватного поля connections новий connection
// створити екзепляр та протестувати

// змінити connections на масив ([])
// додати метод disconnect(connectionId) - приватний, що видаляє вказаний connection

class Server {
  #connections = ['connection1'];

  constructor() {}

  connect(connection) {
    this.#connections.push(connection);
  }

  #disconnect(connectionToDelete) {
    this.#connections = this.#connections.filter(
      (c) => c !== connectionToDelete
    );
  }
}

const server = new Server();

console.log(server, 'server');
server.connect('connection1');

console.log(server, 'server after connections');

console.log(server, 'server after disconnection');

class A {
  #a = 10;
}

class B extends A {}

const a = new A();
console.log(a, 'a');

const b = new B();
console.log(b, 'b');

// Abstractions

class ServerResponse {
  time = new Date();
  v = '';
  id = '';
}

class AuthServerResponse extends ServerResponse {
  email = '';
  name = '';
  skills = [];
  password = '';
}

const authResponse1 = new AuthServerResponse();
console.log(authResponse1, 'authResponse1');

class AuthServerResponseRealData extends AuthServerResponse {
  constructor(email, name, skills, id, time, v, password) {
    super();

    this.email = email;
    this.name = name;
    this.skills = skills;

    this.id = id;
    this.time = time;
    this.v = v;

    this.password = password;
  }
}

const authServerRealResponse = new AuthServerResponseRealData(
  'email1@gmail.com',
  'Igor',
  ['JS', 'TS', 'Go Lang'],
  'id-1',
  new Date(),
  1,
  'password'
);

console.log(authServerRealResponse, 'authServerRealResponse');

// Inheritance

class User {
  constructor(name) {
    this.name = name;
  }
}

const user = new User('Igor');

class AdminUser extends User {
  constructor(name, isAdmin) {
    super(name);

    this.isAdmin = isAdmin;
  }

  changeIsAdmin(newIsAdmin) {
    this.isAdmin = newIsAdmin;
  }
}

const adminUser = new AdminUser('Igor', true);

console.log(user, adminUser, 'user and adminUser');

// Polymorphism

const privateConnection1 = {
  url: '...',
  host: 'private host1',
  port: '4444',
  isPrivate: true,
};

const publicConnection1 = {
  url: '...',
  host: 'public host',
  port: '3000',
  isPrivate: false,
};

class Server2 {
  constructor(url, connections) {
    this.url = url;
    this.connections = connections;
  }

  connect(connection) {
    this.connections.push(connection);
  }
}

const server2 = new Server2('https://server1.com', []);

server2.connect(publicConnection1);

console.log(server2, 'server2');

class PrivateServer2 extends Server2 {
  constructor(url, connections) {
    super(url, connections);
  }

  connect(connection) {
    if (connection.isPrivate) {
      this.connections.push(connection);
    }
  }
}

const privateServer2 = new PrivateServer2('https://private-url.com', []);

privateServer2.connect(privateConnection1);
privateServer2.connect(publicConnection1);

console.log(privateServer2, 'privateServer2');

// Incapsulation
// Abstraction
// Inheritance
// Polymorphism

class AutoServiceTemplate {
  #cars = [];
  #repairedCars = [];

  onboard() {}

  outboard() {}

  repair() {}
}

class AutoService extends AutoServiceTemplate {
  #cars;
  #repairedCars;

  constructor(cars, repairedCars) {
    super();

    this.#cars = cars;
    this.#repairedCars = repairedCars;
  }

  onboard(car) {
    this.#cars.push(car);
  }

  outboard(car) {
    this.#repairedCars = this.#repairedCars.filter((c) => c.vin !== car.vin);
  }

  repair(car) {
    this.#cars = this.#cars.filter((c) => c.vin !== car.vin);
    this.#repairedCars.push(car);
  }
}

class SportCarsService extends AutoService {
    constructor(cars, repairedCars, forModels = ["Mustang", "Camaro", "BRZ"]) {
        super(cars, repairedCars);

        this.forModels = forModels;
    }

    onboard(car) {
        if(this.forModels.includes(car.model)) {
            super.onboard(car);
        }
    }
}



// Завдання

// SocialNetwork
// Додати абстракцію даних (AbstractSocialNetwork), унаслідувати цю абстракцію
// Додати метод onboard(user) - додає user у members ([])
// Додати метод post(post) - додає post у posts ([])


class SocialNetwork {

    constructor(members, posts, blockedList) {
        // ...
    }
}

const socialNetwork = new SocialNetwork([], [], []);

// SocialNetworkUser
// Описати конструктор
// Додати приватне поле #socialNetwork
// Додати метод register (використовує метод onboard з SocialNetwork екземпляру)
// Додати метод post (використовує метод post з SocialNetwork екземпляру)

class SocialNetworkUser {
    #socialNetwork = socialNetwork;

    constructor(name, email, age, interests = []) {}
}

// SocialNetworkAdmin
// Додати приватне поле #socialNetwork
// Описати конструктор
// Додати метод block(user) додає user до blockedList його socialNetwork

class SocialNetworkAdmin extends SocialNetworkUser {
    #socialNetwork = socialNetwork;
    constructor(name, email, age, interests = [], isAdmin) {}
}