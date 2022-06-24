let fs = require("fs");
let path = require('path');

let contactsPath = path.resolve(__dirname, 'db', 'contacts.json');

let resultRead = JSON.parse(fs.readFileSync(contactsPath, 'utf-8'));

// Вернуть список контактов
module.exports.listContacts = function() {
    console.log(resultRead);
}
//listContacts();

// Вернуть контакт по id
module.exports.getContactById = function(contactId) {
    for (let i=0; i < resultRead.length; i++) {
        if (resultRead[i].id == contactId) {
            return resultRead[i]
        }
    }
    return "no contact";
  }
//console.log(getContactById('3'));
 
// Удалить контакт из файла контактов
module.exports.removeContact = function(contactId) {
    for (let i=0; i < resultRead.length; i++) {
        if (resultRead[i].id == contactId) {
            resultRead.splice(i,1);
            fs.writeFileSync(contactsPath, JSON.stringify(resultRead));
            break;
        }
    }
  }
//removeContact('8');

//  Добавить контакт в файл по id
module.exports.addContact = function (name1, email1, phone1) {
    let max = 0;
    for (let i=0; i < resultRead.length; i++) {
        if (Number(resultRead[i].id) > max) {
            max = Number(resultRead[i].id);
        }
    }
    resultRead.push({id : (max+1).toString(), 
        name : name1, 
        email : email1, 
        phone : phone1});
    console.log(resultRead)
    fs.writeFileSync(contactsPath, JSON.stringify(resultRead));
}
// addContact('Olya','olya@gmail.com','12345')
