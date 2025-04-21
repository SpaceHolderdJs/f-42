const str = "Hello";
const n = 10;

const bool = true;

const user = {
  name: "Igor",
  age: 25,
  job: "Fullstack web developer",
  language: "JS",
};

console.log(user, "user");

console.log(user.name);
console.log(user.job);
console.log(user.age);

user.city = "Kyiv";

console.log(user, "user after adding city");

user.age = 26;

console.log(user, "user after increasing age");

// delete user.age;

console.log(user, "user after deleting age");

console.log(user.age);

if (user.age) {
  user.age = user.age + 1;
}

console.log(user.age);

console.log(user["language"]);
console.log("hello"[0]);

user["language"] = "Go lang";

console.log(user);

delete user["language"];

console.log(user, "user after removing language");

console.log(new String("hello"));
console.log({ key: "value" });

const obj1 = { a: 100 };
const obj2 = { a: 200 };

console.log(obj1 === obj2);
console.log(obj1.a === obj2.a);

const a = { a: 1 };
const b = { b: 2 };

// Invalid operations

console.log(a + b + {});
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a.toString());

const data1 = { name: "Igor", city: "Kyiv" };
const data2 = { age: 25, city: "Odessa" };

const data3 = {
  name: data1.name,
  city: data1.city,
  age: data2.age,
};

const data5 = {
  job: "Fullstack dev",
};

console.log(data3, "data3");

const data4 = {
  ...data1,
  ...data5,
  ...data2,
  id: 1,
  // not best way to use
  city: "Lviv",
  city: "Poltava",
};

console.log(data4, "data4");

const str1 = "hello";

const [firstLetter, l2, l3] = str1;

console.log(firstLetter, l2, l3);

const obj6 = { a: 10, b: 20, c: 30 };

const { a: aFromObj6, b: bFromObj6, c } = obj6;

console.log(aFromObj6, bFromObj6, c);
console.log(obj6.a, obj6.b, obj6.c);

const str3 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sint dicta tempore a, blanditiis eius aspernatur animi sed ducimus rerum optio quas dolore, iste vitae deserunt voluptatibus repellendus, ex quam.";

const symbols = {};

// Завдання:
// Порахувати кожен символ строки

for (const s of str3) {
  if (symbols[s]) {
    symbols[s] = symbols[s] + 1;
  } else {
    symbols[s] = 1;
  }
}

console.log(symbols, "symbols");

console.log(symbols["!"] || "Element not found");

console.log({ ...user }.name.toUpperCase());

const complexObj = { location: { city: "Kyiv", coords: "1212.11111" } };

console.log(complexObj);

console.log(complexObj.location);
console.log(complexObj.location.city);
console.log(complexObj.location.coords);
