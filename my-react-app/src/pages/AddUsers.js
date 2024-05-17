import React, { useState } from 'react';
import './AddUsers.css';

const AddUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  const handleAddUser = () => {
    if (newUser.trim() !== '') {
      setUsers([...users, newUser]);
      setNewUser('');
    }
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2 className="heading">Add Users</h2>
      <div className="add-users-container">
        <input
          type="text"
          className="user-input"
          placeholder="Enter username"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddUser}>Add User</button>
      </div>
      <div className="user-list">
        {users.map((user, index) => (
          <div key={index} className="user-item">
            <span>{user}</span>
            <button className="delete-btn" onClick={() => handleDeleteUser(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddUsers;
