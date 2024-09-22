// App.js
import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { updateName, updateEmail } from './action';

const UserForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName) dispatch(updateName(inputName));
    if (inputEmail) dispatch(updateEmail(inputEmail));
    setInputName('');
    setInputEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={inputName} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={inputEmail} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Current values in store:</h2>
      <p>Name - {name}</p>
      <p>Email - {email}</p>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
};

export default App;
