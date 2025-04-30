// Object.assign

const obj = new Object({});

// console.log(obj.hasOwnProperty(), "obj");

const obj1 = {
  value1: "String",
  value2: 0,
  value3: "",
};

if (obj1.value1) {
  console.log("obj1.value1 is there");
}

if (obj1.value2) {
  console.log("obj1.value2 is there");
}

if (obj1.hasOwnProperty("value2")) {
  console.log("obj1.hasOwnProperty('value2')");
}

if (obj1.value3) {
  console.log("obj1.value3 is there");
}

if (obj1.hasOwnProperty("value3")) {
  console.log("obj1.hasOwnProperty('value3')");
}

const isPropertyThere = obj1.hasOwnProperty("key");

if (isPropertyThere) {
  // ...
}

console.log(obj1.hasOwnProperty("no-key-exists"));

const obj2 = {
  id: 0,
  name: "User",
  surname: "",
  isAdmin: false,
  score: 0,
};

// Завдання
// Перевірити наявність КЛЮЧІВ у obj2 (id, surname, isAdmin, score)
// Виводити (true/false)

if (
  obj2.hasOwnProperty("id") &&
  obj2.hasOwnProperty("isAdmin") &&
  obj2.hasOwnProperty("score")
) {
  console.log("All keys are there");
}

console.log(obj.isPrototypeOf({}));

const obj4 = {
  a: 10,
};

// Default properties
Object.defineProperty(obj4, "b", { value: 12 });

// Enumerable - loops visibility
Object.defineProperty(obj4, "c", { value: 13, enumerable: true });

// Writable - ability to change (re-declare) value of the object
Object.defineProperty(obj4, "d", {
  value: 14,
  enumerable: true,
  writable: false,
});

// Configurable
Object.defineProperty(obj4, "e", {
  value: 15,
  enumerable: true,
  writable: true,
  configurable: false,
});

for (const key in obj4) {
  console.log(key, obj4[key], "!!!");
}

obj4.e = 1000;
delete obj4.e;

console.log(obj4, "obj4");

// Завдання:
const obj5 = {
  a: "Hello",
  b: 1,
  c: true,
  d: "Hello",
};

// Завдання:
// для obj5 змінити налаштування параметрів об`єкта
// для string - заборонити видимість у циклах

// для number - заборонити переприсвоєння даних об`єкта

// для boolean - заборонити видалення даних об`єкта

// Object.defineProperty()
// for - in

for (const key in obj5) {
  const value = obj5[key];

  switch (typeof value) {
    case "string": {
      Object.defineProperty(obj5, key, {
        value: value,
        enumerable: false,
        writable: true,
        configurable: true,
      });
      break;
    }

    case "number": {
      Object.defineProperty(obj5, key, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: true,
      });
      break;
    }

    case "boolean": {
      Object.defineProperty(obj5, key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: false,
      });
      break;
    }

    default: {
      console.log("No case");
      break;
    }
  }

  //   if (typeof value === "string") {
  //     Object.defineProperty(obj5, key, {
  //       value: value,
  //       enumerable: false,
  //       writable: true,
  //       configurable: true,
  //     });
  //   }

  //   if (typeof value === "number") {
  //     Object.defineProperty(obj5, key, {
  //         value: value,
  //         enumerable: true,
  //         configurable: true,
  //         writable: false
  //     })
  //   }
}

// 1
for (const key in obj5) {
  console.log(key, obj5[key], "!!!!!!!!!");
}
// 2
obj5.b = 1000;
// 3
delete obj5.c;

console.log(obj5, "!!!");

// const obj6 = {a: 5};

// Object.defineProperty(obj6, "a", {
//   get: function () {
//     return 10;
//   },
// });

// console.log(obj6, obj6.a);

// Завдання:
// 
const analytics = {
  aov: 10,
  btw: 40,
  avg: 70,
  xoz: 100,
  total: 240
}

// Всім показникам, що:
// - Вище за 40 заборонити видимість у циклі
// - Кратні 40 if (n % 40 === 0) {} заборонити їх ЗМІНИ та ВИДАЛЕННЯ
// for - in 