// Modal

class Modal {
  constructor(title, content, className = '', parent = document.body) {
    this.title = title;
    this.content = content;
    this.className = className;
    this.parent = parent;

    this.isOpened = false;
  }

  init(activator) {
    // Create modal window
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal modal-window';

    // Modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    // Title
    const modalHeaderTitle = document.createElement('h4');
    modalHeaderTitle.textContent = this.title;
    modalHeader.appendChild(modalHeaderTitle);

    // Close button
    const closeModalHeaderButton = document.createElement('button');
    closeModalHeaderButton.innerHTML = '&times';

    closeModalHeaderButton.onclick = () => {
      this.close();
    };

    modalHeader.appendChild(closeModalHeaderButton);

    modalWindow.appendChild(modalHeader);

    // Modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    // Adding a content
    modalBody.innerHTML += this.content;

    modalWindow.appendChild(modalBody);

    // Create modal backdrop
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop modal-closed';

    // Adding the modal window to the modal backdrop
    modalBackdrop.appendChild(modalWindow);

    // Adding the whole setup to the parent
    this.parent.appendChild(modalBackdrop);

    // Adding both elements to this, so we can access it
    this.modalWindow = modalWindow;
    this.modalBackdrop = modalBackdrop;

    // Adding an events...
    activator.onclick = () => {
      this.open();
    };

    // modalWindow.onclick = (event) => {
    //   event.stopPropagation();
    // };

    modalBackdrop.onclick = (event) => {
      if (event.target.classList.contains('modal')) {
        return;
      }

      console.log(event, 'event');
      this.close();
    };
  }

  open() {
    this.isOpened = true;

    this.modalBackdrop.classList.remove('modal-closed');
    this.modalBackdrop.classList.add('modal-opened');
  }

  close() {
    this.isOpened = false;

    this.modalBackdrop.classList.remove('modal-opened');
    this.modalBackdrop.classList.add('modal-closed');
  }
}

// Creating an instance of the modal
const modal1 = new Modal('Modal1', '<h4>Hello from the modal 1</h4>');

// Getting the button
const btn1 = document.getElementById('modal-activator');
modal1.init(btn1);

const users = [
  { name: 'John Doe', paymentAmount: "$10.00" },
  { name: 'Alex Marshall', paymentAmount: "$15.00" },
  { name: 'David JR Robert', paymentAmount: "$5.00" },
];

users.forEach((user) => {
    const activatorButton = document.createElement("button");
    activatorButton.textContent = `Activator of the payment modal for the ${user.name}`;

    document.body.appendChild(activatorButton);

    const confirmPaymentModal = new Modal(
        'Confirm payment',
        `
          <div>
              <h5>Hello, ${user.name}</h5>
              <p>Please confirm a payment, the amount is: ${user.paymentAmount}</p>
              <h6>Benefits of the payment:</h6>
              <ul>
                  <li>Free access from anywhere</li>
                  <li>Access from up to 3 devices</li>
                  <li>Up to 5 working spaces</li>
              </ul>
          </div>
      `
      );
      
      confirmPaymentModal.init(activatorButton);
});



// Реалізувати компонент Accordion на базі відповідного класу на основі класу Modal (не наслідування!)

// https://getbootstrap.com/docs/5.3/components/accordion/#how-it-works

class Accordion {
    constructor(title, content, parent) {
        // ...
    }

    init() {
        // ...
        // ініціалізіція елемента (додати у верстку сторінки, додати класи, стилі ...)
    }

    open() {
        // ...
        // відкриває динамічну секцію акордеону
    }

    close() {
        // ...
        // закриває динамічну секцію акордеону
    }
}

// Додати необхідний (на ваш розсуд css у css файл)
// Дописати JS логіку компонента
// Тестування компонента з різними title та content (new)
// init() - document.body