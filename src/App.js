import { useState } from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

function App() {

  const usersData = [
    // {id:1, name: "Shankar", username:"@sha28", email:"shankar3156@outlook.com"},
    // {id:1, name: "Gopal", username:"@gopalkrishna31", email:"gopalKrish56@outlook.com"},
    // {id:1, name: "Ram", username:"@ram@46", email:"rampgoblan@outlook.com"},
  ]

  //Adding new User to Table
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  //Delete User
  const deleteUser = (id) =>{
    setUsers(users.filter((user) => user.id!== id))
  }

  //Edit User/Update User
  const editData = (user) =>{
    setEditing(true);
    setCurrentUser({id:user.id, name:user.name, username:user.username, email:user.email});

  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === !id?updatedUser : user)))
  }
  //Read setting state
  const [users, setUsers] = useState(usersData);

  //edit user state
  const[editing, setEditing] = useState(false);


  const initialFormState = {id:null, name:'', username:'', email: ''}
  const [currentUser, setCurrentUser] = useState(initialFormState);

  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <div className='flex-row'>
        <div className='flex-large'>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser}/>
        </div>
        <hr />
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable users={users}  deleteUser={deleteUser} editData={editData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
