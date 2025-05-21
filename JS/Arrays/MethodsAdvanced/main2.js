// filter

const arr1 = [8, 4, 5, 1, 6, 8, 9, 0];

const filteredArr1 = arr1.filter((num) => num);
console.log(filteredArr1, "filteredArr1");

console.log(
  arr1.filter((el) => {
    if (el > 5) {
      return el;
    }
  })
);

console.log(arr1.filter((el) => el > 5));

const products = [
  {
    title: "Professional Chef's Knife Set",
    price: 1700,
    sku: "#k100-707",
    category: "Kitchen",
  },
  {
    title: "Digital Instant Pot Pressure Cooker",
    price: 1000,
    sku: "#k101-397",
    category: "Kitchen",
  },
  {
    title: "Stainless Steel Mixing Bowl Collection",
    price: 200,
    sku: "#k102-645",
    category: "Kitchen",
  },
  {
    title: "Cast Iron Dutch Oven",
    price: 1900,
    sku: "#k103-693",
    category: "Garage",
  },
  {
    title: "Premium Espresso Machine",
    price: 1700,
    sku: "#k104-883",
    category: "Kitchen",
  },
  {
    title: "Non-Stick Cookware Set",
    price: 1600,
    sku: "#k105-449",
    category: "Garage",
  },
  {
    title: "-6 Smart Touchscreen Refrigerator",
    price: 2700,
    sku: "#k106-942",
    category: "Kitchen",
  },
];

const lowPrice = 500;

const productsWithLowPrice = products.filter(
  (product) => product.price <= lowPrice
);

console.log(productsWithLowPrice, "productsWithLowPrice");

const searchValue = "smart";

const productsBySearchValue = products.filter((product) => {
  const adaptedSearchValue = searchValue.toLowerCase();
  const adaptedTitle = product.title.toLocaleLowerCase();
  const adaptedSKU = product.sku.toLowerCase();

  return (
    adaptedTitle.includes(adaptedSearchValue) ||
    adaptedSKU.includes(adaptedSearchValue)
  );
});

console.log(productsBySearchValue, "productsBySearchValue");

const searchValue2 = "set";
const category = "Garage".toLowerCase();
const minPrice = 1600;

// 3 criterias

const productsBy2Criterias = products.filter((product) => {
  const adaptedTitle = product.title.toLowerCase();
  const adaptedCategory = product.category.toLowerCase();
  const adaptedSearchValue = searchValue2.toLowerCase();

  return (
    adaptedTitle.includes(adaptedSearchValue) &&
    product.price >= minPrice &&
    adaptedCategory === category
  );
});

console.log(productsBy2Criterias, "productsBy2Criterias");

// Завдання (filter)

// 1. Знайти всі продукти з категорії "Kitchen"
// 2. Знайти всі продукти з категорії "Garage" ціна яких 1000 - 2000
// 3. Знайти всі продукти ціна яких більша за 1000, або SKU яких закінчується на 9

const category1 = "Kitchen".toLowerCase();
const category2 = "Garage".toLowerCase();

const minPrice1 = 1000;
const maxPrice1 = 2000;

console.log(
  products.filter((product) => product.category.toLowerCase() === category1),
  "task1"
);

const user = { email: "email1@gmail.com" };
const { email } = user;

console.log(
  products.filter(({ category, price }) => {
    return (
      category.toLowerCase() === category2 &&
      price >= minPrice1 &&
      price <= maxPrice1
    );
  }),
  "task2"
);

console.log(
  products.filter(
    (product) => product.price >= minPrice1 && product.sku.endsWith("9")
  ),
  "task3"
);

// find, findIndex

const names = ["Alina", "Igor", "Ivan", "Oleg", "Alex"];

const nameStartsWithI = names.find((name) => name.startsWith("I"));

console.log(nameStartsWithI, "nameStartsWithI");

const nameWithWrongCriteria = names.find((name) => name === "John");

console.log(nameWithWrongCriteria, "nameWithWrongCriteria");

// if (!nameWithWrongCriteria) {
//   alert("This user is empty");
// }

console.log(names.includes("Igor"));
console.log(names.indexOf("Igor"));

const users = [
  { name: "Igor", email: "email@gmail.com", password: "12345" },
  { name: "Oleg", email: "email2@gmail.com", password: "54321" },
];

const authData = {
  email: "email2@gmail.com",
  password: "543210",
};

const authUser = users.find(
  (user) => user.email === authData.email && user.password === authData.password
);

console.log(authUser, "authUser");

if (authUser) {
  console.log(authUser.email.toUpperCase());
}

console.log(
  [1, 2, 3, 4, 5].filter((n) => n > 3),
  "filter"
);
console.log(
  [1, 2, 3, 4, 5].find((n) => n > 3),
  "find"
);

if ([1, 1, 1].filter((n) => n === 2)) {
  // []
  console.log("Filter has found nothing, but the if still works");
}

if ([1, 1, 1].find((n) => n === 2)) {
  // undefined
  console.log("Find has found nothing, so if won't work");
}

// Завдання:

const points = [
  { x: 1, y: 2, z: 10 },
  { x: 12, y: 5, z: 18 },
  { x: 7, y: 15, z: 3 },
  { x: 19, y: 4, z: 11 },
  { x: 2, y: 20, z: 6 },
  { x: 14, y: 8, z: 17 },
  { x: 5, y: 10, z: 9 },
  { x: 16, y: 7, z: 13 },
  { x: 3, y: 18, z: 4 },
  { x: 11, y: 2, z: 19 },
  { x: 8, y: 16, z: 5 },
];

// 1. Знайти (filter) всі точки значення "y" яких більше за 10 (включно)

const pointsWithYMoreThan10 = points.filter((point) => point.y >= 10);

console.log(pointsWithYMoreThan10, "pointsWithYMoreThan10");

// 2. Знайти точку (find) сума значень якої (x + y + z) === 13 (якщо немає - вивести повідомлення) (включно)

const pointWithSum13 = points.find((point) => {
  const sum = point.x + point.y + point.z;
  return sum === 13;
});

console.log(pointWithSum13, "pointWithSum13");

if (!pointWithSum13) {
  alert("There in no item");
}

// 3. Знайти всі точки (filter) значення х яких знаходиться в діапазоні (12 - 19) (включно)

const pointsWithXBetween12and19 = points.filter(
  (point) => point.x >= 12 && point.x <= 19
);

console.log(pointsWithXBetween12and19, "pointsWithXBetween12and19");

// 4. Знайти всі точки (filter), значення х, y, z яких більші за 4 (включно)

const pointsWithAllTheItemsMoreThan4 = points.filter(
  (point) => point.x >= 4 && point.y >= 4 && point.z >= 4
);

console.log(pointsWithAllTheItemsMoreThan4, "pointsWithAllTheItemsMoreThan4");
