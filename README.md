# BlackCoder@CodeWise.com


```javascript
class Contact {
  constructor(firstName, lastName, phoneNumber, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
  }
}
```

The `Contact` class is responsible for creating contact objects. It has a constructor that takes four parameters (`firstName`, `lastName`, `phoneNumber`, `emailAddress`) and assigns them to corresponding properties of the object.

```javascript
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  
  displayContacts() {
    // ...
  }

  addContact(firstName, lastName, phoneNumber, emailAddress) {
    // ...
  }

  editContact(index) {
    // ...
  }

  deleteContact(index) {
    // ...
  }

  clearForm() {
    // ...
  }
}
```

The `AddressBook` class represents an address book. It has an array property called `contacts` to store the list of contacts. It also has several methods for managing the contacts: `displayContacts`, `addContact`, `editContact`, `deleteContact`, and `clearForm`.

```javascript
const addressBook = new AddressBook();
```

An instance of the `AddressBook` class is created using the `new` keyword and assigned to the variable `addressBook`.

```javascript
document.querySelector('#form').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.querySelector('#firstNameInput').value;
  const lastName = document.querySelector('#lastNameInput').value;
  const phoneNumber = document.querySelector('#phoneInput').value;
  const emailAddress = document.querySelector('#emailInput').value;

  addressBook.addContact(firstName, lastName, phoneNumber, emailAddress);
});
```

This code attaches an event listener to the submit event of the form with the ID `form`. When the form is submitted, it prevents the default form submission behavior. It then retrieves the values of the input fields (`firstNameInput`, `lastNameInput`, `phoneInput`, `emailInput`) and passes them to the `addContact` method of the `addressBook` instance.

```javascript
function editContact(index) {
  addressBook.editContact(index);
}

function deleteContact(index) {
  addressBook.deleteContact(index);
}
```

These two functions are defined to call the `editContact` and `deleteContact` methods of the `addressBook` instance, passing the index of the contact to be edited or deleted.

Overall, this code sets up the `Contact` and `AddressBook` classes to handle creating and managing contacts. It also connects the functionality to the HTML form and provides event handlers for editing and deleting contacts.