class Contact{
    constructor(firstName, lastName, phoneNumber, emailAddress){
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.emailAddress = emailAddress
    }
}


class AddressBook{
    constructor(){
        this.contacts = [];
    }

    displayContacts(){
        const contactContainer = document.querySelector('.contacts')
        contactContainer.innerHTML = ''

        this.contacts.forEach((contact, index) => {
            const contactElement = document.querySelector('div')
            contactElement.innerHTML = `
            <h3>${contact.firstName}</h3>
            <h3>${contact.lastName}</h3>
            <p>${contact.phoneNumber}</p>
            <p>${contact.emailAddress}</p>
            <button onClick="editContact(${index})">Edit</button>
            <button onClick="deleteContact(${index})">Delete</button>
            `
            contactContainer.appendChild(contactElement)
        });
    }

    addContact(firstName, lastName, phoneNumber, emailAddress){
        const newContact = new Contact(firstName, lastName, phoneNumber, emailAddress)
        this.contacts.push(newContact)
        this.displayContacts();
        this.clearForm();
    }

    editContact(index) {
        const contact = this.contacts[index]

        const newFirstName = prompt("Enter the new first name:", contact.firstName);
        const newLastName = prompt("Enter the new last name:", contact.lastName);
        const newPhoneNumber = prompt("Enter the new phone number:", contact.phoneNumber);
        const newEmailAddress = prompt("Enter the new email address:", contact.emailAddress);

        contact.firstName = newFirstName
        contact.lastName = newLastName
        contact.phoneNumber = newPhoneNumber
        contact.emailAddress = newEmailAddress
        this.displayContacts();
    }

    deleteContact(index){
        const confirmDelete = confirm("Are you sure you want to delete this contact?");

        if (confirmDelete){
            this.contacts.splice(index, 1)
            this.displayContacts();
        }
    }
    clearForm(){
        document.querySelector('#firstNameInput').value = '';
        document.querySelector('#lastNameInput').value = '';
        document.querySelector('#phoneInput').value = '';
        document.querySelector('#emailInput').value = '';
        document.querySelector('#firstNameInput').focus();
    }
}

const addressBook = new AddressBook()

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#firstNameInput').value;
    const lastName = document.querySelector('#lastNameInput').value;
    const phoneNumber = document.querySelector('#phoneInput').value;
    const emailAddress = document.querySelector('#emailInput').value;

    addressBook.addContact(firstName, lastName, phoneNumber, emailAddress)
});

function editContact(index){
    addressBook.addContact(index)
}

function deleteContact(index){
    addressBook.addContact(index)
}