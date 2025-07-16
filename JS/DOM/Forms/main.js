// Forms

// Access all the forms
console.log(document.forms);

const loginForm = document.querySelector('#sign-in-form');

loginForm.onsubmit = (event) => {
  event.preventDefault();

  console.log(event.target.email.value, event.target.password.value, 'values');
};

const signUpForm = document.querySelector('#sign-up-form');

signUpForm.avatar.onchange = () => {
  const values = new FormData(signUpForm);

  if (values.has('avatar')) {
    const avatar = values.get('avatar');
    const imagePreview = document.querySelector('#sign-up-form-avatar-preview');
    imagePreview.src = URL.createObjectURL(avatar);
  }
};

signUpForm.onsubmit = (event) => {
  event.preventDefault();

  const values = new FormData(event.target);
  console.log(values, 'values');

  const fullname = values.get('fullname');

  const [firstName, lastName] = fullname.trim().split(' ');

  values.append('firstName', firstName);
  values.append('lastName', lastName);

  //   values.set("email", "customly-set-email@gmail.com");
  //   values.delete("email");

  const fName = values.get('firstName');
  const lName = values.get('lastName');
  const email = values.get('email');
  const password = values.get('password');
  const avatar = values.get('avatar');

  console.log(fName, lName, email, password, avatar, 'values');
  //   console.log(values.has('email'), '[has] email');

  //   console.log(values.keys(), 'keys');
  //   console.log(values.values(), 'values');

  //   values.forEach((value, name, formData) => {
  //     console.log(value, name, formData, "form Data forEach");
  //   });
};


// Завдання

// Додати до createUserForm.onsubmit логіку додавання користувача у UsersService
// Використовуючи метод (static) addUser - має додати користвача у масив

// Перевірити (has) чи всі поля форми createUserForm існують (заповнені)
// Якщо ні - вивести алерт (alert) з помилкою

// *** Додати стилі до форми

const createUserForm = document.querySelector('#create-user-form');

createUserForm.onsubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const [name, email, password, avatar] = [
    formData.get('name'),
    formData.get('email'),
    formData.get('password'),
    formData.get('avatar'),
  ];

  const user = new User(name, email, password, URL.createObjectURL(avatar));
  console.log(user, 'user');

  // UsersService.addUser(user);
};

class User {
  constructor(name, email, password, avatar) {
    this.id = crypto.randomUUID();

    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
  }
}

class UsersService {
  static users = [];

  static addUser = (user) => {
    // ...
  };

  static removeUser = (userId) => {};

  // CS
  static changeUser = () => {};
}
