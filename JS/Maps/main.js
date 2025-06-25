// Object

const a = 'a';

const obj = { key: 'value' };

const arr = [];

obj[arr] = arr;

console.log(obj, 'arr');

// obj = { string key: any value }
// map = { any key : any value }

const map1 = new Map();

map1.set('key', 'value');
map1.set('name', 'Igor');
map1.set('age', 25);

map1.set([1, 2, 3], [4, 5, 6]);

console.log(map1, 'map1');

console.log(map1.size, 'size');

const value = map1.get('key');
console.log(value, 'value');

const name = map1.get('name');
console.log(name, 'name');

const age = map1.get('age');
console.log(age, 'age');

// Will work (b is a key)!
const b = {};
map1.set(b, [1, 2, 3]);

const bArr = map1.get(b);
console.log(bArr, 'bArr');

// Won't work!
map1.set({}, [1, 2, 3]);
const anotherArr = map1.get({});
console.log(anotherArr, 'anotherArr');

console.log(map1.delete('key'), 'delete operation');
console.log(map1, 'map1 after deleting the key');

map1.clear();
console.log(map1, 'map1 after clearing');

// -----

const map2 = new Map();

// values only
// for (const item of map1) {
//   console.log(item, 'item');
// }

// values only
for (const item in map1) {
  console.log(item, 'item');
}

class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Hello from the user ${this.name}`);
  }
}

map2.set(new User('Igor'), ['JS', 'HTML', 'GoLang']);
map2.set(new User('Oleg'), ['JS', 'CSS']);

const usersWithObject = {
  user1: ['JS'],
};

console.log(map1, 'map1 with user');
// values, keys
map2.forEach((skills, user) => {
  console.log(skills, user);
  user.hello();
});

const map3 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
  [{ a: 1 }, [1, 2, 3]],
]);

console.log(map3, 'map3');

console.log(map3.has('key1'), 'has key1');
console.log(map3.has('unknown-key'), 'has no key');

// Завдання

const userHistory = new Map();

// описати методи work, rest, sleep
// так, щоб кожен з них записував подію у userHistory(MAP)

// key: user => value: "sleep"/"work"/"rest";

class HistoryUser {
  constructor(name) {
    this.name = name;
  }

  work() {
    console.log('...');
  }

  rest() {
    console.log('...');
  }

  sleep() {
    console.log('...');
  }
}

const user1 = new HistoryUser('Igor');
const user2 = new HistoryUser('Oleg');

// oчікуваний результат
console.log(
  new Map([
    [user1, 'sleep'],
    [user2, 'work'],
  ])
);
