import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      })
      .catch(() => setMessage('Failed to fetch user data.'));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { name, email, phone };

    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
      .then(() => setMessage('User updated successfully!'))
      .catch(() => setMessage('Error updating user'));
  };

  return (
    <div className="container mx-auto py-8 px-4 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900">Edit User</h1>
      {message && <p className="text-center text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleUpdate} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter user's name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter user's phone number"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
