import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle any additional logic for submitting the data
    console.log('Submitted:', { name, email });
  };

  return (
    <div>
      <h1>User Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            id="name-input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="email-input"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Current values:</h2>
      <p className='output'>Name - {name}</p>
      <p>Email - {email}</p>
    </div>
  );
};

export default App;
