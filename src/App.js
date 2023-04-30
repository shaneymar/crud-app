import { useState } from 'react';
import './App.css';
import UserTable from './tables/UserTable';

function App() {

  const usersData = [
    {id:1, name: "Shankar", username:"@sha28", email:"shankar3156@outlook.com"},
    {id:1, name: "Gopal", username:"@gopalkrishna31", email:"gopalKrish56@outlook.com"},
    {id:1, name: "Ram", username:"@ram@46", email:"rampgoblan@outlook.com"},
  ]

  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <div className='flex-row'>
        <div className='flex-large'>
            <h2>Add User</h2>
        </div>
        <hr />
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable users={users}  />
        </div>
      </div>
    </div>
  );
}

export default App;
