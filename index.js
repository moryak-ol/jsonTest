let cont = require('./contacts.js');



// TODO: дописать функцию
function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        cont.listContacts();
        break;
  
      case 'get':
        console.log(cont.getContactById(id));
        break;
  
      case 'add':
        cont.addContact(name,email,phone);
        break;
  
      case 'remove':
        cont.removeContact(id);
        // ... id
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }

  }
  invokeAction({action: 'list'});
  invokeAction({action: 'get', id:'3'});