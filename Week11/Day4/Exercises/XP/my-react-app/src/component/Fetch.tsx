import React, { useState, useEffect } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
          setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users List</h1>
        <div>
          <h2>User 1</h2>
          <p>Name: {users[0].name}</p>
          <p>Email: {users[0].email}</p>
          <h2>User 2</h2>
          <p>Name: {users[1].name}</p>
          <p>Email: {users[1].email}</p>
        </div>
    </div>
  );
};

export default FetchUsers;
