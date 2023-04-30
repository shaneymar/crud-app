import React, { useState } from 'react'

const AddUserForm = (props) => {

    const initialFormState = {id:null, name:'', username:'', email: ''}
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setUser({...user, [name]:value});
    }

   return (
    <form onSubmit={
        e => {
            e.preventDefault();
            if(!user.name || !user.username || !user.email ) return alert("No data is added") ;
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        <label htmlFor='name'>Name</label>
        <input type="text"  name="name" value={user.name} id="name" onChange={handleInputChange} />

        <label htmlFor='username'>Username</label>
        <input type="text" name="username" value={user.username} id="username" onChange={handleInputChange}/>

        <label htmlFor='email'>Email</label>
        <input type="email" name="email" value={user.email} id="email" onChange={handleInputChange}/>
        <button>Add new user</button>
      </form>
  )
}

export default AddUserForm