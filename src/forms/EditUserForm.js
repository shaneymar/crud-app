import React, { useState } from 'react'

const EditUserForm = (props) => {

const [user, setUser] = useState(props.currentUser);

const handleInputChange = (e) =>{
    const {name, value} = e.target
    setUser({...user, [name]:value});
}
  return (
    <form onSubmit={
        e => {
            e.preventDefault();
            if(!user.name || !user.username || !user.email ) return;
            props.updateUser(user.id, user);
            
        }
    }>
        <label htmlFor='name'>Name</label>
        <input type="text"  name="name" value={user.name} id="name" onChange={handleInputChange} />

        <label htmlFor='username'>Username</label>
        <input type="text" name="username" value={user.username} id="username" onChange={handleInputChange}/>

        <label htmlFor='email'>Email</label>
        <input type="email" name="email" value={user.email} id="email" onChange={handleInputChange}/>
        <button>Update user</button>
        <button onClick={() => props.setEditing(false)} className='button muted-button'>Cancel</button>
      </form>
  )
}

export default EditUserForm