import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto py-8 px-4 bg-gray-50">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-900">{user.name}</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300">
        <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
        <p className="text-gray-700"><strong>Company:</strong> {user.company?.name}</p>
      </div>
    </div>
  );
};

export default UserDetail;
