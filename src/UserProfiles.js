import React, { useState } from 'react';

function UserProfiles() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  const addUser = (e) => {
    e.preventDefault();
    if (name && age && occupation) {
      const newUser = { id: Date.now(), name, age, occupation };
      setUsers([...users, newUser]);
      setName('');
      setAge('');
      setOccupation('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profiles</h1>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}, <strong>Occupation:</strong> {user.occupation}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available</p>
      )}
      <form onSubmit={addUser} style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserProfiles;
