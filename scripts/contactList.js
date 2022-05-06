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

function getFullEmail(contactData) {
  return `${contactData.email}${contactData.server}`;
}
const fullEmail = getFullEmail(contactData[1]);

function addNewContact() {
  let newEntry = {
    name: '',
    surname: '',
    email: '',
    server: '',
    cellNumber: '',
  };

  contactData.push(newEntry);
  return alert('Contact added sucessfully!');
}

function deleteContact () {
  let deleteEntry = {
    name: '',
    surname: '',
    email: '',
    server: '',
    cellNumber: '',
  };

  contactData.pop(deleteEntry);
  return alert('Contact deleted sucessfully!');
}

function showAllContacts(contact) {
  return contact.sort(contact.name);
}
const showAll = showAllContacts(contactData);

function searchContactInfo(contact) {
  return contact.name;
}
const searchContact = searchContactInfo(contactData[1]);
