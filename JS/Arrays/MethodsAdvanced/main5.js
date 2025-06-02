// sort, (string), flat, splice ...
const arr = [1, 5, 3, 6, 0, 2, 4, -1];

const sortedArr = arr.toSorted((n1, n2) => n1 - n2);

console.log(sortedArr, 'sortedArr');

const names = ['Igor', 'Oleg', 'Alex'];
console.log(names.sort((n1, n2) => n1.localeCompare(n2)));

const users = [
  { name: 'Igor' },
  { name: 'Alex' },
  { name: 'John' },
  { name: 'Nastya' },
];

// Завдання
// Відсортувати масив за алфавітом (name)

const sortedUsers = users.toSorted((u1, u2) => u1.name.localeCompare(u2.name));

console.log(sortedUsers, 'sortedUsers');

const servers = [
  { ip: '101.01.01.22', name: 'Server3', connections: 3, agents: ['Agent1'] },
  {
    ip: '102.01.77.33',
    name: 'Server4',
    connections: 3,
    agents: ['Agent1', 'Agent2', 'Agent3'],
  },
  { ip: '101.01.22.11', name: 'Server3', connections: 2, agents: ['Agent1'] },
  {
    ip: '120.11.11.11',
    name: 'Server2',
    connections: 9,
    agents: ['Agent1', 'Agent2'],
  },
];

const serversSortedByAgents = servers.toSorted(
  (s1, s2) => s1.agents.length - s2.agents.length
);

console.log(serversSortedByAgents, 'serverSortedByAgents');

const serverSortedByAgentsAndConnections = servers.toSorted(
  (s1, s2) =>
    s1.agents.length - s2.agents.length || s1.connections - s2.connections
);

// 0, -1, 1

console.log(
  serverSortedByAgentsAndConnections,
  'serverSortedByAgentsAndConnections'
);

// Завдання
// Відсортувати servers за зростанням (n1 - n2)

// 1. За полем name
// 2. За полем connections або name

// s1.name.localeCompare(s1.name);

// s1.connections - s2.connections;

// s1.name.localeCompare(s2.name); // -1, 0, 1

const sortExample = servers.toSorted(
  (s1, s2) => s2.name.localeCompare(s1.name) || s1.connections - s2.connections
);

console.log(sortExample, 'sortExample');

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// flat

matrix.forEach((subArr) => {
  console.log(subArr, 'subArr');

  subArr.forEach((item) => {
    console.log(item, 'item');
  });
});

const flattedMatrix = matrix.flat();

console.log(matrix, 'matrix after');

console.log(flattedMatrix, 'flattedMatrix');

console.log(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, [8, 9]],
  ].flat(),
  'flat 3'
);

console.log(
  [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
  ].flat(),
  'flat4'
);

const flatAndMapAtOnce = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
].flatMap((el) => el[0] + el[1] + el[2]);

console.log(flatAndMapAtOnce, '!!!');

const reports = [
  [10, 2],
  [9, 3],
  [2, 1],
];

// Завдання
// Розрахувати фінальні значення для reports
// за формулою - перший елемент масива / другий елемент масива (10/2, 9/3, 2/1)

// використовуючи flatMap

// [5, 3, 2]

const calculatedReports = reports.flatMap((report) => report[0] / report[1]);
console.log(calculatedReports, 'calculatedReports');

// Завдання*:

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 1. Порахувати суму матриці (flatMap) + reduce

const sumOfMatrix2 = matrix2
  .flatMap((el) => el[0] + el[1] + el[2])
  .reduce((sum, n) => (sum += n), 0);


console.log(sumOfMatrix2, 'sumofmatrix2');

// 2. Порахувати діагональ матриці (головну) (3 + 5 + 7) (forEach, reduce, flat)...

const elementsQuantity = matrix2.length - 1;

const diagonalSum = matrix2.reduce((sum, subArr, index) => {
  const targetElement = subArr[elementsQuantity - index];
  sum = sum + targetElement;
  return sum;
},0);

console.log(diagonalSum, "diagonalSum");

const dataset1 = [{ city: 'Kyiv' }, { city: 'Lviv' }, { city: 'Poltava' }];

// Завдання
// Відсортувати dataset1 ПРОТИ алфавітного порядку за полем city (localeCompare)

const sortedDataset1 = dataset1.toSorted((item1, item2) =>
  item2.city.localeCompare(item1.city)
);
console.log(sortedDataset1, 'sortedDataset1');

const points = [
  { x: 1, y: 4, z: 2 },
  { x: 1, y: 3, z: 1 },
  { x: 3, y: 6, z: 3 },
];

const sortedPoints = points.toSorted((p1, p2) => p1.x - p2.x || p1.y - p2.y);
console.log(sortedPoints, 'sortedPoints');

// Завдання
// Відсортувати точки за ОСНОВНИМ критерієм x (зростання)
// та y у випадку коли x однаковий (toSorted + ||)
