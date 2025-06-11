Object;
String;
Array;
Number;

const str = new String('');
const arr = new Array(5);
const num = new Number(1);

// OOP

// const car1 = {ride: function() {}};
// const car2 = {ride: function() {}};

// const ATM = {}

let createdUsersCount = 0;

function User(email, skills) {
  this.id = createdUsersCount;
  createdUsersCount = createdUsersCount + 1;

  this.email = email;
  this.skills = skills;

  // Завдання
  // Додати логіку для методу addSkill (додає 1 новий навичок до масиву skills)
  // Додати логіку для методу removeSkill (забирає 1 навичок з масиву skills)

  this.addSkill = function (skill) {
    this.skills.unshift(skill);
  };

  this.removeSkill = function (skill) {
    this.skills = this.skills.filter((sk) => sk !== skill);
  };

  this.showInfo = function () {
    console.table(this);
  };
}

const user1 = new User('email@gmail.com', ['JS', 'HTML', 'CSS']);
console.log(user1, 'user1');
user1.showInfo();

user1.addSkill('React');
console.log(user1, 'user1 after adding a skill');

user1.removeSkill('CSS');
console.log(user1, 'user1 after removing a skill');

const user2 = new User('email2@gmail.com', ['Python', 'GoLang']);
console.log(user2, 'user2');
user2.showInfo();

function AdminUser(email, skills, isAdmin = true) {
  const user = new User(email, skills);

  this.email = user.email;
  this.skills = user.skills;

  this.addSkill = user.addSkill;
  this.removeSkill = user.removeSkill;
  this.showInfo = user.showInfo;

  this.isAdmin = isAdmin;

  this.changePermissions = function (permissionsLevel) {
    this.isAdmin = permissionsLevel;

    if (permissionsLevel === false) {
      this.email = this.email.replace('admin-', '');
    }
  };

  console.log(this, 'admin user');
}

const adminUser = new AdminUser('admin-email@gmail.com', ['JS'], true);
console.log(adminUser, 'adminUser');

console.log(adminUser.email, 'email of the admin');
console.log(adminUser.skills, 'skills of the admin');

adminUser.addSkill('new skill');
console.log(adminUser, 'admin user after adding a skill');

adminUser.showInfo();

adminUser.changePermissions(false);

console.log(adminUser, 'admin user after changing the permissions');

const admin2 = new AdminUser('admin-email2@gmail.com', ['Ruby on Rails'], true);

admin2.removeSkill('Ruby on Rails');

console.log(admin2, 'admin2 after removing a skill');

// Завдання:
// Описати функцію - конструктор Point2D
// зберегти точки (x), (y) y this
// додати методи changeX(x), changeY(y)
// методи мають змінити значення точок (відповідно)

// Завдання:
// Описати функцію - конструктор Point3D
// унаслідувати поля (x, y) та методи changeX, changeY
// у Point2D

// додати параметр z та метод changeZ(z)

function Point2D(x, y) {
  this.x = x;
  this.y = y;

  this.changeX = function (x) {
    this.x = x;
  };

  this.changeY = function (y) {
    this.y = y;
  };
}

function Point3D(x, y, z) {
  const point2d = new Point2D(x, y);

  this.x = point2d.x;
  this.y = point2d.y;

  this.changeX = point2d.changeX;
  this.changeY = point2d.changeY;

  this.z = z;

  this.changeZ = function (pointZ) {
    this.z = pointZ;
  };
}

const pointsXYZ = new Point3D(10, 15, 20);
console.log(pointsXYZ, 'pointsXYZ');

pointsXYZ.changeX(100);
pointsXYZ.changeY(200);
pointsXYZ.changeZ(300);
console.log(pointsXYZ, 'pointsXYZ after change points');

const points = [
  new Point3D(10, 20, 30),
  new Point2D(20, 20),
  new Point3D(100, 200, 300),
];

// Завдання
// Відфільтрувати лише точки 3D filter

// const filteredPoints = points.filter((p) => "z" in p);
// const filteredPoints = points.filter((p) => p.hasOwnProperty("z"));
const filteredPoints = points.filter((p) => p.z);

console.log(filteredPoints, 'filteredPoints');

// Всім точкам 2D змінити параметр y на значення 1000 map, forEach

const changedPoints = points.map((p) => {
  if (!('z' in p)) {
    p.changeY(1000);
  }

  return p;
});

console.log(changedPoints, 'changedPoints');

console.log(points, 'points');

const obj = {};

new User();
new AdminUser();

new Point2D();
new Point3D();

function Car(color, price, maxSpeed) {
  // Entity data
  this.color = color;
  this.price = price;
  this.maxSpeed = maxSpeed;
}

// Static value
Car.track = {
  name: 'Track 1',
};

const car1 = new Car('black', 2000, 250);
console.log(car1, 'car1');

const car2 = new Car('white', 1000, 140);
console.log(car2, 'car2');

console.log(Car.track, 'track');

const a = new Number(10);

console.log(a, 'a');
console.log(Number.MIN_SAFE_INTEGER);

// Завдання:

// DocumentConstructor:
// Описати всі поля через this
// Додати метод changeAmount(amount) - змінює параметр amount (this.amount)

// SignedDocumentConstructor
// унаслідувати всі поля та методи з DocumentConstructor
// додати метод changeIsSigned(isSigned) - змінює параметр isSigned (boolean)

// по тестувати

function DocumentConstructor(title, amount, date) {
  this.title = title;
  this.amount = amount;
  this.date = date;

  this.changeAmount = function (newAmount) {
    this.amount = newAmount;
  };
}

function SignedDocumentConstructor(title, amount, date, isSigned = true) {
  const defaultDocument = new DocumentConstructor(title, amount, date);

  this.title = defaultDocument.title;
  this.amount = defaultDocument.amount;
  this.date = defaultDocument.date;

  this.changeAmount = defaultDocument.changeAmount;

  this.changeIsSigned = function(isSigned) {
    this.isSigned = isSigned;
  } 

  this.isSigned = isSigned;
}

const document1 = new DocumentConstructor('Document 1', 30, '01.02.2025');

document1.changeAmount(1000);

console.log(document1, 'document1');

const signedDocument1 = new SignedDocumentConstructor(
  'Signed Document 1',
  40,
  '02.01.2025'
);

signedDocument1.changeAmount(2000);
signedDocument1.changeIsSigned(false);

console.log(signedDocument1, 'SignedDocument1');
