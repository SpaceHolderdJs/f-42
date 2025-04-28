Object;

const obj = new Object({ value: 1 });

console.log(obj, "obj");

const obj2 = { value: 2, subvalue: 3 };
console.log(obj2);

const keys = Object.keys(obj2);
console.log(keys, "keys");
console.log(Object.keys({ a: 1, b: 2, c: 3 }));

const values = Object.values(obj2);
console.log(values, "values");
console.log(Object.values({ a: 1, b: 2, c: 3 }));

// Завдання
const users = {
  0: "Tom Redl",
  1: "John Smith",
  2: "Ariana Grande",
};

// Порахувати суми всіх довжин всіх імен користувачів
// for (in)
//

// console.log(
//   Object.values(users).reduce((acc, name) => (acc += name.length), 0)
// );

const data = {
  x: 10,
  y: 10,
};

const entries = Object.entries(data);
console.log(entries, "entries");

const entriesToCreateObject = [
  ["x", 10],
  ["y", 10],
];

const dataFromEntries = Object.fromEntries(entriesToCreateObject);
console.log(dataFromEntries, "dataFromEntries");

data.z = 10;
console.log(data, "data after adding z");

Object.freeze(data);

data.u = 10;
data.z = 100;
delete data.z;

console.log(data, "data after adding u");
console.log(data.x, data.y, data.z, "data from the object");

// ENUM-like
const roles = {
  admin: "ADMIN",
  user: "USER",
  anonim: "ANONIM",
  superadmin: "SUPER_ADMIN",
  subroles: {
    assistant: "ASSISTANT",
    manager: "MANAGER",
  },
};

// Object.freeze(roles);
Object.freeze(roles.subroles);

const currentUserRole = "ADMIN";

roles.subroles.admin = "admin";
// delete roles.admin;

console.log(roles, "roles");

if (currentUserRole === roles.admin) {
  alert("You are an admin!");
}

const tariffs = {
  free: "FREE",
  trial: "TRIAL",
  basic: "BASIC",
  advanced: "ADVANCED",
};

Object.seal(tariffs);

tariffs.free = "NON-FREE";
tariffs.superPlus = "SUPER_PLUS";
delete tariffs.basic;

console.log(tariffs, "tariffs after changes");

const user = {
  id: 1,
  name: "Igor",
  age: 25,
  skills: "JS, TS, GOLang, Nest.js, React, Angular",
};

Object.seal(user);

delete user.age;
delete user.skills;

const today = "28.04.25";

if (today === "28.04.25") {
  user.age = user.age + 1;
}

const requiredSkill = "React";

console.log(user, "user after birthday");

if (user.skills.includes(requiredSkill)) {
  alert(`This user knows ${requiredSkill}`);
}

console.log(Object.isFrozen({ a: 10 }));
console.log(Object.isFrozen(roles.subroles));

console.log(Object.isSealed({ a: 10 }));
console.log(Object.isSealed(user));

const points = {
  x: 3,
  y: 5,
  z: 10,
};

let sumPoints = 0;

for (const point in points) {
  const pointScore = points[point];

  sumPoints = sumPoints + pointScore;
}

console.log(sumPoints, "sumPoints");
console.log(sumPoints / 3, "avgPoint");

Object.preventExtensions(points);

console.log(Object.isExtensible({ a: 1 }));
console.log(Object.isExtensible(points));

points.x = 300;
// delete points.y;
points.g = 100;

console.log(points, "points after changes");

// Завдання:

//

const strictLevel = 3; // 3 - 1;

const dataObj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

// написати логіку, яка накладає обмеження на dataObj залежно
// від strictLevel за правилом

// - 3 - freeze (повна заморозка)
// - 2 - seal (заборона зміни ключів)
// - 1 - preventExtensions (заборона розширення)
// - будь - який інший випадок  - нічого не робити (default)

// switch-case

switch (strictLevel) {
  case 3: {
    break;
  }

  default: {
    break;
  }
}

const a = { a: 10 };
const b = { b: 11, a: 12 };

const target = { a: 9, c: 15 };

const assigned = Object.assign(target, a, b, { d: 10 });

console.log(assigned, "assigned");
console.log({ a: 9, ...a, ...b });

console.log({ ...a, ...b });

const created = Object.create({ a: 10 });

console.log(created, "created");

const car = Object.create({
  ride: function (km) {
    console.log(`The car is riding ${km} km`);
  },
});

console.log(car, "car");

car.ride(100);

// Завдання:

const hwUsers = {
  0: {
    role: "ADMIN",
    score: 5,
  },
  1: {
    role: "USER",
    score: 12,
  },
  2: {
    role: "USER",
    score: 8,
  },
};

// for - in

// 1 - Заморозити користувачів - адміністраторів (role)
// 2 - Порахувати суму всіх score всіх користувачів,
// score адмінів рахується двічі (*2)

// 3 - Вивести переможця за score (максимальний)
