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

      const formData = new FormData(this.form);
      const validated = this.validate(formData);

      if (!validated) {
        return;
      }

      if (this.options.onSubmit) {
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

  validate(formData = new FormData()) {
    if (!this.options.validation) {
      return true;
    }

    let result = true;

    for (const fieldName in this.options.validation) {
      const checker = this.options.validation[fieldName];

      const checkerError = checker(formData.get(fieldName));

      if (checkerError) {
        alert(`${fieldName}: ${checkerError}`);
        result = false;
        break;
      }
    }

    return result;
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

      case 'number':
      case 'range': {
        const input = document.createElement('input');
        input.name = this.name;
        input.type = this.type;

        if (this.options.className) {
          input.className = this.options.className;
        }

        if ('max' in this.options) {
          input.max = this.options.max;
        }

        if ('min' in this.options) {
          input.min = this.options.min;
        }

        if ('step' in this.options && this.type === 'range') {
          input.step = this.options.step;
        }

        this.element = input;
        parent.appendChild(input);
        break;
      }

      case 'file': {
        const file = document.createElement('input');
        file.type = 'file';

        file.name = this.name;

        if (this.options.className) {
          file.className = this.options.className;
        }

        if (this.options.multiple) {
          file.multiple = this.options.multiple;
        }

        this.element = file;
        parent.appendChild(file);
        break;
      }

      case 'date': {
        const date = document.createElement('input');
        date.type = 'date';
        date.name = this.name;

        if (this.options.className) {
          date.className = this.options.className;
        }

        this.element = date;
        parent.appendChild(date);
        break;
      }

      case 'checkbox': {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = this.name;

        const label = document.createElement('label');
        label.textContent = this.options.placeholder || this.name;

        label.style.display = 'flex';
        label.style.flexDirection = 'row-reverse';
        label.style.justifyContent = 'start';

        label.appendChild(checkbox);

        if ('checked' in this.options) {
          checkbox.checked = this.options.checked;
        }

        if (this.options.className) {
          label.className = this.options.className;
        }

        this.element = checkbox;
        parent.appendChild(label);

        break;
      }

      case 'radio': {
        const fieldset = document.createElement('fieldset');

        fieldset.style.display = 'flex';
        fieldset.style.flexDirection = 'column';
        fieldset.style.gap = '5px';

        const label = document.createElement('span');
        label.textContent = this.options.placeholder || this.name;

        fieldset.appendChild(label);

        if (this.options.options) {
          this.options.options.forEach((opt) => {
            const { label, value, checked } = opt;

            const labelElement = document.createElement('label');
            labelElement.textContent = label;

            labelElement.style.display = 'flex';
            labelElement.style.flexDirection = 'row-reverse';
            labelElement.style.justifyContent = 'start';
            // labelElement.style.alignItems = 'center';

            const radio = document.createElement('input');
            radio.type = 'radio';

            radio.name = this.name;
            radio.value = value;
            radio.checked = checked || false;

            labelElement.appendChild(radio);

            fieldset.appendChild(labelElement);
          });
        }

        this.element = fieldset;
        parent.appendChild(fieldset);

        break;
      }

      case 'text':
      case 'password':
      case 'email':
      default: {
        const input = document.createElement('input');
        input.type = this.type;
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
    new FormField('password', 'password', {}),
    new FormField('bio', 'textarea', {}),
    new FormField('experience', 'number', { max: 20, min: 1 }),
    new FormField('salary', 'range', { max: 10, min: 0, step: 1 }),
    new FormField('photo', 'file', { multiple: true }),
    new FormField('date', 'date', {}),
    new FormField('role', 'select', {
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Anonim', value: 'anonim' },
      ],
    }),
    new FormField('marketing', 'radio', {
      placeholder: 'How did you know about us?',
      options: [
        { label: 'YouTube', value: 'youtube' },
        { label: 'Facebook ads', value: 'facebook-ads' },
        { label: 'Other', value: 'other', checked: true },
      ],
    }),
    new FormField('agreement', 'checkbox', {
      checked: true,
      placeholder: 'Agree with the terms of service',
    }),
  ],
  validation: {
    email: (email) => {
      if (!email.includes('@')) {
        return 'Email should contain the @';
      }

      if (!email.includes('.')) {
        return 'Email should contain the .';
      }

      return null;
    },

    password: (password) => {
        if (password.length < 5) {
            return 'Password should contain at least 5 symbols'
        }

        return null;
    }

    // Завдання:
    // додати валідацію для полів
    // name - довжина більше 5 і містить пробіл ( )
    // agreement - тільки значення on
    // bio - довжина 10+ символів
    // return null якщо помилок немає (з function)
  },
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
