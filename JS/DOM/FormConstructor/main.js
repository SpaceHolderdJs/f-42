// Form Constructor

class FormConstructor {
  constructor(name, parent, options) {
    this.name = name;
    this.parent = parent;
    this.options = options;

    this.init();
  }

  init() {
    this.form = document.createElement('form');

    this.form.id = this.name;
    this.form.name = this.name;

    this.form.onsubmit = (event) => {
      event.preventDefault();

      if (this.options.onSubmit) {
        const formData = new FormData(this.form);
        this.options.onSubmit(formData);
      }
    };

    if (this.options.className) {
      this.form.className = this.options.className;
    }

    this.options.fields.forEach((field) => {
      field.init(this.form);
    });

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Submit';

    this.form.appendChild(button);

    this.parent.appendChild(this.form);
  }
}

class FormField {
  constructor(name, type = 'text', options) {
    this.name = name;
    this.type = type;
    this.options = options;
  }

  init(parent) {
    switch (this.type) {
      case 'select': {
        const select = document.createElement('select');
        select.name = this.name;

        if (this.options.className) {
          select.className = this.options.className;
        }

        if (this.options.options) {
          this.options.options.forEach((opt) => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.label;

            select.appendChild(option);
          });
        }

        this.element = select;
        parent.appendChild(select);
        break;
      }

      case 'textarea': {
        const textarea = document.createElement('textarea');
        textarea.name = this.name;

        if (this.options.className) {
          textarea.className = this.options.className;
        }

        this.element = textarea;
        parent.appendChild(textarea);
        break;
      }

      case 'range': {
        const range = document.createElement('input');
        range.name = this.name;
        range.type = 'range';

        if (this.options.className) {
          range.className = this.options.className;
        }

        if (
          'max' in this.options &&
          'min' in this.options &&
          'step' in this.options
        ) {
          range.min = this.options.min;
          range.max = this.options.max;
          range.step = this.options.step;
        }

        this.element = range;
        parent.appendChild(range);
        break;
      }

      case 'file': {
        // Завдання дописати логіку підтримки елементу input type file
        // Переконатися, що дані файлу потрапляють у formData на onSubmit
        break;
      }

      case 'date': {
        // Завдання дописати логіку підтримки елементу input type date
        // Переконатися, що дані дати потрапляють у formData на onSubmit
        break;
      }

      case 'text':
      default: {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = this.name;

        if (this.options.className) {
          input.className = this.options.className;
        }

        this.element = input;
        parent.appendChild(input);
        break;
      }
    }

    this.element.placeholder = this.name;
  }
}

new FormConstructor('login-form', document.body, {
  onSubmit: (formData) => {
    console.log('form data after submitting the form!');
    formData.forEach((key, value) => {
      console.log(`Data: ${key}: ${value}`);
    });
  },
  className: 'test-form',
  fields: [
    new FormField('name', 'text', {}),
    new FormField('email', 'text', {}),
    new FormField('bio', 'textarea', {}),
    new FormField('salary', 'range', { max: 10, min: 0, step: 1 }),
    // new FormField('photo', 'file', {}),
    // new FormField('date', 'date', {}),
    new FormField('role', 'select', {
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Anonim', value: 'anonim' },
      ],
    }),
  ],
});

// new FormConstructor("login-form", document.body, {
//     fields: [],
//     // ?
//     className: "",
//     // ?
//     validation: [],
//     // ?
//     initialValues: {}
// });
