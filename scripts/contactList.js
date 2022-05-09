const contactData = [
  {
    name: 'Marcus',
    surname: 'Santos',
    email: 'myemail',
    server: '@server.com',
    cellNumber: 11986628317,
  },
  {
    name: 'Thiago',
    surname: 'Dias',
    email: 'anothermail',
    server: '@server.com',
    cellNumber: 11989890909,
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
  return alert('Contact added sucessfully!');
}

const deleteContact = (phone) => {
  const foundIndex = contactData.findIndex((contact) => {
    return contact.cellNumber === phone;
  });
  contactData.splice(foundIndex, 1);
  };

const showAllContacts = (contact) => {
  return contact.sort(contact.name);
};
const showAll = showAllContacts(contactData);

const searchByFullname = (term) => {
  let termLowerCase = term.toLowerCase();
  let contactFound = contactData.find((contact) => {
    let nameLowerCase = contact.name.toLowerCase();
    let surnameLowerCase = contact.surname.toLowerCase();
    return (
      nameLowerCase === termLowerCase || surnameLowerCase === termLowerCase
    );
  });
  return contactFound;
};
const contactFound = searchByFullname('Dias');

const capitalizeText = (text) => {
  const lowerText = text.toLowerCase();
  const splitedText = lowerText.split(' ');
  let toUperCase = splitedText.map((nameLower) => {
    return nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
  });
  const jointText = toUperCase.join(' ');
  return jointText;
};
