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
  { name: 'John Doe', paymentAmount: '$10.00' },
  { name: 'Alex Marshall', paymentAmount: '$15.00' },
  { name: 'David JR Robert', paymentAmount: '$5.00' },
];

users.forEach((user) => {
  const activatorButton = document.createElement('button');
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
  constructor(title, content, parent = document.body) {
    this.title = title;
    this.content = content;
    this.parent = parent;

    this.isOpened = false;
  }

  init() {
    const wrapper = document.createElement('div');
    wrapper.className = 'accordion-wrapper';

    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.innerHTML = `
        <h3>${this.title}</h3>
        <img width="40" height="40" src="https://static.thenounproject.com/png/227299-200.png" />
    `;

    header.onclick = () => {
      this.isOpened ? this.close() : this.open();
    };

    wrapper.appendChild(header);

    const body = document.createElement('div');
    body.className = 'accordion-body accordion-body-hidden';
    body.innerHTML = this.content;

    this.body = body;

    wrapper.appendChild(body);

    this.parent.appendChild(wrapper);
  }

  open() {
    this.isOpened = true;

    this.body.classList.remove('accordion-body-hidden');
    this.body.classList.add('accordion-body-visible');
  }

  close() {
    this.isOpened = false;

    this.body.classList.remove('accordion-body-visible');
    this.body.classList.add('accordion-body-hidden');
  }
}

new Accordion(
  'Accordion1',
  `<article>
    <p><b>Accordion body1</b></p>
    <p>Item1</p>
    <p>Item2</p>
</article>`
).init();

new Accordion(
  'Accordion2',
  `<article>
      <p><b>Accordion body2</b></p>
      <p>Item1</p>
      <p>Item2</p>
  </article>`
).init();

new Accordion(
  'Accordion3',
  `<article>
      <p><b>Accordion body3</b></p>
      <p>Item1</p>
      <p>Item2</p>
  </article>`
).init();

// Додати необхідний (на ваш розсуд css у css файл)
// Дописати JS логіку компонента
// Тестування компонента з різними title та content (new)
// init() - document.body

class Progress {
  constructor(
    initialPercentage = 0,
    barColor = 'lightgreen',
    parent = document.body
  ) {
    this.initialPercentage = initialPercentage;
    this.barColor = barColor;
    this.parent = parent;

    this.currentPercentage = initialPercentage;
  }

  init() {
    const wrapper = document.createElement('div');
    wrapper.className = 'progress-wrapper';

    const bar = document.createElement('div');
    bar.className = 'progress-bar';

    bar.style.width = `${this.initialPercentage}%`;
    bar.style.backgroundColor = this.barColor;

    this.bar = bar;

    wrapper.appendChild(bar);

    this.parent.appendChild(wrapper);
  }

  changeProgress(newProgressPercentage) {
    const prevWidth = +this.bar.style.width.replace('%', '');

    if (prevWidth + newProgressPercentage >= 100) {
      this.bar.style.width = `100%`;
      this.bar.style.backgroundColor = 'red';
      this.currentPercentage = newProgressPercentage;
      return;
    }

    if (prevWidth + newProgressPercentage >= 25) {
      this.bar.style.backgroundColor = 'yellow';
    }

    if (prevWidth + newProgressPercentage >= 50) {
      this.bar.style.backgroundColor = 'orange';
    }

    if (prevWidth + newProgressPercentage >= 75) {
      this.bar.style.backgroundColor = 'orangered';
    }

    this.bar.style.width = `${prevWidth + newProgressPercentage}%`;
    this.currentPercentage = newProgressPercentage;
  }
}

new Progress(20).init();

new Progress(40, 'orange').init();

new Progress(100, 'rgb(40, 120, 40)').init();

const p1 = new Progress(10);
p1.init();

for (let i = 10; i <= 100; i += 5) {
  setTimeout(() => {
    const randomProgress = Math.floor(Math.random() * i + 5);
    p1.changeProgress(randomProgress);
  }, 1000 + i * 30);
}

class MouseMoveCanvas {
  constructor(x = 0, y = 0, parent = document.body) {
    this.x = x;
    this.y = y;
    this.parent = parent;
  }

  init(onMouseMove = () => {}, onInit = () => {}) {
    const area = document.createElement('div');
    area.className = 'mousemove-area';

    this.parent.appendChild(area);

    onInit(area);

    area.onmousemove = (event) => {
      onMouseMove(event, area);
    };
  }
}

const circle = document.createElement('div');
circle.className = 'circle';

document.body.appendChild(circle);

new MouseMoveCanvas().init((event, area) => {
  console.log(event, 'event');
  area.textContent = `X: ${event.pageX}\n Y: ${event.pageY}`;

  area.style.backgroundColor = `rgb(${event.pageX / 3}, ${event.pageY / 3}, ${
    event.pageX / 3 - event.pageY / 3
  })`;

  circle.style.left = `${event.pageX - 20}px`;
  circle.style.top = `${event.pageY - 20}px`;
});

// Space
new MouseMoveCanvas().init(
  // On Mouse move
  (event, area) => {
    const stars = [...area.children];

    stars.forEach((star) => {
      star.style.backgroundColor = `rgb(${event.pageX / 3}, ${
        event.pageY / 3
      }, ${event.pageX / 3 - event.pageY / 3})`;
    });
  },
  // On Init
  (area) => {
    area.classList.add('space');

    // Generating stars
    const starsQuantity = 500;

    for (let i = 0; i < starsQuantity; i++) {
      // Star
      const star = document.createElement('div');
      star.className = 'star';

      // Завдання
      // Додати click подію на кожну зірку (start)
      // На натискання на зірку має з`явитися alert
      // alert має вивести номер зірки (i)
      // після цього зірку треба сховати (star.style.visibility ...)
      star.onclick = () => {
        alert(`The number of the star: ${i}`);
        star.style.visibility = 'hidden';
      };

      const x = Math.floor(Math.random() * area.clientWidth);
      const y = Math.floor(Math.random() * area.clientHeight);

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      area.appendChild(star);
    }
  }
);
