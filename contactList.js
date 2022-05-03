const contactData = {
  name: 'Marcus',
  surname: 'Santos',
  email: 'myemail@server.com',
  cellNumber: 11986628317
};

function getContactFullName (contactData) {
  return `${contactData.name} ${contactData.surname}`;
}
const contactFullName = getContactFullName (contactData);

