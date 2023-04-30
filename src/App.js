import { useState } from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

function App() {

  const usersData = [
    {id:1, name: "Shankar", username:"@sha28", email:"shankar3156@outlook.com"},
    
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
  const editData = (user)=>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username, email:user.email});
}

   const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
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
            {
              editing ? (
                <div>
                  <h2>Edit User</h2>
                  <EditUserForm 
                    setEditing = {setEditing}
                    currentUser = {currentUser}
                    updateUser = {updateUser}
                  />
                </div> 
              ) : (
                <div>
                  <h2>Add user</h2>
                   <AddUserForm addUser={addUser}/>
                </div>
              )
            }
           
        </div>
        <hr />
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable 
          users={users}  
          deleteUser={deleteUser} 
          editData={editData} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
