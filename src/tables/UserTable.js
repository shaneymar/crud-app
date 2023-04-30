import React from 'react'

const UserTable = ({users, deleteUser, editData}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email </th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
            users.length > 0 ? (
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className='button muted-button' onClick={() =>editData(user)}>Edit</button>
                            <button className='button muted-button' onClick={() => deleteUser(user.id)} >Delete</button>
                        </td>
                    </tr>
                ))
            ) : 
            (
            <tr> 
                <td colSpan={3}>No users Found</td>
            </tr>
            )
        }
            
            
        </tbody>
    </table>
  )
}

export default UserTable