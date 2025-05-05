const obj2 = { a: 10 };
const maybeObj = { user: { age: 0 } };

// const initialValues = {

// }

console.log(typeof maybeObj, "!!!");

if (typeof maybeObj === "object") {
  console.log(maybeObj.user.age++);

  console.log("It works!");
}

const data = {
  user: {
    name: "Igor",
    age: 25,
    location: { street: "District 1", city: "Kyiv" },
  },
  date: "2025-07-08",
  rating: 100,
};

for (const key in data) {
  const value = data[key];
  console.log(value, "value");

  if (typeof value === "object") {
    console.log("This is an object");
    console.table(value);
  }
}

const analytics = {
  aov: 100,
  val: 11,
  dta: {
    as: 12,
    ab: 12,
    ac: 10,
  },
  xwq: 11,
  pad: 109,
  ova: {
    x: 1,
    y: 2,
    z: 3,
  },
};

// Calculate the sum of all the metrics

let sum = 0;

for (const metricOrKey in analytics) {
  const value = analytics[metricOrKey];

  if (typeof value === "object") {
    for (const subKey in value) {
      const subValue = value[subKey];
      sum = sum + subValue;
    }
  } else {
    sum = sum + value;
  }
}

console.log(sum, "sum");

console.log("key" in { key: 10 });

const user = {
  name: "Igor",
  age: 25,
  location: {
    city: "Kyiv",
    street: "St1",
    country: "Ukraine",
    coords: {
      lat: "11212131",
      lon: "12409030",
    },
  },
  ratings: {
    y: 100,
    m: 20,
    w: 10,
  },
};

console.log(user.hasOwnProperty("name"), "hasOwnProperty");
console.log("name" in user, "in");

console.log("city" in user.location, "in with city");
console.log("street" in user.location, "in with street");

const {
  name,
  location: {
    city,
    country,
    street,
    coords: { lat, lon },
  },
  age,
} = user;

console.log(name, city, country, street, age, lat, lon);

const {
  ratings: { m, w, y },
  //  wrong key will produce an error
  //  wrong: { a, b, c },
} = user;

console.log(m, w, y);

const obj0 = { a: 10, b: 20, c: { a1: 10 } };
// const obj1 = { ...obj0 }
const obj1 = structuredClone(obj0);

obj0.c.a1 = 100;

obj0.a = 100;
// obj0.c = 1000;

console.log(obj1);
console.log(obj0, "original");

console.log(JSON.parse(JSON.stringify(obj1)), "!!!");
console.log(JSON.stringify({ a: 1 }), "stringify");
console.log(JSON.parse('{"a": 1}'), "parse");

const value = null;

console.log(typeof value);

if (value && typeof value === "object") {
  console.log("This is the object", value);
}

// Завдання:
//

let sum1 = 0;

const structure = {
  0: "data-1",
  1: { a: 1, b: 2, c: 3 },
  2: { a: 2, b: 2, c: 3 },
  3: "data-4",
  // OPTIONAL
  4: null
};

// У всіх значеннях structure, тип яких object (typeof)
// 1. Порахувати суму елемeнтів (for in + for in) = 13
// 2. Створити безпечну та глибоку копію structure 
// + перевірити безпечність (щось змінити)