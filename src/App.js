import logo from './logo.svg';
import "./App.css";
import file from "./contacts.json";
import { useState } from 'react';
import React from 'react';

function App() {

  const [contacts, setContacts] = useState(file.slice(0, 5));
  console.log(typeof contacts);

  const contactHandler = () => {
    const rand = Math.floor(Math.random() * (file.length - 5) + 5);
    const copy = [...contacts];
    console.log(copy)
    copy.unshift(file[rand]);
    setContacts(copy);
  }

  const nameHandler = () => {
    const copy = [...contacts];
    copy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(copy);
  }

  const popularityHandler = () => {
    const copy = [...contacts];
    copy.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    setContacts(copy);
  }

  const deleteHandler = (id) => {
    console.log(id);
    let copy = [...contacts];
    copy = copy.filter((elem) => elem.id !== id);
    setContacts(copy);
}

  return <div className="App">
    <table>
      <thead>
        <tr>
          <th colSpan="5">IronContacts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((contact, i) => {
        console.log(contact);
        return <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} alt={contact.name} style={{
              width: "100px",
              height: "130px"
            }} />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          {contact.wonOscar && (
            <td>&#127942;</td>
          )}
          {!contact.wonOscar && (
            <td>No trophy !</td>
          )}
          {contact.wonEmmy && (
            <td>&#127942;</td>
          )}
          {!contact.wonEmmy && (
            <td>No trophy !</td>
          )}
          <td><button onClick={() => deleteHandler(contact.id)}>Delete Contact</button></td>
        </tr> 
        })
        }
      </tbody>
    </table>
    <button onClick={contactHandler}>ADD CONTACT</button>
    <button onClick={nameHandler}>SORT BY NAME</button>
    <button onClick={popularityHandler}>SORT BY POPULARITY</button>
  </div>;
}
export default App;
