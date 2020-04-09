import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filterContacts: [],
    filter: "",
    name: "",
    number: "",
  };

  addToContacts = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    this.isContact() !== true
      ? name.length && number.length
        ? contacts.push({ name: name, number: number, id: shortid.generate() })
        : alert("Enter name and number")
      : alert(`${name} is already in contacts`);

    this.setState(prev => ({ contacts: prev.contacts }));
    this.setState({
      name: "",
      number: "",
    });
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };
  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };
  handleChangeNameFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = e => {
    e.preventDefault();
    e.persist();
    const { contacts } = this.state;
    this.setState(() => {
      const filterContacts = contacts.filter(
        el =>
          el.name.toLowerCase().includes(e.target.value) ||
          el.number.toLowerCase().includes(e.target.value),
      );
      return {
        filterContacts,
      };
    });
  };

  deleteContact = e => {
    const { contacts } = this.state;
    const elId = e.target.attributes.id.value;
    const ContactListNew = contacts.filter(el => el.id !== elId);
    this.setState({
      contacts: ContactListNew,
      filterContacts: ContactListNew,
    });
  };

  isContact = e => {
    const { name, contacts } = this.state;
    return contacts.some(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
  };

  contactsId = shortid.generate();
  render() {
    const { name, number, contacts, filter, filterContacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleChangeName={this.handleChangeName}
          nameValue={name}
          numberValue={number}
          handleChangeNumber={this.handleChangeNumber}
          addToContacts={this.addToContacts}
          contactsId={this.contactsId}
          isContact={this.isContact}
        />

        <h2>Contacts</h2>
        <Filter
          handleChangeNameFilter={this.handleChangeNameFilter}
          filterContacts={this.filterContacts}
          contacts={contacts}
          filter={filter}
        />
        <ContactList
          contacts={contacts}
          filterContacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
