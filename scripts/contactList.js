const contactData = [
  {
    name: 'Thiago',
    surname: 'Dias',
    email: 'anothermail',
    server: '@server.com',
    cellNumber: 11989890909,
    id: 2,
  },
  {
    name: 'Marcus',
    surname: 'Santos',
    email: 'myemail',
    server: '@server.com',
    cellNumber: 11986628317,
    id: 1,
  },
  {
    name: 'Renan',
    surname: 'Moura',
    email: 'notanemail',
    server: '@server.com',
    cellNumber: 11976439901,
    id: 1,
  },
  {
    name: 'Kátia',
    surname: 'Santos',
    email: 'verymail',
    server: '@server.com',
    cellNumber: 11986664932,
    id: 1,
  },
];

const getContactFullName = (contactData) => {
  return `${contactData.name} ${contactData.surname}`;
};
const contactFullName = getContactFullName(contactData[1]);

const getFullEmail = (contactData) => {
  return `${contactData.email}${contactData.server}`;
};
const fullEmail = getFullEmail(contactData[1]);

const addNewContact = (firstName, lastName, emailAdress, mailServer, phone) => {
  const newEntry = {
    name: firstName,
    surname: lastName,
    email: emailAdress,
    server: mailServer,
    cellNumber: phone,
  };
  contactData.push(newEntry);
};

const deleteContact = (phone) => {
  let foundIndex = contactData.findIndex((contact) => {
    return contact.cellNumber === phone;
  });
  contactData.splice(foundIndex, 1);
};

const showAllContacts = () => {
  return contactData;
};
const showAll = showAllContacts();


const searchByFullname = (term) => {
  let termLowerCase = term.toLowerCase();
  let contactFound = contactData.find((contact) => {
    return (
      contact.name.toLowerCase() === termLowerCase ||
      contact.surname.toLowerCase() === termLowerCase
    );
  });
  return contactFound;
}
const contactFound = searchByFullname('Dias');

const capitalizeText = (text) => {
  const splitedText = text.toLowerCase().split(' ');
  let toUperCase = splitedText.map(
    (nameLower) => nameLower.charAt(0).toUpperCase() + nameLower.slice(1)
  );
  return toUperCase.join(' ');
};

const formSubmitHandler = (event) => {
  // Get typed form data
  event.preventDefault();
  const formData = getFormData(event.target);

  // Add contact to the list
  console.log(formData); // Look the magic in here
};

const renderContactsList = () => {
  const CARD_LIST_SELECTOR = '.list-group';
  const CARD_CLASS_SELECTOR = '.list-group-item';
  const CARD_NAME_SELECTOR = '.contact-name';
  const CARD_EMAIL_SELECTOR = '.contact-email';
  const CARD_NUMBER_SELECTOR = '.contact-mobile';
  const DELETE_CONTACT_SELECTOR = '.btn-delete-contact';

  $(CARD_CLASS_SELECTOR).each(function(index) {
    if (index > 0) {
      $(this).remove();
    }
  });

  contactData.forEach((item, index) => {
    // Clone card element
    const currenContactCard = index > 0 ? $(`${CARD_CLASS_SELECTOR}:first`).clone() : $(CARD_CLASS_SELECTOR);

    // Fill clone with data
    $(currenContactCard).find(CARD_NAME_SELECTOR).text(`${item.name} ${item.surname}`);
    $(currenContactCard).find(CARD_EMAIL_SELECTOR).text(`${item.email}${item.server}`);
    $(currenContactCard).find(CARD_NUMBER_SELECTOR).text(`${item.cellNumber}`);
    $(currenContactCard).find(DELETE_CONTACT_SELECTOR).click(() => deleteContact(item.cellNumber));

    // Add contact card to the list container
    if (index > 0) {
      currenContactCard.appendTo(CARD_LIST_SELECTOR);
    }
  });
};


const getFormData = form => Object.fromEntries(new FormData(form));
renderContactsList();
