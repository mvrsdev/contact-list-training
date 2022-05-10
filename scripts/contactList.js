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
  const foundIndex = contactData.findIndex((contact) => {
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
};
const contactFound = searchByFullname('Dias');

const capitalizeText = (text) => {
  const splitedText = text.toLowerCase().split(' ');
  let toUperCase = splitedText.map(
    (nameLower) => nameLower.charAt(0).toUpperCase() + nameLower.slice(1)
  );
  return toUperCase.join(' ');
};

const formSubmitHandler = (event) => {
  event.preventDefault();
  addNewContact();
  console.log(event)
};
