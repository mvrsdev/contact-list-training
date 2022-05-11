const contactData = [
  {
    name: 'Thiago',
    surname: 'Dias',
    email: 'anothermail@server.com',
    cellNumber: 11989890909,
    id: 1,
  },
  {
    name: 'Marcus',
    surname: 'Santos',
    email: 'myemail@server.com',
    cellNumber: 11986628317,
    id: 2,
  },
  {
    name: 'Renan',
    surname: 'Moura',
    email: 'notanemail@server.com',
    cellNumber: 11976439901,
    id: 3,
  },
  {
    name: 'Kátia',
    surname: 'Santos',
    email: 'verymail@server.com',
    cellNumber: 11986664932,
    id: 4,
  },
];

const getContactFullName = contactData => {
  return `${contactData.name} ${contactData.surname}`;
};

const addNewContact = (firstName, lastName, emailAddress, phone) => {
  const newEntry = {
    name: capitalizeText(firstName),
    surname: capitalizeText(lastName),
    email: emailAddress,
    cellNumber: phone,
  };
  contactData.push(newEntry);
};

const deleteContact = id => {
  console.log('log id: ', id);
  const foundIndex = contactData.findIndex(contact => {
    return contact.id === id;
  });
  console.log('found index: ', foundIndex);
  contactData.splice(foundIndex, 1);
};

const showAllContacts = () => {
  return contactData;
};

const searchByFullname = term => {
  const termLowerCase = term.toLowerCase();
  const contactFound = contactData.find(contact => {
    return (
      contact.name.toLowerCase() === termLowerCase ||
      contact.surname.toLowerCase() === termLowerCase
    );
  });
  return contactFound;
};

const capitalizeText = text => {
  const splitedText = text.toLowerCase().split(' ');
  const toUperCase = splitedText.map(
    nameLower => nameLower.charAt(0).toUpperCase() + nameLower.slice(1)
  );
  return toUperCase.join(' ');
};

const formSubmitHandler = event => {
  event.preventDefault();
  const formData = getFormData(event.target);
  addNewContact(
    formData.firstName,
    formData.lastName,
    formData.emailAddress,
    formData.phone
  );
  renderContactsList(contactData);
  showSuccessMessage(`${formData.firstName} adicionado com sucesso!`, 5000);
  clearFormData(event.target);
};

const renderContactsList = contactList => {
  const CARD_LIST_SELECTOR = '.list-group';
  const CARD_CLASS_SELECTOR = '.list-group-item';
  const CARD_NAME_SELECTOR = '.contact-name';
  const CARD_EMAIL_SELECTOR = '.contact-email';
  const CARD_NUMBER_SELECTOR = '.contact-mobile';
  const DELETE_CONTACT_SELECTOR = '.btn-delete-contact';

  // Reset list
  $(CARD_CLASS_SELECTOR).each(function (index) {
    if (index > 0) {
      $(this).remove();
    }
  });

  contactList.forEach((item, index) => {
    // Clone card element
    const currenContactCard =
      index > 0
        ? $(`${CARD_CLASS_SELECTOR}:first`).clone(false, false)
        : $(CARD_CLASS_SELECTOR);

    // Fill clone with data
    $(currenContactCard)
      .find(CARD_NAME_SELECTOR)
      .text(getContactFullName(item));
    $(currenContactCard).find(CARD_EMAIL_SELECTOR).text(item.email);
    $(currenContactCard).find(CARD_NUMBER_SELECTOR).text(`${item.cellNumber}`);
    $(currenContactCard)
      .find(DELETE_CONTACT_SELECTOR)
      .click(() => {
        deleteContact(item.id);
        renderContactsList(contactData);
        console.log(contactData);
      });

    // Add contact card to the list container
    if (index > 0) {
      currenContactCard.appendTo(CARD_LIST_SELECTOR);
    }
  });
};

const getFormData = form => Object.fromEntries(new FormData(form));
const clearFormData = form => $(form).trigger('reset');
const showSuccessMessage = (message, duration) => {
  const HIDDEN_CLASS = 'visually-hidden';
  const alertBox = $('.alert-success');

  alertBox.text(message);
  alertBox.removeClass(HIDDEN_CLASS);
  setTimeout(
    () => {
      alertBox.addClass(HIDDEN_CLASS);
    },
    duration ? duration : 3000
  );
};

window.onload = () => {
  renderContactsList(contactData);
  document
    .getElementById('contact-form')
    .addEventListener('submit', formSubmitHandler);
};
