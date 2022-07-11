const { uuid } = require('uuidv4');

const contacts = [
  {
    // 'uuid -> Universal Unique ID',
    id: uuid(),
    name: 'Luiz',
    email: 'luiz@mail.com',
    category: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
