// HTMLCollection
const scripts = document.getElementsByTagName('script');
// Also works
const scripts2 = document.getElementsByClassName('script');

console.log(scripts, 'scripts (HTML Collection)');

for (const item of scripts) {
  console.log(item, 'item');
}

const scriptElement = scripts.item(0);
console.log(scriptElement, 'scriptElement', scripts[0]);

const scriptElement2 = scripts.namedItem('script-1');
console.log(scriptElement2, 'scriptElement2');

for (let i = 0; i < scripts.length; i++) {
  console.log(scripts[i], 'script from the loop with count');
}

console.log([...scripts], 'array from the scripts');
console.log(new Array(...scripts), 'array form the scripts (2)');
console.log(Array.from(scripts), 'array from the scripts (3)');

// Завдання
// Отримати всі елементи з класом text
// Додати всім елементам клас red
// Описати css класу red змінивши колір тексту на червоний

const textElementsCollection = document.getElementsByClassName('text');
const textElementsArray = [...textElementsCollection];

// textElementsArray.forEach((textElement) => (textElement.className = 'red'));

for (const element of textElementsCollection) {
}

// Query selectors

// By class
const textElementsWithQuery = document.querySelectorAll('.text');
console.log(textElementsWithQuery, 'textElementWithQuery');

// By tagname
const textElementsWithQueryByTagName = document.querySelectorAll('p');
console.log(textElementsWithQueryByTagName, 'textElementsByTagName');

// By id
const elementWithText = document.querySelector('#text-1');
console.log(elementWithText, 'elementWithText');

const nodeList = document.querySelectorAll('*');

console.log(nodeList, 'nodeList');

for (const script of nodeList) {
  console.log(script, 'script [node list]');
}

console.log(
  nodeList[0],
  nodeList[nodeList.length - 1],
  'indexing of the NodeList'
);

// Methods

// ForEach
// element, index, arr
nodeList.forEach((value, key, parentElement) => {
  console.log(value, key, parentElement, 'node list forEach');
});

nodeList.forEach((el) => {
  el.onclick = () => {
    // alert(el.textContent);
  };
});

// Entries
const entriesOfNodeList = nodeList.entries();
console.log(entriesOfNodeList, 'entriesOfTheNodeList');

// keys/values
const keysOfNodeList = nodeList.keys();
const valuesOfNodeList = nodeList.values();

console.log(keysOfNodeList, valuesOfNodeList, '!!!');

// Item
const itemOfNodeList = nodeList.item(0);
console.log(itemOfNodeList, 'itemOfNodeList');

//Advanced query selectors

const spansOfThePElements = document.querySelector('p > span.number-span');
console.log(spansOfThePElements, 'elements');

// Завдання
//

const users = [
  {
    email: 'email1@gmail.com',
    name: 'Alex',
    skills: ['HTML', 'JS', 'TS', 'Angular', 'React'],
  },
  {
    email: 'email2@gmail.com',
    name: 'Igor',
    skills: ['HTML', 'Angular', 'React'],
  },
  { email: 'email3@gmail.com', name: 'Oleg', skills: ['HTML', 'React'] },
];

// 1. Вивести для кожного користувача картку (div) з інформацією
// email, skill, name

// 2. За допомогою querySelectorAll обрати всі елементи з текстом React
// пофарбувати їх у aqua колір
// backgroundColor = "aqua"

users.forEach((user) => {
  const div = document.createElement('div');
  div.classList.add('user-card');

  div.innerHTML = `
    <p>${user.email}</p>
    <p>${user.name}</p>
    `;

  const skillsWrapper = document.createElement('div');
  skillsWrapper.classList.add('skills-wrapper');

  user.skills.forEach((skillName) => {
    const elementForSkill = document.createElement('p');

    elementForSkill.className = 'skill';
    elementForSkill.textContent = skillName;

    skillsWrapper.appendChild(elementForSkill);
  });

  div.appendChild(skillsWrapper);

  document.body.appendChild(div);
});


// 2

const allSkillsElements = document.querySelectorAll(".skill");

allSkillsElements.forEach((p) => {
    if (p.textContent === "React") {
        p.style.background = "aqua";
    }

    if (p.textContent === "JS") {
        p.style.background = "gold";
    }
});

// removeElement

allSkillsElements.forEach((p) => {
    p.remove();
});

const testElementToRemove = document.createElement("div");
testElementToRemove.textContent = "TEST"

document.body.appendChild(testElementToRemove);

const element = document.body.removeChild(testElementToRemove);
console.log(element, "element")

testElementToRemove.remove();

// Завдання:
// додати до кожного користувача зі списку users кнопку Delete
// на натискання на кнопку вся картка користувача має бути видалена з DOM

