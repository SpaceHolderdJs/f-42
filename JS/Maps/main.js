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
    console.log(`The user ${this.name} is working`);
    userHistory.set(this, 'sleep');
  }

  rest() {
    userHistory.set(this, 'rest');
    console.log(`The user ${this.name} is resting`);
  }

  sleep() {
    userHistory.set(this, 'sleep');
    console.log(`The user ${this.name} is sleeping`);
  }
}

const user1 = new HistoryUser('Igor');

user1.sleep();
// user1.work();
// user1.rest();

const user2 = new HistoryUser('Oleg');

user2.sleep();
// user2.work();
// user2.rest();

console.log(userHistory, 'userHistory after events');

// oчікуваний результат
// console.log(
//   new Map([
//     [user1, 'sleep'],
//     [user2, 'work'],
//   ])
// );

class TimetableGeneral {
  static timetable = new Map();

  static schedule(date = new Date(), dayPeriod = 'morning', customer) {
    const isDateAlreadyExists = TimetableGeneral.timetable.has(date);

    if (!isDateAlreadyExists) {
      const initialScheduleData = {
        morning: [],
        afternoon: [],
        evening: [],
      };

      initialScheduleData[dayPeriod].push(customer);

      TimetableGeneral.timetable.set(date, initialScheduleData);
      return;
    }

    const scheduleForDate = TimetableGeneral.timetable.get(date);
    const copiedScheduleForDate = { ...scheduleForDate };

    copiedScheduleForDate[dayPeriod].push(customer);

    TimetableGeneral.timetable.set(date, copiedScheduleForDate);
  }

  static removeSchedule(date = new Date(), dayPeriod, customerToRemove) {
    const scheduleToRemoveFrom = TimetableGeneral.timetable.get(date);
    // {morning: [Igor], afternoon: [], evening: [Alex]}

    const scheduleToRemoveFromCopy = { ...scheduleToRemoveFrom };
    // copy {morning: [Igor], afternoon: [], evening: [Alex]}

    scheduleToRemoveFromCopy[dayPeriod] = scheduleToRemoveFromCopy[
      dayPeriod
    ].filter((customer) => customer.email !== customerToRemove.email);

    TimetableGeneral.timetable.set(date, scheduleToRemoveFromCopy);
  }

  static reschedule(
    currentDate,
    currentDayPeriod,
    desiredDate,
    desiredDayPeriod,
    customer
  ) {
    const isDateAlreadyExists = TimetableGeneral.timetable.has(currentDate);
    if (!isDateAlreadyExists) return;

    TimetableGeneral.removeSchedule(currentDate, currentDayPeriod, customer);
    TimetableGeneral.schedule(desiredDate, desiredDayPeriod, customer);
  }
}

// [TEST]: Schedule

const today = new Date();

TimetableGeneral.schedule(today, 'morning', {
  name: 'Igor',
  email: 'email@gmail.com',
  phone: '+380957777777',
});

TimetableGeneral.schedule(today, 'evening', {
  name: 'Alex',
  email: 'emai2@gmail.com',
  phone: '+38095734337',
});

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

TimetableGeneral.schedule(tomorrow, 'afternoon', {
  name: 'Olena',
  email: 'email3@gmail.com',
  phone: '+38095392929101',
});

console.log(TimetableGeneral.timetable, 'timetable after the schedule');

TimetableGeneral.removeSchedule(today, 'evening', {
  name: 'Alex',
  email: 'emai2@gmail.com',
  phone: '+38095734337',
});

console.log(
  TimetableGeneral.timetable,
  'timetable after removing the schedule'
);

TimetableGeneral.reschedule(today, 'morning', tomorrow, 'evening', {
  name: 'Igor',
  email: 'email@gmail.com',
  phone: '+380957777777',
});

console.log(TimetableGeneral.timetable, 'timetable after reschedule (Igor)');

// Date => {"morning": [], "afternoon": [], "evening": []}

// Schedule
// Re-schedule
// Remove session

// Place forward
// Place back
