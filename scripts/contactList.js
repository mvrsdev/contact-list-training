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

function getContactFullName(contactData) {
  return `${contactData.name} ${contactData.surname}`;
}
const contactFullName = getContactFullName(contactData[1]);

function getFullEmail(contactData) {
  return `${contactData.email}${contactData.server}`;
}
const fullEmail = getFullEmail(contactData[1]);

function addNewContact(name, surname, email, server, cellNumber) {
  return (
    contactData.push('name'),
    contactData.push('surname'),
    contactData.push('email'),
    contactData.push('server'),
    contactData.push('cellNumber')
  );
}
