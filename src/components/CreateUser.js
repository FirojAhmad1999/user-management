import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}@example.in`,
      phone: `+91 ${phone}`
    };

    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(() => setMessage('User created successfully!'))
      .catch(() => setMessage('Error creating user'));
  };

  return (
    <div className="container mx-auto py-8 px-4 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900">Create New User</h1>
      {message && <p className="text-center text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter user's first name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter user's last name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter user's email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter user's phone number"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
